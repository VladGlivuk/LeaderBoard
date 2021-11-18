import { FC } from 'react';
import styles from './LeaderBoardTable.module.scss';
import AddNewScore from './AddNewScore';
import User from './User';

const LeadersBoard: FC = () => (
  <div className={styles.main}>
    <span className={styles.main__title}>Leaders table for this period</span>
    <AddNewScore />
    <User />
  </div>
);

export default LeadersBoard;
