import { Controller, useForm } from 'react-hook-form';
import s from './BooksSelect.module.css';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../redux/store';
import { useEffect } from 'react';
import { getLibraryBooks } from '../../redux/books/operations';
import { formatValue } from '../../utils/fn_helpers';
interface FormValues {
  mySelect: string;
}
const BooksSelect = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { control, watch, setValue } = useForm<FormValues>({
    defaultValues: {
      mySelect: '',
    },
  });
  const selectedValue = watch('mySelect');
  useEffect(() => {
    setValue('mySelect', '');
    dispatch(getLibraryBooks(''));
  }, [dispatch, setValue]);
  useEffect(() => {
    if (selectedValue) {
      dispatch(getLibraryBooks(formatValue(selectedValue || '')));
    }
  }, [selectedValue, dispatch]);
  return (
    <form>
      <Controller
        name="mySelect"
        control={control}
        render={({ field }) => (
          <select {...field} className={s.select} aria-label="Select books">
            <option value="Unread">Unread</option>
            <option value="In progress">In progress</option>
            <option value="Done">Done</option>
            <option value=" ">All books</option>
          </select>
        )}
      />
    </form>
  );
};

export default BooksSelect;
