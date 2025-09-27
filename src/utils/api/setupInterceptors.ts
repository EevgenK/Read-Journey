import { instance } from './api';
import type { Store } from '@reduxjs/toolkit';
import { setTokens, clearTokens } from '../../redux/auth/slice';

export const setupInterceptors = (store: Store) => {
  // Request interceptor
  instance.interceptors.request.use((config) => {
    const state = store.getState() as { auth: { tokens?: { token?: string } } };
    const token = state.auth.tokens?.token;
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  });

  // Response interceptor
  instance.interceptors.response.use(
    (res) => res,
    async (error) => {
      const originalRequest = error.config;
      // Ignore refresh for Login
      if (
        error.response?.status === 401 &&
        !originalRequest._retry &&
        originalRequest.url !== 'users/signin'
      ) {
        originalRequest._retry = true;

        try {
          const state = store.getState() as {
            auth: { tokens?: { refreshToken?: string } };
          };
          const refreshToken = state.auth.tokens?.refreshToken;
          console.log('refreshToken=>>', refreshToken);
          if (!refreshToken) throw new Error('No refresh token');

          // refresh token request
          const { data } = await instance.get('users/current/refresh', {
            headers: {
              Authorization: `Bearer ${refreshToken}`,
            },
          });

          // update redux (CHECK HERE)
          store.dispatch(
            setTokens({
              accessToken: data.token,
              refreshToken: data.refreshToken || refreshToken,
            }),
          );

          // retry request with new token
          originalRequest.headers.Authorization = `Bearer ${data.token}`;
          return instance(originalRequest);
        } catch (err) {
          store.dispatch(clearTokens());
          return Promise.reject(err);
        }
      }

      return Promise.reject(error);
    },
  );
};
