import { lazy, Suspense, useEffect } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

import Loader from './components/Loader/Loader';
import Layout from './components/Layout/Layout';
import ProtectedRoute from './components/shared/ProtectedRoute/ProtectedRoute';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectAuth,
  selectAuthError,
  selectIsAuthLoading,
} from './redux/auth/selectors';
import { getCurrentUser } from './redux/auth/operations';
import { AppDispatch } from './redux/store';

const AuthPage = lazy(() => import('./pages/AuthPage/AuthPage'));
const RecommendedPage = lazy(
  () => import('./pages/RecommendedPage/RecommendedPage'),
);
const LibraryPage = lazy(() => import('./pages/LibraryPage/LibraryPage'));

const App = () => {
  const dispatch = useDispatch<AppDispatch>();
  const isLoading = useSelector(selectIsAuthLoading);
  const errorMessage = useSelector(selectAuthError);
  const isLoggedIn = useSelector(selectAuth);
  useEffect(() => {
    const checkUser = async () => {
      if (!isLoggedIn) {
        try {
          await dispatch(getCurrentUser());
          console.log('rerender after getCurrentUser');
        } catch (error) {
          console.log(error);
        }
      }
    };
    checkUser();
  }, [dispatch, isLoggedIn]);
  return isLoading ? (
    <Loader />
  ) : (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path="/" element={<Navigate to="/recommended" replace />} />
        <Route path="/register" element={<AuthPage mode="register" />} />
        <Route path="/login" element={<AuthPage mode="login" />} />
        <Route element={<ProtectedRoute redirectTo="/login" />}>
          <Route path="/" element={<Layout />}>
            <Route path="/recommended" element={<RecommendedPage />} />
            <Route path="/library" element={<LibraryPage />} />
          </Route>
        </Route>
      </Routes>
    </Suspense>
  );
};

export default App;
