import { useEffect } from 'react';
import Dashboard from '../../components/shared/Dashboard/Dashboard';
import useRecommendBooks from '../../utils/hooks/useRecommendBooks';
import s from './LibraryPage.module.css';
import MyLibraryBooks from '../../components/MyLibraryBooks/MyLibraryBooks';

const LibraryPage = () => {
  const { setLimit } = useRecommendBooks();
  useEffect(() => {
    setLimit(3);
  }, [setLimit]);
  return (
    <section className={s.library_page}>
      <Dashboard />
      <MyLibraryBooks />
    </section>
  );
};

export default LibraryPage;
