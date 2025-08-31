import axios from 'axios';

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

export const handleAxiosError = (err: unknown) => {
  if (axios.isAxiosError(err)) {
    return (
      err.response?.data?.message || err.response?.statusText || 'Server error'
    );
  }
  return 'An unexpected error occurred';
};
