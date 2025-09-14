import s from './BookContent.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { selectModalProperties } from '../../redux/modal/selectors';
import useModal from '../../utils/hooks/useModal';
import { Book } from '../../types/books-type';
import { getShortTitle } from '../../utils/fn_helpers';
import CustomActiveBtn from '../CustomActiveBtn/CustomActiveBtn';
import { AppDispatch } from '../../redux/store';
import { addRecommendedBookToLibrary } from '../../redux/books/operations';
import { openModal } from '../../redux/modal/slice';

const BookContent = () => {
  const properties =
    (useSelector(selectModalProperties) as unknown as Book) || null;
  const dispatch = useDispatch<AppDispatch>();
  const { handleClose } = useModal();
  const addBook = async () => {
    if (!properties?._id) return;

    const resultAction = await dispatch(
      addRecommendedBookToLibrary(properties),
    );

    if (addRecommendedBookToLibrary.fulfilled.match(resultAction)) {
      dispatch(openModal({ type: 'book added' }));
    }
  };

  return (
    <div onClick={handleClose} className={s.wrap}>
      <img
        className={s.book_img}
        src={properties?.imageUrl}
        alt={`${properties?.title} image`}
        width="140"
        height="213"
        loading="lazy"
      />
      <h2 className={s.book_title}>{getShortTitle(properties?.title)}</h2>
      <h3 className={s.book_author}>{properties?.author}</h3>
      <p className={s.page_amount}>{properties?.totalPages} pages</p>
      <CustomActiveBtn onClick={addBook}>Add to library</CustomActiveBtn>
    </div>
  );
};

export default BookContent;
