import RecommendedBooks from '../../components/RecommendedBooks/RecommendedBooks';

import Dashboard from '../../components/shared/Dashboard/Dashboard';
import s from './RecommendedPage.module.css';

const RecommendedPage = () => {
  return (
    <section className={s.recommended_page}>
      <Dashboard />
      <RecommendedBooks />
    </section>
  );
};

export default RecommendedPage;
