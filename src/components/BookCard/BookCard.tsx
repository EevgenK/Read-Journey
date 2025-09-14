import s from './BookCard.module.css';
import { Book } from '../../types/books-type';
import { getShortTitle } from '../../utils/fn_helpers';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../redux/store';
import { openModal } from '../../redux/modal/slice';
import { useLocation } from 'react-router-dom';
import clsx from 'clsx';

export interface BookCardProps {
  item: Book;
}
const BookCard = ({ item }: BookCardProps) => {
  const dispatch = useDispatch<AppDispatch>();
  const isLibraryPage = useLocation().pathname === '/library';
  const handleClick = () => {
    dispatch(openModal({ type: 'book', properties: item }));
  };
  return (
    <li className={clsx(s.card, isLibraryPage && s.lib)}>
      <img
        onClick={handleClick}
        className={clsx(s.book_img, isLibraryPage && s.lib)}
        src={item?.imageUrl}
        alt={`${item?.title} image`}
        width="137"
        height="208"
        loading="lazy"
      />
      <h3 className={s.book_title}>{getShortTitle(item.title)}</h3>
      <h4 className={s.book_author}>{item?.author}</h4>
    </li>
  );
};

export default BookCard;
