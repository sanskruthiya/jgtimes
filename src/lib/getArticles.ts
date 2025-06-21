import { readFileSync, readdirSync } from 'fs';
import { resolve, join } from 'path';
import matter from 'gray-matter';

interface Metadata {
  title: string;
  date: string;
}

interface ArticleInfo {
  slug: string;
  metadata: Metadata;
}

export function getArticles(): ArticleInfo[] {
  const articlesDirectory = resolve(process.cwd(), 'articles/en');
  const filenames = readdirSync(articlesDirectory);

  const articles: ArticleInfo[] = filenames
    .filter((filename: string) => filename.endsWith('.md'))
    .map((filename: string) => {
      const slug = filename.replace(/\.md$/, '');
      const fullPath = join(articlesDirectory, filename);
      const fileContents = readFileSync(fullPath, 'utf8');
      const { data } = matter(fileContents);

      // 必須メタデータの存在チェック
      if (!data.title || !data.date) {
        console.warn(`Warning: Missing required metadata (title or date) in ${filename}`);
        return null;
      }

      return { slug, metadata: data as Metadata };
    })
    .filter((article: ArticleInfo | null): article is ArticleInfo => article !== null);

  articles.sort((a: ArticleInfo, b: ArticleInfo) => {
    const aDate = new Date(a.metadata.date);
    const bDate = new Date(b.metadata.date);
    return bDate.valueOf() - aDate.valueOf();
  });

  return articles;
}