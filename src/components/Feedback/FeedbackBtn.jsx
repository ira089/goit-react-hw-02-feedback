import styles from './feedback.module.css';

const FeedbackBtn = ({ items, leaveFeedback }) => {
  const arrItems = Object.keys(items);
  const buttonElements = arrItems.map(arrItem => (
    <button
      className={styles.btn}
      onClick={evt => leaveFeedback(evt)}
      key={arrItem}
      name={arrItem}
    >
      {arrItem}
    </button>
  ));

  return buttonElements;
};

export default FeedbackBtn;
