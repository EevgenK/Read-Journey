import { NavLink } from 'react-router-dom';
import s from './Logo.module.css';
import clsx from 'clsx';

export interface LogoProps {
  type?: string;
}
const Logo = ({ type }: LogoProps) => {
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
      <span className={clsx(s.text, type == 'header' && s.header_text)}>
        Read Journey
      </span>
    </NavLink>
  );
};

export default Logo;
