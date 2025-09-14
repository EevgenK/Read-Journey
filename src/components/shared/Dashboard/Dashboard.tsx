import { useLocation } from 'react-router-dom';
import Container from '../Container/Container';
import FilterForm from '../FilterForm/FilterForm';
import s from './Dashboard.module.css';
import { ReactNode, useCallback, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../../redux/store';
import { changeFilters } from '../../../redux/filter/slice';
import Description from '../../Description/Description';

import QuoteCard from '../QuoteCard/QuoteCard';
import RecommendedBooks from '../../RecommendedBooks/RecommendedBooks';
import DashBoardWrap from '../DashBoardWrap/DashBoardWrap';
import { addBookToLibrary } from '../../../redux/books/operations';

const Dashboard = () => {
  const dispatch = useDispatch<AppDispatch>();
  const location = useLocation().pathname;

  const [DashboardContent, setDashboardContent] = useState<ReactNode>(null);

  const CurrentPageContent = useCallback(() => {
    if (!location) return null;
    switch (location) {
      case '/recommended':
        return (
          <DashBoardWrap>
            <FilterForm
              buttonText="To apply"
              type="filter"
              initialVal={{ title: '', author: '' }}
              action={(values) => {
                dispatch(changeFilters(values));
              }}
            />
            <Description />
            <QuoteCard />
          </DashBoardWrap>
        );
      case '/library':
        return (
          <DashBoardWrap case="lib">
            <FilterForm
              buttonText="Add book"
              type="add book"
              initialVal={{ title: '', author: '', totalPages: 0 }}
              action={(values) => {
                dispatch(addBookToLibrary(values));
              }}
            />
            <RecommendedBooks page={location} />
          </DashBoardWrap>
        );
      default:
        return null;
    }
  }, [dispatch, location]);

  useEffect(() => {
    setDashboardContent(<CurrentPageContent />);
    return () => {
      setDashboardContent(null);
    };
  }, [CurrentPageContent]);

  return (
    <Container additionalClass={s.dash}>
      {DashboardContent}
      {/*компоненти по switchcase в залежності від page */}
    </Container>
  );
};

export default Dashboard;
/*додати лінк до опису, вирівняти UI */
