import axios from 'axios';

export const instance = axios.create({
  baseURL: 'https://readjourney.b.goit.study/api/',
});

export const setAuthHeader = (token: string) => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};
export const clearAuthHeader = () => {
  axios.defaults.headers.common.Authorization = '';
};
