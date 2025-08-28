import s from './Header.module.css';
import Container from '../shared/Container/Container';
import Logo from '../shared/Logo/Logo';

const Header = () => {
  return (
    <header>
      <Container additionalClass={s.header}>
        <Logo />
      </Container>
    </header>
  );
};

export default Header;
