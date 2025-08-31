import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '../store';
export const selectBooks = (state: RootState) => state.books.books?.results;
export const selectBooksCurrentPage = (state: RootState) =>
  state.books.books?.page;
export const selectBooksTotalPages = (state: RootState) =>
  state.books.books?.totalPages;
export const selectIsBooksLoading = (state: RootState) => state.books.isLoading;
export const selectBooksError = (state: RootState) => state.books.error;
