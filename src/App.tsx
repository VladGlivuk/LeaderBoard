import LeaderBoardHeader from 'components/LeaderBoardHeader';
import LeadersBoard from 'components/LeaderBoardTable';
import { FC } from 'react';
import styles from './App.module.scss';
import './normalize.scss';

const App: FC = () => (
  <div className={styles.wrapper}>
    <LeaderBoardHeader />
    <LeadersBoard />
  </div>
);

export default App;
