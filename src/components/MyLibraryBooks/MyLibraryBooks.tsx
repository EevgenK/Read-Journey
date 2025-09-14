import LibContent from '../LibContent/LibContent';
import Container from '../shared/Container/Container';
import s from './MyLibraryBooks.module.css';

const MyLibraryBooks = () => {
  return (
    <Container additionalClass={s.my_library_books}>
      <h2 className={s.title}>My library </h2>
      <LibContent />
    </Container>
  );
};

export default MyLibraryBooks;
