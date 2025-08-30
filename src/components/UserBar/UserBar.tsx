import { useSelector } from 'react-redux';
import s from './UserBar.module.css';
import { selectAuth } from '../../redux/auth/selectors';
import LogoutButton from '../LogoutButton/LogoutButton';
import BurgerButton from '../BurgerButton/BurgerButton';

const UserBar = () => {
  const userName = useSelector(selectAuth)?.name;
  return (
    <div className={s.user_bar}>
      <div className={s.user_profile}>
        <span className={s.user_icon}>
          {' '}
          {userName?.slice(0, 1).toUpperCase()}
        </span>
        <span className={s.user_name}>{userName}</span>
      </div>
      <LogoutButton />
      <BurgerButton />
    </div>
  );
};

export default UserBar;
