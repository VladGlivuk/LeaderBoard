import { FC, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Leader } from 'store/leaderBoardReducer/types';
import { IStore } from 'store';
import { fetchUsers, findBestLeaders } from 'store/leaderBoardReducer/actions';
import AddNewScore from './AddNewScore';
import styles from './LeaderBoardTable.module.scss';
import User from './User';

const LeadersBoardTable: FC = () => {
  const users: Array<Array<Leader>> = useSelector((store: IStore) => store.leaderBoard.allUsers);
  const currentDay: number = useSelector((store: IStore) => store.leaderBoard.currentDay);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  useEffect(() => {
    dispatch(findBestLeaders());
  }, [users]);

  return (
    <div className={styles.main}>
      <span className={styles.main__title}>Leaders table for this period</span>
      <AddNewScore />
      {users[currentDay]?.map((leader, index) => (
        <User
          key={leader.id}
          leader={leader}
          index={index}
          id={leader.id}
          positionDifference={leader.positionDifference}
        />
      ))}
    </div>
  );
};

export default LeadersBoardTable;
