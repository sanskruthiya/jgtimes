import fs from 'fs';
import path from 'path';
import { promisify } from 'util';
import markdown from 'markdown-it'; // 外部ライブラリである markdown-it を使用してマークダウンをHTMLに変換
import footnote from 'markdown-it-footnote'; // 脚注機能を提供するプラグイン
import matter from 'gray-matter';
import { format } from 'date-fns';
import { getArticles } from '$lib/getArticles';

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

    const articles = getArticles();
    
    // シリアライズ可能なデータに変換
    const responseData = {
      articles: articles.map(article => ({
        ...article,
        metadata: article.metadata ? { ...article.metadata } : null
      })),
      params: { articleId: params.articleId },  // 必要なプロパティのみを抽出
      htmlContent,
      metadata: metadata ? { ...metadata } : null
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