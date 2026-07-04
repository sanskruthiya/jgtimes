import fs from 'fs';
import path from 'path';
import { promisify } from 'util';
import markdown from 'markdown-it'; // 外部ライブラリである markdown-it を使用してマークダウンをHTMLに変換
import footnote from 'markdown-it-footnote'; // 脚注機能を提供するプラグイン
import matter from 'gray-matter';
import { format } from 'date-fns';
import { getArticles } from '$lib/getArticles';
import { supabase } from '$lib/server/supabase';

const readFile = promisify(fs.readFile);

export async function load({ params }) {
  // パラメータからファイル名を取得
  const { articleId } = params;
  // ファイルパスを作成
  const filePath = path.resolve('articles/en', `${articleId}.md`);
  
  // ファイルを読み込む
  let fileContent;
  try {
    fileContent = await readFile(filePath, 'utf-8');
  } catch (err) {
    console.error('Error reading file:', err);
    return {
      status: 404,
      error: new Error('Article not found')
    };
  }

  // gray-matterを使ってMarkdownとFront Matterを分離
  try {
    const parsedMatter = matter(fileContent);
    const mdParser = new markdown({
      html: true,       // HTMLタグを許可
      linkify: true,    // URLを自動的にリンクに変換
      typographer: true // 言語に依存しない置換と引用符の処理を有効化
    });
    // 脚注プラグインを有効化
    mdParser.use(footnote);
    const htmlContent = mdParser.render(parsedMatter.content);
    let metadata = parsedMatter.data;
    
    // 日付のフォーマット化
    if (metadata.date instanceof Date) {
      metadata.date = format(metadata.date, 'yyyy-MM-dd');
    }

    // 日本語版の読み込み（存在する場合のみ）
    let htmlContentJa = null;
    let metadataJa = null;
    const jaFilePath = path.resolve('articles/ja', `${articleId}.md`);
    try {
      const jaFileContent = await readFile(jaFilePath, 'utf-8');
      const parsedMatterJa = matter(jaFileContent);
      htmlContentJa = mdParser.render(parsedMatterJa.content);
      metadataJa = parsedMatterJa.data;
      if (metadataJa.date instanceof Date) {
        metadataJa.date = format(metadataJa.date, 'yyyy-MM-dd');
      }
    } catch {
      // JA版なし
    }

    const articles = getArticles();

    // 承認済みコメントを取得
    const { data: comments } = await supabase
      .from('comments')
      .select('id, author_name, content, created_at')
      .eq('article_id', articleId)
      .eq('status', 'approved')
      .order('created_at', { ascending: true });

    // シリアライズ可能なデータに変換
    const responseData = {
      articles: articles.map(article => ({
        ...article,
        metadata: article.metadata ? { ...article.metadata } : null
      })),
      params: { articleId: params.articleId },  // 必要なプロパティのみを抽出
      htmlContent,
      metadata: metadata ? { ...metadata } : null,
      htmlContentJa,
      metadataJa: metadataJa ? { ...metadataJa } : null,
      comments: comments || []
    };

    // 変換したデータを返す
    return responseData;
  } catch (err) {
    console.error('Error parsing markdown:', err);
    return {
      status: 500,
      error: new Error('Error parsing article content')
    };
  }
}

export const actions = {
  postComment: async ({ request, params }) => {
    const formData = await request.formData();
    const raw = formData.get('author_name')?.toString().trim();
    const author_name = raw || 'Anonymous';
    const content = formData.get('content')?.toString().trim();

    if (!content) {
      return { success: false, message: 'Please enter a comment.' };
    }
    if (content.length > 1000) {
      return { success: false, message: 'Comment must be 1000 characters or fewer.' };
    }

    const { error } = await supabase
      .from('comments')
      .insert({ article_id: params.articleId, author_name, content });

    if (error) {
      console.error('Comment insert error:', error);
      return { success: false, message: 'Failed to submit. Please try again later.' };
    }

    return { success: true, message: 'Comment submitted! It will appear after review.' };
  }
};