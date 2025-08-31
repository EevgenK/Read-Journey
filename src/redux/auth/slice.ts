import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {
  registerUser,
  loginUser,
  getCurrentUser,
  logoutUser,
} from './operations';

export interface AuthState {
  user: {
    name: string;
    email: string;
  } | null;
  tokens: {
    token: string;
    refreshToken: string;
  } | null;
  isLoading: boolean;
  error: string | null;
}

const initialState: AuthState = {
  user: null,
  isLoading: false,
  error: null,
  tokens: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setTokens: (
      state,
      action: PayloadAction<{ accessToken: string; refreshToken: string }>,
    ) => {
      state.tokens = {
        token: action.payload.accessToken,
        refreshToken: action.payload.refreshToken,
      };
    },
    clearTokens: (state) => {
      state.tokens = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(registerUser.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        const { name, email, token, refreshToken } = action.payload;
        state.isLoading = false;
        state.user = { name, email };
        state.tokens = { token, refreshToken };
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.isLoading = false;
        state.error =
          typeof action.payload === 'string' ? action.payload : 'Unknown error';
      })
      .addCase(loginUser.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        const { name, email, token, refreshToken } = action.payload;
        state.isLoading = false;
        state.user = { name, email };
        state.tokens = { token, refreshToken };
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.isLoading = false;
        state.error =
          typeof action.payload === 'string' ? action.payload : 'Unknown error';
      })
      .addCase(getCurrentUser.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getCurrentUser.fulfilled, (state, action) => {
        const { name, email, token, refreshToken } = action.payload;
        state.isLoading = false;
        state.user = { name, email };
        state.tokens = { token, refreshToken };
      })
      .addCase(getCurrentUser.rejected, (state, action) => {
        state.isLoading = false;
        state.error =
          typeof action.payload === 'string' ? action.payload : 'Unknown error';
      })
      .addCase(logoutUser.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(logoutUser.fulfilled, (state) => {
        state.isLoading = false;
        state.user = null;
        state.tokens = null;
      })
      .addCase(logoutUser.rejected, (state, action) => {
        state.isLoading = false;
        state.error =
          typeof action.payload === 'string' ? action.payload : 'Unknown error';
      });
  },
});
export const { setTokens, clearTokens } = authSlice.actions;
export const authReducer = authSlice.reducer;
