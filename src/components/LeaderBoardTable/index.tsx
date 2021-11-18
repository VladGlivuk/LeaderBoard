import { FC } from "react";
import User from "./User";
import AddNewScore from "./AddNewScore";
import styles from "./LeaderBoardTable.module.scss";

const LeadersBoard: FC = () => {
  return (
    <div className={styles.main}>
      <span className={styles.main__title}>Leaders table for this period</span>
      <AddNewScore/>
      <User/>
    </div>
  );
};

export default LeadersBoard;
