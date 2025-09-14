import { RootState } from './../../redux/store';
import { AddBookPayload, Book } from '../../types/books-type';
import { handleAxiosError, instance } from './api';

export const addBookHelperThunk = async <T extends Book | AddBookPayload>(
  cred: T,
  url: string,
  getState: () => RootState,
  rejectWithValue: (value: string) => unknown,
) => {
  const books = getState().books.library?.books ?? [];
  const alreadyExists = books.some(
    (book) =>
      book.title === cred.title &&
      book.author === cred.author &&
      book.totalPages === cred.totalPages,
  );
  if (alreadyExists) {
    return rejectWithValue('Book already exists in your library');
  }
  try {
    const { data } = await instance.post(url, cred);
    return data;
  } catch (err) {
    return rejectWithValue(handleAxiosError(err));
  }
};
