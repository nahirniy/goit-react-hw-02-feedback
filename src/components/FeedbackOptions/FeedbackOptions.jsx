import css from './FeedbackOptions.module.css';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <ul className={css.btn_list}>
      {options.map((option, index) => {
        return (
          <li key={index} className={css.btn_item}>
            <button className={css.btn} onClick={() => onLeaveFeedback(option)}>
              {option}
            </button>
          </li>
        );
      })}
    </ul>
  );
};
