import s from './BookContent.module.css';
import { useSelector } from 'react-redux';
import { selectModalProperties } from '../../redux/modal/selectors';
import useModal from '../../utils/hooks/useModal';
import { Book } from '../../types/books-type';
import { getShortTitle } from '../../utils/fn_helpers';
import CustomActiveBtn from '../CustomActiveBtn/CustomActiveBtn';

const BookContent = () => {
  const properties =
    (useSelector(selectModalProperties) as unknown as Book) || null;
  const { handleClose } = useModal();
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
      <CustomActiveBtn>Add to library</CustomActiveBtn>
    </div>
  );
};

export default BookContent;
