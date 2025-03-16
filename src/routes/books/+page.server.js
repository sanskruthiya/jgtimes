import { getBooks } from '$lib/getBooks';

export async function load() {
  const books = getBooks();

  return {
    books
  };
}