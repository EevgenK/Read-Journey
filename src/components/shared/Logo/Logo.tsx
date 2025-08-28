import { NavLink } from 'react-router-dom';
import s from './Logo.module.css';

const Logo = () => {
  return (
    <NavLink to="/" className={s.logo} aria-label="Home page link">
      <svg
        className={s.icon}
        role="img"
        aria-hidden="true"
        width="42"
        height="28"
      >
        <use href="/src/assets/icons/sprite.svg#icon-logo_mob" />
      </svg>
      <span className={s.text}>Read Journey</span>
    </NavLink>
  );
};

export default Logo;
