import { FC, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Leader } from 'store/leaderBoardReducer/types';
import { IStore } from 'store';
import { fetchUsers } from 'store/leaderBoardReducer/actions';
import AddNewScore from './AddNewScore';
import User from './User';
import styles from './LeaderBoardTable.module.scss';

const LeadersBoard: FC = () => {
  const users: Array<Leader> = useSelector((store: IStore) => store.leaderBoard.allUsers);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  return (
    <div className={styles.main}>
      <span className={styles.main__title}>Leaders table for this period</span>
      <AddNewScore />
      {users.map((leader, index) => (
        <User key={leader.id} leader={leader} index={index} id={leader.id} />
      ))}
    </div>
  );
};

export default LeadersBoard;
