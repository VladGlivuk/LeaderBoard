import { FC } from 'react';
import { useSelector } from 'react-redux';
import { IStore } from 'components/store';
import { Leader } from 'components/store/leaderBoardReducer/types';
import AddNewScore from './AddNewScore';
import User from './User';
import styles from './LeaderBoardTable.module.scss';

const LeadersBoard: FC = () => {
  const users: Array<Leader> = useSelector((store: IStore) => store.leaderBoard.allUsers);

  return (
    <div className={styles.main}>
      <span className={styles.main__title}>Leaders table for this period</span>
      <AddNewScore />
      {users.map((leader, index) => (
        <User key={leader.id} leader={leader} index={index} />
      ))}
    </div>
  );
};
export default LeadersBoard;
