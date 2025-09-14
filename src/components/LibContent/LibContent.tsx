import BooksPicture from '../shared/BooksPicture/BooksPicture';
import s from './LibContent.module.css';

const LibContent = () => {
  return (
    <div className={s.empty_content}>
      <div className={s.wrap}>
        <BooksPicture size="50" />
      </div>
      <p className={s.text}>
        To start training, add <span>some of your books</span> or from the
        recommended ones
      </p>
    </div>
  );
};

export default LibContent;
