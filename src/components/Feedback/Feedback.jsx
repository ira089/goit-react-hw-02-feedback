import { Component } from 'react';
import styles from './feedback.module.css';
import FeedbackBtn from './FeedbackBtn';
import FeedbackStatistic from './FeedbacksStatistic';

class Feedback extends Component {
  // static BtnOptions = ['good', 'neutral', 'bad'];

  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  leaveFeedback = ev => {
    // console.log(ev.target.name);
    const counterStat = ev.target.name;
    console.log(counterStat);
    this.setState(prevState => {
      // console.log(prevState);
      return { [counterStat]: (prevState[counterStat] += 1) };
    });
  };

  render() {
    return (
      <div>
        <div className={styles.blockFeedback}>
          <h2 className={styles.title}>Please leave feedback</h2>
          <div className={styles.blockBtn}>
            <FeedbackBtn
              items={this.state}
              leaveFeedback={this.leaveFeedback}
            />
            {/* <button>Good</button>
            <button>Bad</button> */}
          </div>
        </div>
        <div className={styles.blockStatistics}>
          <h2 className={styles.title}>Statistics</h2>

          <ul className={styles.statisticsList}>
            <FeedbackStatistic
              // items={Feedback.BtnOptions}
              // items={this.state}
              items={this.state}
            />
            {/* <li>3</li>
            <li>4</li> */}
          </ul>
        </div>
      </div>
    );
  }
}

export default Feedback;
