import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectAuth } from '../../../redux/auth/selectors';

import { AppDispatch } from '../../../redux/store';

import { Navigate, Outlet } from 'react-router-dom';
import { getCurrentUser } from '../../../redux/auth/operations';

export interface ProtectedRouteProps {
  redirectTo: string;
}

const ProtectedRoute = ({ redirectTo }: ProtectedRouteProps) => {
  const dispatch = useDispatch<AppDispatch>();
  const isLoggedIn = useSelector(selectAuth);
  const [shouldRedirect, setShouldRedirect] = useState(false);

  useEffect(() => {
    const checkUser = async () => {
      if (!isLoggedIn) {
        setShouldRedirect(true);
      }
    };
    checkUser();
  }, [dispatch, isLoggedIn]);

  if (shouldRedirect) {
    return <Navigate to={redirectTo} replace />;
  }

  return <Outlet />;
};

export default ProtectedRoute;
