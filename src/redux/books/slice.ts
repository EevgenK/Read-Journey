import { Book } from '../../types/books-type';
import { createSlice } from '@reduxjs/toolkit';
import { addBookToLibrary, getRecommendBooks } from './operations';

export interface BooksState {
  books: {
    results: (Book | null)[];
    totalPages: number;
    page: number;
    perPage: number;
  } | null;
  library: {
    books: Book[];
  } | null;
  isLoading: boolean;
  error: string | null;
}
const initialState: BooksState = {
  books: null,
  library: {
    books: [],
  },
  isLoading: false,
  error: null,
};

const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getRecommendBooks.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getRecommendBooks.fulfilled, (state, action) => {
        state.isLoading = false;
        state.books = action.payload;
      })
      .addCase(getRecommendBooks.rejected, (state, action) => {
        state.isLoading = false;
        state.error =
          typeof action.payload === 'string' ? action.payload : 'Unknown error';
      })
      .addCase(addBookToLibrary.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(addBookToLibrary.fulfilled, (state, action) => {
        state.isLoading = false;
        state.library?.books.push(action.payload);
      })
      .addCase(addBookToLibrary.rejected, (state, action) => {
        state.isLoading = false;
        state.error =
          typeof action.payload === 'string' ? action.payload : 'Unknown error';
      });
  },
});
export const booksReducer = booksSlice.reducer;
