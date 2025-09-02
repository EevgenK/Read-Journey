import * as Yup from 'yup';
import { AddBookPayload } from '../../types/books-type';

interface SchemaOptions {
  isTitleRequired?: boolean;
  isAuthorRequired?: boolean;
  isTotalPagesRequired?: boolean;
}

const createBooksSchema = (options: SchemaOptions = {}) => {
  const {
    isTitleRequired = false,
    isAuthorRequired = false,
    isTotalPagesRequired = false,
  } = options;
  const schema: Partial<Record<keyof AddBookPayload, Yup.AnySchema>> = {
    ...(isTitleRequired && {
      title: Yup.string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Title is Required'),
    }),
    ...(isAuthorRequired && {
      author: Yup.string()
        .min(3, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Author is Required'),
    }),
    ...(isTotalPagesRequired && {
      totalPages: Yup.number()
        .typeError('Amount of pages should be a number')
        .integer('Amount of pages should integer number')
        .positive('Amount of pages should be more than 0')
        .required('Type please an amount of pages '),
    }),
  };

  return Yup.object(schema) as Yup.ObjectSchema<AddBookPayload>;
};
export default createBooksSchema;
