import { useDispatch, useSelector } from 'react-redux';
import BooksPicture from '../shared/BooksPicture/BooksPicture';
import s from './LibContent.module.css';
import { AppDispatch } from '../../redux/store';
import { selectLibraryBooks } from '../../redux/books/selectors';
import { useEffect } from 'react';
import { getLibraryBooks } from '../../redux/books/operations';
import { Book } from '../../types/books-type';
import BookCard from '../BookCard/BookCard';

const LibContent = () => {
  const dispatch = useDispatch<AppDispatch>();
  const books = useSelector(selectLibraryBooks); //add ui for libBooks//
  useEffect(() => {
    dispatch(getLibraryBooks());
  }, [dispatch]);
  return (
    <div className={s.empty_content}>
      {!books?.length ? (
        <>
          <div className={s.wrap}>
            <BooksPicture size="50" />
          </div>
          <p className={s.text}>
            To start training, add <span>some of your books</span> or from the
            recommended ones
          </p>
        </>
      ) : (
        <ul className={s.books_list}>
          {books
            ?.filter((book): book is Book => Boolean(book))
            .map((book) => (
              <BookCard item={book} key={book._id} isBtn={true} />
            ))}
        </ul>
      )}
    </div>
  );
};

export default LibContent;
