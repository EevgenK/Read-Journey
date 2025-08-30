import axios, { AxiosError, AxiosRequestConfig } from 'axios';
import { store } from '../redux/store';

export const instance = axios.create({
  baseURL: 'https://readjourney.b.goit.study/api/',
});

export const setAuthHeader = (token: string) => {
  if (typeof token !== 'string') {
    return;
  }
  instance.defaults.headers.common.Authorization = `Bearer ${token}`;
};
export const clearAuthHeader = () => {
  instance.defaults.headers.common.Authorization = '';
};
/*INTERCEPTOR */
/*
// якщо токен протух — автоматичне оновлення
interface AxiosRequestConfigWithRetry extends AxiosRequestConfig {
  _retry?: boolean;
}

instance.interceptors.response.use(
  (res) => res,
  async (error: AxiosError) => {
    const originalRequest = error.config as AxiosRequestConfigWithRetry;

    if (
      error.response?.status === 401 &&
      originalRequest &&
      !originalRequest._retry
    ) {
      originalRequest._retry = true;

      const state = store.getState() as {
        auth: { tokens: { refreshToken: string } };
      };
      const refreshToken = state.auth.tokens.refreshToken;

      if (!refreshToken) {
        console.log('logout in interceptor no refresh token');
        // store.dispatch(logout());
        return Promise.reject(error);
      }

      try {
        setAuthHeader(refreshToken);
        const { data } = await instance.get('users/current/refresh');

        // зберігаємо нові токени в Redux
        // store.dispatch(setTokens(data));

        // повторюємо оригінальний запит з новим токеном

        if (!originalRequest.headers) {
          originalRequest.headers = {};
        }
        originalRequest.headers.Authorization = `Bearer ${data.token}`;
        return instance(originalRequest);
      } catch (refreshError) {
        // store.dispatch(logout());
        console.log('logout in interceptor');
        return Promise.reject(refreshError);
      }
    }

    return Promise.reject(error);
  },
);
*/
