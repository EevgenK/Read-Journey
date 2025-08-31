import { useLocation } from 'react-router-dom';
import Container from '../Container/Container';
import FilterForm from '../FilterForm/FilterForm';
import s from './Dashboard.module.css';
import { ReactNode, useCallback, useEffect, useState } from 'react';

const Dashboard = () => {
  const location = useLocation().pathname;
  console.log('location', location);
  const [DashboardContent, setDashboardContent] = useState<ReactNode>(null);

  const CurrentPageContent = useCallback(() => {
    if (!location) return null;
    switch (location) {
      case '/recommended':
        return (
          <>
            <FilterForm />
          </>
        );
      case '/library':
        return (
          <>
            <h2>Hello</h2>
          </>
        );
      default:
        return null;
    }
  }, [location]);
  useEffect(() => {
    setDashboardContent(<CurrentPageContent />);
    return () => {
      setDashboardContent(null);
    };
  }, [CurrentPageContent]);

  return (
    <Container additionalClass={s.dashboard}>
      {DashboardContent}
      {/*компоненти по switchcase в залежності від page */}
    </Container>
  );
};

export default Dashboard;
