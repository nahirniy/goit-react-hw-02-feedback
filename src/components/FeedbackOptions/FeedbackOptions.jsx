import { nanoid } from 'nanoid';
import css from './FeedbackOptions.module.css';

export const FeedbackOptions = ({ options, countFeedback }) => {
  return (
    <ul className={css.btn_list}>
      {options.map(option => {
        const id = nanoid();

        return (
          <li key={id} className={css.btn_item}>
            <button className={css.btn} onClick={() => countFeedback(option)}>
              {option}
            </button>
          </li>
        );
      })}
    </ul>
  );
};
