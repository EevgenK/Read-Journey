import Container from '../../components/shared/Container/Container';
import AuthForm from '../../components/shared/AuthForm/AuthForm';
import Logo from '../../components/shared/Logo/Logo';
import { RegisterPayload } from '../../types/auth-types';
import s from './RegisterPage.module.css';

const RegisterPage = () => {
  const onHandleSubmit = async (values: RegisterPayload): Promise<void> => {
    console.log(values);
    // const { name, email, password } = values;
    // await dispatch(registerUser({ name, email, password }));
  };
  return (
    <section>
      <Container additionalClass={s.register}>
        <Logo />
        <h1 className={s.title}>
          Expand your mind, reading <span>a book</span>
        </h1>
        <AuthForm
          buttonText="Registration"
          action={onHandleSubmit}
          initialVal={{ name: '', email: '', password: '' }}
          redirectText="Already have an account?"
        />
      </Container>
    </section>
  );
};

export default RegisterPage;
