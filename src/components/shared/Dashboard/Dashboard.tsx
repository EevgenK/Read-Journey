import Container from '../Container/Container';
import FilterForm from '../FilterForm/FilterForm';
import s from './Dashboard.module.css';

const Dashboard = () => {
  return (
    <Container additionalClass={s.dashboard_container}>
      <FilterForm />
    </Container>
  );
};

export default Dashboard;
