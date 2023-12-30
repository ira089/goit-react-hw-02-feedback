import Feedback from './Feedback/Feedback';
// state = {
//   good: 0,
//   neutral: 0,
//   bad: 0,
// };
export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        padding: 18,

        // display: 'flex',
        // justifyContent: 'center',
        // alignItems: 'center',
        // fontSize: 40,
        color: '#010101',
      }}
    >
      {/* React homework template */}
      <Feedback />
    </div>
  );
};
