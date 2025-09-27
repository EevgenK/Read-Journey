import s from './ArrowLink.module.css';
import { Link } from 'react-router-dom';
import sprite from '../../../assets/icons/sprite.svg';
interface ArrowLinkProps {
  linkTo: string;
  linkText: string;
}

const ArrowLink = ({ linkText, linkTo }: ArrowLinkProps) => {
  return (
    <Link className={s.link} to={linkTo}>
      <>{linkText}</>
      <svg
        className={s.icon}
        role="img"
        aria-hidden="true"
        width="24"
        height="24"
      >
        <use href={`${sprite}#icon-arrow`} />
      </svg>
    </Link>
  );
};

export default ArrowLink;
