import { PayloadAction } from '@reduxjs/toolkit';
import { BooksState } from '../redux/books/slice';

export const getShortTitle = (title: string): string => {
  if (!title) return '';
  const idx = title.indexOf('.');
  return idx !== -1 ? title.slice(0, idx) : title;
};
// utils for reducers and thunks
export const handlePending = (state: BooksState) => {
  state.isLoading = true;
  state.error = null;
};
export const handleRejected = (
  state: BooksState,
  action: PayloadAction<unknown>,
) => {
  state.isLoading = false;
  state.error =
    typeof action.payload === 'string' ? action.payload : 'Unknown error';
};
