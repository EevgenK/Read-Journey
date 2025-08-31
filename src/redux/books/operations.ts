import { createAsyncThunk } from '@reduxjs/toolkit';
import { instance } from '../../utils/api/api';

export const getRecommendedBooks = createAsyncThunk(
  'books/getRecommendedBooks',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await instance.get('books/recommended');
      return data;
    } catch (error) {
      if (error instanceof Error) {
        return rejectWithValue(error.message);
      }
      return rejectWithValue('Unknown error');
    }
  },
);
