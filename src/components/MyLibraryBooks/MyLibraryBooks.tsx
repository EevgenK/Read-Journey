import LibContent from '../LibContent/LibContent';
import Container from '../shared/Container/Container';
import BooksSelect from '../BooksSelect/BooksSelect';
import s from './MyLibraryBooks.module.css';

const MyLibraryBooks = () => {
  return (
    <Container additionalClass={s.my_library_books}>
      <div className={s.lib_header}>
        <h2 className={s.title}>My library </h2>
        <BooksSelect />
      </div>
      <LibContent />
    </Container>
  );
};

export default MyLibraryBooks;
