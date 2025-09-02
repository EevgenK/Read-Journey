import { yupResolver } from '@hookform/resolvers/yup';
import { AddBookPayload } from '../../../types/books-type';
import createBooksSchema from '../../../utils/validation/validationBooksSchema';

import s from './FilterForm.module.css';
import { useForm } from 'react-hook-form';
import CustomInput from '../CustomInput/CustomInput';
import CustomActiveBtn from '../../CustomActiveBtn/CustomActiveBtn';
export interface FilterFormProps {
  initialVal: AddBookPayload;
  action: (data: AddBookPayload) => void;
  buttonText: string;
  type: string;
}
const FilterForm = ({
  type,
  initialVal,
  action,
  buttonText,
}: FilterFormProps) => {
  const isAddBook = type === 'add book';
  const schema = createBooksSchema({
    isTitleRequired: isAddBook,
    isAuthorRequired: isAddBook,
    isTotalPagesRequired: isAddBook,
  });
  const {
    register,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm<AddBookPayload>({
    resolver: yupResolver(schema),
    defaultValues: initialVal,
    mode: 'onSubmit',
  });

  const onHandleSubmit = (formData: AddBookPayload) => {
    console.log(formData);
    action(formData);
    Object.entries(initialVal).forEach(([key, value]) => {
      setValue(key as keyof AddBookPayload, value);
    });
  };

  return (
    <form className={s.filter_form} onSubmit={handleSubmit(onHandleSubmit)}>
      <p>Filters:</p>
      <CustomInput
        label="Book title"
        registration={register('title')}
        error={errors.title}
        placeholder="Enter text"
      />
      <CustomInput
        label="The author"
        registration={register('author')}
        error={errors.author}
        placeholder="Enter text"
      />
      {isAddBook && (
        <CustomInput
          label="Number of pages"
          registration={register('totalPages')}
          error={errors.totalPages}
          placeholder="0"
        />
      )}
      {/* <button type="submit">DEBUG SUBMIT</button> */}
      <CustomActiveBtn type="submit">{buttonText}</CustomActiveBtn>
    </form>
  );
};

export default FilterForm;
