import s from './QuoteCard.module.css';
import booksImage from '../../../assets/images/books_4.webp';
import booksImage2x from '../../../assets/images/books_4@2x.webp';

const QuoteCard = () => {
  return (
    <div className={s.wrapper}>
      <picture>
        <source
          srcSet={`${booksImage} 1x, ${booksImage2x} 2x`}
          type="image/webp"
        />

        <img
          className={s.icon}
          src={booksImage}
          srcSet={booksImage2x}
          alt="Books icon"
          width={50}
          height={50}
        />
      </picture>

      <p className={s.text}>
        "Books are <span className={s.highlight}>windows</span> to the world,
        and reading is a journey into the unknown."
      </p>
    </div>
  );
};

export default QuoteCard;
