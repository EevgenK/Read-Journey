import ArrowLink from '../shared/ArrowLink/ArrowLink';
import s from './Description.module.css';

const Description = () => {
  return (
    <div className={s.description}>
      <h2 className={s.title}>Start your workout</h2>
      <ol className={s.list}>
        <li className={s.item}>
          <p>
            <span>Create a personal library:</span> add the books you intend to
            read to it.
          </p>
        </li>
        <li className={s.item}>
          <p>
            <span>Create your first workout:</span> define a goal, choose a
            period, start training.
          </p>
        </li>
      </ol>
      <ArrowLink linkText="My library" linkTo="/library" />
    </div>
  );
};

export default Description;
