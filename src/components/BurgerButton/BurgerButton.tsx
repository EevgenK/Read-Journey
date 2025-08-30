import { useDispatch } from 'react-redux';
import s from './BurgerButton.module.css';
import { AppDispatch } from '../../redux/store';
import { openModal } from '../../redux/modal/slice';

const BurgerButton = () => {
  const dispatch = useDispatch<AppDispatch>();
  const handleClick = () => {
    dispatch(openModal({ type: 'menu' }));
  };
  return (
    <button className={s.burger_button} onClick={handleClick}>
      <svg
        className={s.icon}
        role="img"
        aria-hidden="true"
        width="42"
        height="28"
      >
        <use href="/src/assets/icons/sprite.svg#icon-burger-menu" />
      </svg>
    </button>
  );
};

export default BurgerButton;
