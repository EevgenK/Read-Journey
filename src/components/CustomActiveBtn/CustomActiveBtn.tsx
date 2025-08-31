import s from './CustomActiveBtn.module.css';

import clsx from 'clsx';

export interface CustomActiveBtnProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variation?: string;
  disabled?: boolean;
}
const CustomActiveBtn = ({
  variation,
  disabled,
  ...rest
}: CustomActiveBtnProps) => {
  return (
    <button
      {...rest}
      className={clsx(s.button, variation === 'userBar' && s.header_btn)}
      type="button"
      disabled={disabled}
    />
  );
};

export default CustomActiveBtn;
