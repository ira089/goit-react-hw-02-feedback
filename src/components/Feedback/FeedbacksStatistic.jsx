import styles from './feedback.module.css';

const FeedbackStatistic = ({ items, total, positiveFeedbackPercentage }) => {
  console.log(items);
  console.log(items.good);
  const arrItems = Object.keys(items);
  console.log(arrItems);
  return (
    <ul className={styles.statisticsList}>
      {arrItems.map(arrItem => (
        <li className={styles.item} key={arrItem}>
          {arrItem}: {items[arrItem]}
        </li>
      ))}
      <li className={styles.item}>Total: {total}</li>
      <li className={styles.item}>
        Positive feedback: {positiveFeedbackPercentage}%
      </li>
    </ul>
  );
};

export default FeedbackStatistic;
