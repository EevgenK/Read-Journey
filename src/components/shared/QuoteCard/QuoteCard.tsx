import BooksPicture from '../BooksPicture/BooksPicture';
import s from './QuoteCard.module.css';

const QuoteCard = () => {
  return (
    <div className={s.wrapper}>
      <BooksPicture />
      <p className={s.text}>
        "Books are <span className={s.highlight}>windows</span> to the world,
        and reading is a journey into the unknown."
      </p>
    </div>
  );
};

export default QuoteCard;
