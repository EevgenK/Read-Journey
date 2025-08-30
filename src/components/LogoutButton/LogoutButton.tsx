import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch } from '../../redux/store';
import s from './LogoutButton.module.css';
import { logoutUser } from '../../redux/auth/operations';
import { selectAuth } from '../../redux/auth/selectors';
import clsx from 'clsx';

export interface LogoutButtonProps {
  type?: string;
}
const LogoutButton = ({ type }: LogoutButtonProps) => {
  const dispatch = useDispatch<AppDispatch>();
  const user = useSelector(selectAuth);
  const onHandleClick = () => {
    if (user) {
      dispatch(logoutUser());
    } else {
      return;
    }
  };

  return (
    <button
      className={clsx(s.button, type === 'sidebar' && s.sidebar)}
      type="button"
      onClick={onHandleClick}
    >
      Log out
    </button>
  );
};

export default LogoutButton;
