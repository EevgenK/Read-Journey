import s from './Header.module.css';
import Container from '../shared/Container/Container';
import Logo from '../shared/Logo/Logo';
import UserNav from '../UserNav/UserNav';
import UserBar from '../UserBar/UserBar';

const Header = () => {
  return (
    <header>
      <Container additionalClass={s.header_container}>
        <Logo type="header" />
        <UserNav type="main" />
        <UserBar />
      </Container>
    </header>
  );
};

export default Header;
