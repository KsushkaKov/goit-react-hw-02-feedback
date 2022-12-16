import PropTypes from 'prop-types';
import css from './Statistics.module.css';

export const Statistics = ({ good, neutral, bad, total, positiveFeedback }) => {
  return (
    <ul className={css.feedbackList}>
      <li className={css.feedbackListItem}>Good: {good}</li>
      <li className={css.feedbackListItem}>Neutral: {neutral}</li>
      <li className={css.feedbackListItem}>Bad: {bad}</li>
      <li className={css.feedbackListItem}>Total: {total}</li>
      <li className={css.feedbackListItem}>
        Positive feedback: {positiveFeedback} %
      </li>
    </ul>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positiveFeedback: PropTypes.number.isRequired,
};
