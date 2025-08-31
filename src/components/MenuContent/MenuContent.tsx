import useModal from '../../utils/hooks/useModal';
import CustomActiveBtn from '../CustomActiveBtn/CustomActiveBtn';
import UserNav from '../UserNav/UserNav';
import s from './MenuContent.module.css';

import { useAuthActions } from '../../utils/hooks/useLogaut';

const MenuContent = () => {
  const { handleLogout } = useAuthActions();
  const { handleClose } = useModal();
  return (
    <div onClick={handleClose} className={s.wrap}>
      <UserNav />
      <CustomActiveBtn variation="sidebar" onClick={handleLogout} />
    </div>
  );
};

export default MenuContent;
