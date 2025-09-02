export interface Book {
  _id: string;
  title: string;
  author: string;
  imageUrl: string;
  totalPages: number;
  recommend: boolean;
}
export interface BooksPayload {
  title?: string | null;
  author?: string | null;
  page: number;
  limit: number;
}
export type AddBookPayload = Partial<
  Pick<Book, 'title' | 'author' | 'totalPages'>
>;
