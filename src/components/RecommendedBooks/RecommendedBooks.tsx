import Container from '../shared/Container/Container';
import s from './RecommendedBooks.module.css';

const RecommendedBooks = () => {
  return (
    <Container additionalClass={s.recommended_books}>
      <h1>Recomended</h1>
    </Container>
  );
};

export default RecommendedBooks;
