import { FC } from 'react';
import LeaderBoardHeader from './components/LeaderBoardHeader';
import LeaderBoardTable from './components/LeaderBoardTable';
import styles from './App.module.scss';
import './normalize.scss';

const App: FC = () => (
  <div className={styles.wrapper}>
    <LeaderBoardHeader />
    <LeaderBoardTable />
  </div>
);

export default App;
