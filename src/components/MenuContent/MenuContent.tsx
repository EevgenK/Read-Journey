import useModal from '../../utils/hooks/useModal';
import LogoutButton from '../LogoutButton/LogoutButton';
import UserNav from '../UserNav/UserNav';
import s from './MenuContent.module.css';

const MenuContent = () => {
  const { handleClose } = useModal();
  return (
    <div onClick={handleClose} className={s.wrap}>
      <UserNav />
      <LogoutButton type="sidebar" />
    </div>
  );
};

export default MenuContent;
