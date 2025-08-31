import s from './PaginationBtns.module.css';
import useRecommendBooks from '../../utils/hooks/useRecommendBooks';

const PaginationBtns = () => {
  const { page, totalPages, nextPage, prevPage } = useRecommendBooks();
  return (
    <div className={s.btn_wrap}>
      <button className={s.btn} onClick={prevPage} disabled={page === 1}>
        <svg
          className={s.icon}
          role="img"
          aria-hidden="true"
          width="16"
          height="16"
        >
          <use href="/src/assets/icons/sprite.svg#icon-pg-left" />
        </svg>
      </button>
      <button
        className={s.btn}
        onClick={nextPage}
        disabled={page === totalPages}
      >
        <svg
          className={s.icon}
          role="img"
          aria-hidden="true"
          width="16"
          height="16"
        >
          <use href="/src/assets/icons/sprite.svg#icon-pg-right" />
        </svg>
      </button>
    </div>
  );
};

export default PaginationBtns;
