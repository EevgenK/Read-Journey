import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AddBookPayload } from '../../types/books-type';

const initialState: AddBookPayload = {
  title: null,
  author: null,
};
const slice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    changeFilters: (state, action: PayloadAction<AddBookPayload>) => {
      return { ...state, ...action.payload };
    },
  },
});

export const { changeFilters } = slice.actions;
export default slice.reducer;
