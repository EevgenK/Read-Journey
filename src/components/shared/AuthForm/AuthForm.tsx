import { yupResolver } from '@hookform/resolvers/yup';
import { RegisterPayload } from '../../../types/auth-types';
import createAuthSchema from '../../../utils/validation/validationSchema';
import s from './AuthForm.module.css';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import CustomButton from '../CustomButton/CustomButton';
import CustomInput from '../CustomInput/CustomInput';
import clsx from 'clsx';

export interface AuthFormProps {
  initialVal: RegisterPayload;
  redirectText: string;
  buttonText: string;
  action: (data: RegisterPayload) => Promise<void>;
  linkTo: string;
  isLogin: boolean;
}
const AuthForm = ({
  initialVal,
  redirectText,
  buttonText,
  action,
  linkTo,
  isLogin,
}: AuthFormProps) => {
  const schema = createAuthSchema({
    isNameRequired: Boolean(initialVal.name),
    isEmailRequired: true,
    isPasswordRequired: true,
  });

  const {
    register,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterPayload>({
    resolver: yupResolver(schema),
    defaultValues: initialVal,
    mode: 'onSubmit',
  });
  const onHandleSubmit = async (formData: RegisterPayload) => {
    await action(formData);
    Object.entries(initialVal).forEach(([key, value]) => {
      setValue(key as keyof RegisterPayload, value);
    });
    /*redirect to another page */
  };

  return (
    <form className={s.auth} onSubmit={handleSubmit(onHandleSubmit)}>
      {!isLogin && (
        <CustomInput
          label="Name"
          registration={register('name')}
          error={errors.name}
        />
      )}
      <CustomInput
        label="Email"
        registration={register('email')}
        error={errors.email}
      />
      <CustomInput
        label="Password"
        registration={register('password')}
        error={errors.password}
        iconId={['icon-view', 'icon-view_not']}
      />

      <div className={clsx(s.button_wrap, { [s.login]: isLogin })}>
        <CustomButton type="submit">{buttonText}</CustomButton>
        <Link className={s.link} to={linkTo}>
          {redirectText}
        </Link>
      </div>
    </form>
  );
};

export default AuthForm;
