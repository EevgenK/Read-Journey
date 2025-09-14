import s from './BookSuccessAddContent.module.css';

const BookSuccessAddContent = () => {
  return (
    <div
      className={s.wrap}
      role="dialog"
      aria-labelledby="modal-title"
      aria-describedby="modal-description"
    >
      <span className={s.icon} aria-hidden="true">
        👍
      </span>
      <h2 className={s.title} id="modal-title">
        Good job
      </h2>
      <p className={s.text} id="modal-description">
        Your book is now in <span>the library!</span> The joy knows no bounds,
        and now you can start your training.
      </p>
    </div>
  );
};

export default BookSuccessAddContent;
