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
export const logoutUser = createAsyncThunk(
  'user/logout',
  async (_, { rejectWithValue }) => {
    try {
      await instance.post('users/signout');
      console.log('successful logout');
    } catch (err) {
      const error = err as AxiosError<{ data?: { message?: string } }>;
      return rejectWithValue(
        error.response?.data?.data?.message ?? 'Server error',
      );
    }
  },
);

export const getCurrentUser = createAsyncThunk(
  'auth/getCurrentUser',
  async (_, { getState, rejectWithValue }) => {
    const state = getState() as {
      auth: { tokens: { token: string; refreshToken: string } };
    };
    let localUserToken = state.auth.tokens.token;
    if (!localUserToken) {
      return rejectWithValue('no token');
    }
    setAuthHeader(localUserToken);
    try {
      const result = await instance.get('users/current');
      return result.data;
    } catch (err) {
      const error = err as AxiosError<{ data?: { message?: string } }>;
      if (error.response?.status === 401) {
        try {
          localUserToken = state.auth.tokens.refreshToken;
          setAuthHeader(localUserToken);
          const refreshResult = await instance.post('users/current/refresh');
          setAuthHeader(refreshResult.data.token);
          const result = await instance.get('users/current');
          return result.data;
        } catch (error) {
          console.log(error);
        }
      }
      return rejectWithValue(
        error.response?.data?.data?.message ?? 'Server error',
      );
    }
  },
);
// export const refreshUserOperation = createAsyncThunk(
//   'auth/refreshUserOperation',
//   async (_, { getState, rejectWithValue }) => {
//     const state = getState() as {
//       auth: { tokens: { refreshToken: string } };
//     };
//     const refreshToken = state.auth.tokens.refreshToken;
//     if (!refreshToken) {
//       return rejectWithValue('no refresh token');
//     }
//     setAuthHeader(refreshToken);
//     try {
//       const result = await instance.post('users/current/refresh');
//       return result.data;
//     } catch (err) {
//       const error = err as AxiosError<{ message?: string }>;
//       return rejectWithValue(error.response?.data?.message ?? 'Server error');
//     }
//   },
// );

/*
export const getCurrentUser = createAsyncThunk(
  'auth/getCurrentUser',
  async (_, { rejectWithValue }) => {
    try {
      const result = await instance.get('users/current');
      return result.data;
    } catch (err) {
      const error = err as AxiosError<{ message?: string }>;
      return rejectWithValue(error.response?.data?.message ?? 'Server error');
    }
  }
);

 */
/*
Mike Rose
testMike@ukr.net
M123456


*/
