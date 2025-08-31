import { configureStore } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

import storage from 'redux-persist/lib/storage';
import { authReducer, AuthState } from './auth/slice';
import modalReducer from './modal/slice';
import { setupInterceptors } from '../utils/api/setupInterceptors';
import { booksReducer } from './books/slice';
const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['tokens'],
};

export const store = configureStore({
  reducer: {
    books: booksReducer,
    modal: modalReducer,
    auth: persistReducer<AuthState>(authPersistConfig, authReducer),
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});
setupInterceptors(store);
export const persistor = persistStore(store);
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
