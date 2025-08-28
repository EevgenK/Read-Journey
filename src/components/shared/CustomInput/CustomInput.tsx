import { FieldError, UseFormRegisterReturn } from 'react-hook-form';
import sprite from '../../../assets/icons/sprite.svg';
import s from './CustomInput.module.css';
import { useState } from 'react';

export interface CustomInputProps {
  label: string;
  type?: string;
  placeholder?: string;
  registration: UseFormRegisterReturn;
  error?: FieldError;
  iconId?: string[];
}

const CustomInput = ({
  label,
  type = 'text',
  placeholder = ' ',
  registration,
  error,
  iconId,
}: CustomInputProps) => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <label className={s.input_wrapper}>
      {label}:
      <input
        className={s.input}
        type={!iconId ? type : showPassword ? 'text' : 'password'}
        placeholder={placeholder}
        {...registration}
      />
      {iconId && (
        <button
          type="button"
          className={s.toggle}
          onClick={() => setShowPassword((prev) => !prev)}
          aria-label={showPassword ? `Hide ${label}` : `Show ${label}`}
        >
          <svg
            className={s.icon}
            width="20"
            height="20"
            role="img"
            aria-label={`toggle ${label} visibility`}
          >
            <use href={`${sprite}#${showPassword ? iconId[0] : iconId[1]}`} />
          </svg>
        </button>
      )}
      {error && <p className={s.error}>{error.message}</p>}
    </label>
  );
};

export default CustomInput;
