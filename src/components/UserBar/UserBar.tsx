import { useSelector } from 'react-redux';
import s from './UserBar.module.css';
import { selectAuth } from '../../redux/auth/selectors';
import CustomActiveBtn from '../CustomActiveBtn/CustomActiveBtn';
import BurgerButton from '../BurgerButton/BurgerButton';
import { useAuthActions } from '../../utils/hooks/useLogaut';

const UserBar = () => {
  const userName = useSelector(selectAuth)?.name;
  const { handleLogout } = useAuthActions();
  return (
    <div className={s.user_bar}>
      <div className={s.user_profile}>
        <span className={s.user_icon}>
          {' '}
          {userName?.slice(0, 1).toUpperCase()}
        </span>
        <span className={s.user_name}>{userName}</span>
      </div>
      <CustomActiveBtn variation="userBar" onClick={handleLogout}>
        Log out
      </CustomActiveBtn>
      <BurgerButton />
    </div>
  );
};

export default UserBar;
