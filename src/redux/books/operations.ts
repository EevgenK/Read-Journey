import { createAsyncThunk } from '@reduxjs/toolkit';
import { handleAxiosError, instance } from '../../utils/api/api';
import { BooksPayload } from '../../types/books-type';

export const getRecommendBooks = createAsyncThunk(
  'books/getRecommendBooks',
  async (cred: BooksPayload, { rejectWithValue }) => {
    try {
      const { data } = await instance.get('books/recommend', {
        params: cred,
      });
      return data;
    } catch (err) {
      return rejectWithValue(handleAxiosError(err));
    }
  },
);
