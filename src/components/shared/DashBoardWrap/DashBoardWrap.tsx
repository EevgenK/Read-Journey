import { ReactNode } from 'react';
import clsx from 'clsx';
import s from './DashBoardWrap.module.css';

const DashBoardWrap = ({
  children,
  case: caseName,
}: {
  children: ReactNode;
  case?: string;
}) => {
  return (
    <div className={clsx(s.dashboard_wrap, caseName && s[caseName])}>
      {children}
    </div>
  );
};

export default DashBoardWrap;
