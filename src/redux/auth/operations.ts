import { createAsyncThunk } from '@reduxjs/toolkit';
import { handleAxiosError, instance, setAuthHeader } from '../../utils/api/api';
import { RegisterPayload } from '../../types/auth-types';

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
      return loginRes.data;
    } catch (err) {
      return rejectWithValue(handleAxiosError(err));
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
      return rejectWithValue(handleAxiosError(err));
    }
  },
);
export const logoutUser = createAsyncThunk(
  'user/logout',
  async (_, { rejectWithValue }) => {
    try {
      await instance.post('users/signout');
      console.log('successful logout');
    } catch (err) {
      return rejectWithValue(handleAxiosError(err));
    }
  },
);
export const getCurrentUser = createAsyncThunk(
  'auth/getCurrentUser',
  async (_, { rejectWithValue }) => {
    try {
      const result = await instance.get('users/current');
      return result.data;
    } catch (err) {
      return rejectWithValue(handleAxiosError(err));
    }
  },
);

/*
Mike Rose
testMike@ukr.net
M123456
Luco Dashvar


*/
