import { FC } from 'react';
import { Leader } from 'store/leaderBoardReducer/types';
import styles from './TopUser.module.scss';

interface ITopUserProps {
  leader: Leader;
}

const TopUser: FC<ITopUserProps> = ({ leader }) => (
  <div className={styles.main}>
    <div className={styles.main__photo}>
      <div className={styles.main__score}>{leader.score}</div>
    </div>
    <div className={styles.main__name}>{leader.name}</div>
  </div>
);

export default TopUser;
