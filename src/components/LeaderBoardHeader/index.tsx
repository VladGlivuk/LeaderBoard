import { FC } from "react";
import TopUser from "./TopUser";
import headerImage from "../../img/svg/headerImage.svg"

import styles from "./LeaderBoardHeader.module.scss";

const LeaderBoardHeader: FC = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        Cube<span>19</span> Leaderboard
      </div>
      <div className={styles.table}>
        <span className={styles.table_title}>
          All time Highest Scorers
        </span>
        <div className={styles.table_TopUsers}>
          <TopUser
            score={402}
            name="Lion El Johnson" 
          />
          <TopUser
            score={398}
            name="Aisla Pindoria"
          />
          <TopUser
            score={300}
            name="Robot Guliman"
          />
          <TopUser
            score={300}
            name="Bobbo Smith"
          />
          <img src={headerImage} alt="headerImage" />
        </div>
      </div>
    </div>
  );
};

export default LeaderBoardHeader;
