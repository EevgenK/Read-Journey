import * as Yup from 'yup';
import { validEmail } from './validationRegExps';
import { RegisterPayload } from '../../types/auth-types';
interface SchemaOptions {
  isNameRequired?: boolean;
  isEmailRequired?: boolean;
  isPasswordRequired?: boolean;
}

const createAuthSchema = (options: SchemaOptions = {}) => {
  const {
    isEmailRequired = false,
    isNameRequired = false,
    isPasswordRequired = false,
  } = options;

  const schema: Partial<Record<keyof RegisterPayload, Yup.AnySchema>> = {
    ...(isNameRequired && {
      name: Yup.string()
        .min(3, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Required'),
    }),
    ...(isEmailRequired && {
      email: Yup.string()
        .email('Invalid email')
        .matches(validEmail, 'Enter a valid email please')
        .required('Required'),
    }),
    ...(isPasswordRequired && {
      password: Yup.string()
        .min(7, 'Too Short! At least 6 symbols are recommended')
        .max(20, 'Too Long! Maximum 20 symbols are recommended')
        .matches(/[A-Z]/, 'Password must contain at least one capital letter')
        .required('Required'),
    }),
  };

  return Yup.object(schema) as Yup.ObjectSchema<RegisterPayload>;
};
export default createAuthSchema;
