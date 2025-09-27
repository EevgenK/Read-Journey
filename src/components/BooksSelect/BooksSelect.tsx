import { Controller, useForm } from 'react-hook-form';
import s from './BooksSelect.module.css';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../redux/store';
import { useEffect, useState, useRef } from 'react';
import { getLibraryBooks } from '../../redux/books/operations';
import { formatValue } from '../../utils/fn_helpers';
import sprite from '../../assets/icons/sprite.svg';
interface FormValues {
  mySelect: string;
}
const BooksSelect = () => {
  const dispatch = useDispatch<AppDispatch>();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const { control, watch, setValue } = useForm<FormValues>({
    defaultValues: {
      mySelect: '',
    },
  });

  const selectedValue = watch('mySelect');

  const options = [
    { value: 'Unread', label: 'Unread' },
    { value: 'In progress', label: 'In progress' },
    { value: 'Done', label: 'Done' },
    { value: ' ', label: 'All books' },
  ];

  useEffect(() => {
    setValue('mySelect', '');
    dispatch(getLibraryBooks(''));
  }, [dispatch, setValue]);

  useEffect(() => {
    if (selectedValue) {
      dispatch(getLibraryBooks(formatValue(selectedValue || '')));
    }
  }, [selectedValue, dispatch]);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleOptionClick = (value: string) => {
    setValue('mySelect', value);
    setIsOpen(false);
  };

  const selectedOption =
    options.find((option) => option.value === selectedValue) || options[3]; // Default to "All books"

  return (
    <form className={s.form}>
      <Controller
        name="mySelect"
        control={control}
        render={() => (
          <div className={s.customSelect} ref={dropdownRef}>
            <button
              type="button"
              className={s.selectButton}
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Select books"
              aria-expanded={isOpen}
            >
              <span>{selectedOption.label}</span>
              <svg className={`${s.arrow} ${isOpen ? s.arrowOpen : ''}`}>
                <use href={`${sprite}#icon-chevron-up`}></use>
              </svg>
            </button>

            {isOpen && (
              <div className={s.dropdown}>
                {options.map((option) => (
                  <button
                    key={option.value}
                    type="button"
                    className={`${s.option} ${
                      selectedValue === option.value ? s.optionSelected : ''
                    }`}
                    onClick={() => handleOptionClick(option.value)}
                  >
                    {option.label}
                  </button>
                ))}
              </div>
            )}
          </div>
        )}
      />
    </form>
  );
};

export default BooksSelect;
