import { useSelector } from 'react-redux';
import Container from '../shared/Container/Container';
import s from './RecommendedBooks.module.css';

import { selectBooks, selectIsBooksLoading } from '../../redux/books/selectors';
import Loader from '../Loader/Loader';
import BookCard from '../BookCard/BookCard';
import { Book } from '../../types/books-type';
import PaginationBtns from '../PaginationBtns/PaginationBtns';

const RecommendedBooks = () => {
  const isLoading = useSelector(selectIsBooksLoading);
  const books = useSelector(selectBooks);

  if (isLoading && !books?.length) return <Loader />;

  return (
    <Container additionalClass={s.recommended_books}>
      <div className={s.wrap}>
        <h2 className={s.title}>Recommended</h2>
        <PaginationBtns />
      </div>
      <ul className={s.books_list}>
        {isLoading ? (
          <Loader />
        ) : (
          books
            ?.filter((book): book is Book => Boolean(book))
            .map((book) => <BookCard item={book} key={book._id} />)
        )}
      </ul>
    </Container>
  );
};

export default RecommendedBooks;
