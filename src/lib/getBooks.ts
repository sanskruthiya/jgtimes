import fs from 'fs';
import path from 'path';

interface BookInfo {
  title_jp: string;
  title_en: string;
  description: string;
  category: string;
  //rating: number;
  link: string;
  image: string;
}

export function getBooks(): BookInfo[] {
  const booksDirectory = path.resolve(process.cwd(), 'books');
  const fullPath = path.join(booksDirectory, 'books.json');
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const booksJson = JSON.parse(fileContents);

  const books: BookInfo[] = [];
  booksJson.forEach((book: BookInfo) => {
    books.push(book);
  });

  return books;
}