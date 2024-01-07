import { Component } from 'react';
import styles from './Feedback/feedback.module.css';
import Section from './Feedback/Section';
import Notification from './Feedback/Notification';
import FeedbackOptions from './Feedback/FeedbackOptions';
import Statistics from './Feedback/Statistics';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  leaveFeedback = ev => {
    // console.log(ev.target.name);
    const counterStatItem = ev.target.name;

    this.setState(prevState => {
      return { [counterStatItem]: (prevState[counterStatItem] += 1) };
    });
  };

  countTotalFeedback() {
    const statValues = Object.values(this.state);
    // console.log(statValues);
    const totalStat = statValues.reduce((total, value) => total + value, 0);
    return totalStat;
  }

  countPositiveFeedbackPercentage() {
    const total = this.countTotalFeedback();
    if (!total) {
      return 0;
    }
    const positiveFeedback = this.state.good;
    // console.log(positiveFeedback);
    return Number(((positiveFeedback / total) * 100).toFixed(2));
  }

  // const values = Object.values(book);
  nofeedback() {
    const valuesArr = Object.values(this.state);
    // console.log(valuesArr);
    const positiveValues = valuesArr.filter(value => value > 0);
    // console.log(positiveValues);
    return positiveValues.length;
  }

  render() {
    const totalStatistic = this.countTotalFeedback();
    const positiveFeedbackPercentage = this.countPositiveFeedbackPercentage();
    return (
      <div className={styles.wrap}>
        <Section title="Please leave feedback">
          <div className={styles.blockBtn}>
            <FeedbackOptions
              items={this.state}
              leaveFeedback={this.leaveFeedback}
            />
          </div>
        </Section>
        {this.nofeedback() ? (
          <Section title="Statistics">
            <Statistics
              items={this.state}
              total={totalStatistic}
              positiveFeedbackPercentage={positiveFeedbackPercentage}
            />
          </Section>
        ) : (
          <Notification message="There is no feedback" />
        )}
      </div>
    );
  }
}

// const App = () => {
//   return (
//     <div
//       style={{
//         height: '100vh',
//         padding: 18,

// justifyContent: 'center',
// alignItems: 'center',
// fontSize: 40,
//     color: '#010101',
//   }}
// >

/* React homework template */

//       <Feedback />
//     </div>
//   );
// };
export default App;
