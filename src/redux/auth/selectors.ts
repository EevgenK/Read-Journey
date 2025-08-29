import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '../store';
export const selectAuth = (state: RootState) => state.auth.user;
export const selectIsAuthLoading = (state: RootState) => state.auth.isLoading;
export const selectAuthError = (state: RootState) => state.auth.error;
