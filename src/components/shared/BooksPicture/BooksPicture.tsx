import s from './BooksPicture.module.css';
import booksImage from '../../../assets/images/books_4.webp';
import booksImage2x from '../../../assets/images/books_4@2x.webp';
import clsx from 'clsx';
interface IBooksPicture {
  size?: string;
}
const BooksPicture = ({ size }: IBooksPicture) => {
  return (
    <picture className={clsx(s.picture, size && s[`picture_${size}`])}>
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
  );
};

export default BooksPicture;
