import { useSelector } from 'react-redux';
import Container from '../shared/Container/Container';
import s from './RecommendedBooks.module.css';

import { selectBooks, selectIsBooksLoading } from '../../redux/books/selectors';
import Loader from '../Loader/Loader';
import BookCard from '../BookCard/BookCard';
import { Book } from '../../types/books-type';
import PaginationBtns from '../PaginationBtns/PaginationBtns';
import ArrowLink from '../shared/ArrowLink/ArrowLink';
import clsx from 'clsx';
export interface RecommendedBooksProps {
  page?: string;
}

const RecommendedBooks = ({ page }: RecommendedBooksProps) => {
  const isLoading = useSelector(selectIsBooksLoading);
  const books = useSelector(selectBooks);
  const isLibraryPage = page === '/library';

  if (isLoading && !books?.length) return <Loader />;

  return (
    <Container
      additionalClass={clsx(s.recommended_books, isLibraryPage && s.lib)}
    >
      <div className={s.wrap}>
        <h2 className={clsx(s.title, isLibraryPage && s.lib)}>
          {isLibraryPage ? 'Recommended books' : 'Recommended'}
        </h2>
        {!isLibraryPage && <PaginationBtns />}
      </div>
      <ul className={clsx(s.books_list, isLibraryPage && s.lib)}>
        {isLoading ? (
          <Loader />
        ) : (
          books
            ?.filter((book): book is Book => Boolean(book))
            .map((book) => <BookCard item={book} key={book._id} />)
        )}
      </ul>
      {isLibraryPage && <ArrowLink linkText="Home" linkTo="/recommended" />}
    </Container>
  );
};

export default RecommendedBooks;
