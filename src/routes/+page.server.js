import { getArticles } from '$lib/getArticles';

export async function load() {
  const articles = getArticles();

  return {
    articles
  };
}