import css from './Statistics.module.css';

export const Statistics = props => {
  const { good, neutral, bad, total, positivePercentage } = props;

  return (
    <ul className={css.statistics_list}>
      <li className={css.statistics_item}>Good: {good}</li>
      <li className={css.statistics_item}>Neutral: {neutral}</li>
      <li className={css.statistics_item}>Bad: {bad}</li>
      <li className={css.statistics_item}>Total: {total}</li>
      <li className={css.statistics_item}>
        Positive feedback: {positivePercentage || 0}%
      </li>
    </ul>
  );
};
