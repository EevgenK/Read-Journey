import clsx from 'clsx';
import s from './UserNav.module.css';
import { NavLink } from 'react-router-dom';
export interface UserNavProps {
  type?: string;
}
function UserNav({ type }: UserNavProps) {
  const navItems = [
    { link: '/recommended', title: 'Home' },
    { link: '/library', title: 'My library' },
  ];
  const items = (
    <>
      {navItems.map((item) => (
        <li key={item.link}>
          <NavLink className={s.link} to={item.link}>
            {item.title}
          </NavLink>
        </li>
      ))}
    </>
  );

  return (
    <nav className={clsx(type === 'main' && s.hidden)}>
      <ul className={clsx(s.nav, type !== 'main' && s.sidebar_nav)}>{items}</ul>
    </nav>
  );
}

export default UserNav;
