import LeaderBoardHeader from 'components/LeaderBoardHeader';
import LeadersBoard from 'components/LeaderBoardTable';
import Loader from 'components/shared/Loader/Loader';
import { FC } from 'react';
import { useSelector } from 'react-redux';
import { IStore } from 'store';
import { Leader } from 'store/leaderBoardReducer/types';
import styles from './App.module.scss';
import './normalize.scss';

const App: FC = () => {
  const users: Array<Array<Leader>> = useSelector((store: IStore) => store.leaderBoard.allUsers);

  return (
    <div className={styles.wrapper}>
      {users.length ? <LeaderBoardHeader /> : <Loader className={styles.loader} />}
      <LeadersBoard />
    </div>
  );
};

export default App;
