import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch } from '../../redux/store';
import { selectAuth } from '../../redux/auth/selectors';
import { logoutUser } from '../../redux/auth/operations';

export const useAuthActions = () => {
  const dispatch = useDispatch<AppDispatch>();
  const user = useSelector(selectAuth);

  const handleLogout = () => {
    if (user) {
      dispatch(logoutUser());
    }
  };

  return {
    user,
    handleLogout,
  };
};
