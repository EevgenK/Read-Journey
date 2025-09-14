import { createAsyncThunk } from '@reduxjs/toolkit';
import { handleAxiosError, instance } from '../../utils/api/api';
import {
  AddBookPayload,
  Book,
  BookId,
  BooksPayload,
} from '../../types/books-type';
import { useDispatch } from 'react-redux';
import { openModal } from '../modal/slice';
import { RootState } from '../store';
import {
  addBookHelperThunk,
  isAlreadyExistedBook,
} from '../../utils/api/addBookHelperThunk';

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

export const addBookToLibrary = createAsyncThunk<
  Book,
  AddBookPayload,
  { rejectValue: string; state: RootState }
>(
  'books/addBookToLibrary',
  async (cred: AddBookPayload, { rejectWithValue, getState }) => {
    return addBookHelperThunk(cred, 'books/add', getState, rejectWithValue);
  },
);

export const addRecommendedBookToLibrary = createAsyncThunk<
  Book,
  Book,
  { rejectValue: string; state: RootState }
>(
  'books/addRecommendedBookToLibrary',
  async (cred: Book, { rejectWithValue, getState }) => {
    return addBookHelperThunk(
      cred,
      `books/add/${cred._id}`,
      getState,
      rejectWithValue,
    );
  },
);

export const getLibraryBooks = createAsyncThunk(
  'books/getLibraryBooks',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await instance.get('books/own');
      return data;
    } catch (err) {
      return rejectWithValue(handleAxiosError(err));
    }
  },
);
export const deleteBookFromLibrary = createAsyncThunk<
  { message: string; id: BookId },
  BookId,
  { rejectValue: string; state: RootState }
>('books/deleteBookFromLibrary', async (id: BookId, { rejectWithValue }) => {
  try {
    const { data } = await instance.delete(`books/remove/${id}`);
    return data;
  } catch (err) {
    return rejectWithValue(handleAxiosError(err));
  }
});
