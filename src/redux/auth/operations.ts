import { createAsyncThunk } from '@reduxjs/toolkit';
import { instance, setAuthHeader } from '../../utils/api';
import { RegisterPayload } from '../../types/auth-types';
import { AxiosError } from 'axios';

export const registerUser = createAsyncThunk(
  'user/register',
  async (cred: RegisterPayload, { rejectWithValue }) => {
    try {
      const { data } = await instance.post('users/signup', cred);
      const loginRes = await instance.post('users/signin', {
        email: data.email,
        password: cred.password,
      });
      setAuthHeader(loginRes.data.token);
      return data;
    } catch (err) {
      const error = err as AxiosError<{ data?: { message?: string } }>;
      return rejectWithValue(
        error.response?.data?.data?.message ?? 'Server error',
      );
    }
  },
);

export const loginUser = createAsyncThunk(
  'user/login',
  async (cred: RegisterPayload, { rejectWithValue }) => {
    try {
      const { data } = await instance.post('users/signin', cred);
      setAuthHeader(data.token);
      return data;
    } catch (err) {
      const error = err as AxiosError<{ data?: { message?: string } }>;
      return rejectWithValue(
        error.response?.data?.data?.message ?? 'Server error',
      );
    }
  },
);

/*
Mike Rose
testMike@ukr.net
M123456


*/
