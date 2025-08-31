export interface Book {
  _id: string;
  title: string;
  author: string;
  imageUrl: string;
  totalPages: number;
  recommend: boolean;
}
export interface BooksPayload {
  title?: string;
  author?: string;
  page: number;
  limit: number;
}
