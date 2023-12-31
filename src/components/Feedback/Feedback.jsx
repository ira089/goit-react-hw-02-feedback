// import { Component } from 'react';
// import styles from './feedback.module.css';
// import FeedbackBtn from './FeedbackBtn';
// import FeedbackStatistic from './FeedbacksStatistic';

// class Feedback extends Component {
// static BtnOptions = ['good', 'neutral', 'bad'];

// state = {
//   good: 0,
//   neutral: 0,
//   bad: 0,
// };

// leaveFeedback = ev => {
// console.log(ev.target.name);
// const counterStatItem = ev.target.name;
// console.log(counterStatItem);
// this.setState(prevState => {
// console.log(prevState);
//     return { [counterStatItem]: (prevState[counterStatItem] += 1) };
//   });
// };

// countTotalFeedback() {
//   const statValues = Object.values(this.state);
// console.log(statValues);
//   const totalStat = statValues.reduce((total, value) => total + value, 0);
//   return totalStat;
// }

// countPositiveFeedbackPercentage() {
//   const total = this.countTotalFeedback();
//   if (!total) {
//     return 0;
//   }
//   const positiveFeedback = this.state.good;
//   console.log(positiveFeedback);
//   return Number(((positiveFeedback / total) * 100).toFixed(2));
// }

// render() {
//   const totalStatistic = this.countTotalFeedback();
//   const positiveFeedbackPercentage = this.countPositiveFeedbackPercentage();
//   return (
//     <div>
//       <div className={styles.blockFeedback}>
//         <h2 className={styles.title}>Please leave feedback</h2>
//         <div className={styles.blockBtn}>
//           <FeedbackBtn
//             items={this.state}
//             leaveFeedback={this.leaveFeedback}
//           />

/* <button>Good</button>
            <button>Bad</button> */

//   </div>
// </div>
// <div className={styles.blockStatistics}>
//   <h2 className={styles.title}>Statistics</h2>

//   <FeedbackStatistic
//     items={this.state}
//     total={totalStatistic}
//     positiveFeedbackPercentage={positiveFeedbackPercentage}
//   />

/* <li>3</li>
            <li>4</li> */

//         </div>
//       </div>
//     );
//   }
// }

// export default Feedback;
