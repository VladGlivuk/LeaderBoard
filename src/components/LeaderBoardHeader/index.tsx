import { FC, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Leader } from 'store/leaderBoardReducer/types';
import { IStore } from 'store';
import TopUser from './TopUser';
import FetchButton from './FetchButton';
import headerImage from '../../img/svg/headerImage.svg';
import styles from './LeaderBoardHeader.module.scss';
import HistoryButtons from './HistoryButtons';

const LeaderBoardHeader: FC = () => {
  const topLeaders: Array<Leader> = useSelector((store: IStore) => store.leaderBoard.topLeaders);

  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        Cube<span>19</span> Leaderboard
      </div>
      <div className={styles.table}>
        <span className={styles.table_title}>All time Highest Scorers</span>
        <div className={styles.table_TopUsers}>
          {topLeaders.map(leader => (
            <TopUser key={leader.id} leader={leader} />
          ))}
          <img src={headerImage} alt="headerImage" />
        </div>
      </div>
      <div className={styles.header__buttons}>
        <FetchButton />
        <HistoryButtons />
      </div>
    </div>
  );
};

export default LeaderBoardHeader;
