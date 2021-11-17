import { FC } from "react";
import styles from "./TopUser.module.scss"

interface ITopUserProps {
  score: number;
  name: string;
}

const TopUser: FC<ITopUserProps> = ({ score, name}) => {
  return (
    <div className={styles.main} >
      <div className={styles.main__photo} >
        <div className={styles.main__photo_score}>{score}</div>
      </div>
      <div className={styles.main__name}>{name}</div>
    </div>
  )
}

export default TopUser;