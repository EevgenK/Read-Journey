import { Book } from '../../types/books-type';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {
  addBookToLibrary,
  addRecommendedBookToLibrary,
  deleteBookFromLibrary,
  getLibraryBooks,
  getRecommendBooks,
} from './operations';
import { handlePending, handleRejected } from '../../utils/fn_helpers';

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
      .addCase(getRecommendBooks.pending, handlePending)
      .addCase(getRecommendBooks.fulfilled, (state, action) => {
        state.isLoading = false;
        state.books = action.payload;
      })
      .addCase(getRecommendBooks.rejected, handleRejected)
      .addCase(getLibraryBooks.pending, handlePending)
      .addCase(getLibraryBooks.fulfilled, (state, action) => {
        state.isLoading = false;
        state.library = { books: action.payload };
      })
      .addCase(getLibraryBooks.rejected, handleRejected)
      .addCase(deleteBookFromLibrary.pending, handlePending)

      .addCase(
        deleteBookFromLibrary.fulfilled,
        (state, action: PayloadAction<{ id: string }>) => {
          state.isLoading = false;
          state.library!.books =
            state.library?.books.filter(
              (book) => book._id !== action.payload.id,
            ) ?? [];
        },
      )
      .addCase(deleteBookFromLibrary.rejected, handleRejected)
      .addMatcher(
        (action) =>
          [
            addBookToLibrary.pending.type,
            addRecommendedBookToLibrary.pending.type,
          ].includes(action.type),
        handlePending,
      )
      .addMatcher(
        (action) =>
          [
            addBookToLibrary.fulfilled.type,
            addRecommendedBookToLibrary.fulfilled.type,
          ].includes(action.type),
        (state, action: PayloadAction<Book>) => {
          state.isLoading = false;
          state.library?.books.push(action.payload);
        },
      )
      .addMatcher(
        (action) =>
          [
            addBookToLibrary.rejected.type,
            addRecommendedBookToLibrary.rejected.type,
          ].includes(action.type),
        handleRejected,
      );
  },
});
export const booksReducer = booksSlice.reducer;
