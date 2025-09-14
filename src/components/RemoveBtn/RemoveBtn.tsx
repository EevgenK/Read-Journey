import s from './RemoveBtn.module.css';
import sprite from '../../assets/icons/sprite.svg';
import { useSelector } from 'react-redux';
import { selectIsBooksLoading } from '../../redux/books/selectors';
const RemoveBtn = ({ ...rest }) => {
  const isDisable = useSelector(selectIsBooksLoading);
  return (
    <button
      className={s.delete_btn}
      aria-label="delete Book"
      {...rest}
      disabled={isDisable}
    >
      <svg
        className={s.icon}
        width="14"
        height="14"
        role="img"
        aria-label="delete Book"
      >
        <use href={`${sprite}#icon-delete`} />
      </svg>
    </button>
  );
};

export default RemoveBtn;
