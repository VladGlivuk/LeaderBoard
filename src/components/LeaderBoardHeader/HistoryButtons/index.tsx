import ChangeDayButton from 'components/shared/components/ChnageDayButton';
import { FC, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { IStore } from 'store';
import { currentDay, nextDay, previousDay } from 'store/leaderBoardReducer/actions';
import { Leader } from 'store/leaderBoardReducer/types';
import styles from './HistoryButtons.module.scss';

const HistoryButtons: FC = () => {
  const users: Array<Array<Leader>> = useSelector((store: IStore) => store.leaderBoard.allUsers);
  const presentDay: number = useSelector((store: IStore) => store.leaderBoard.currentDay);
  const prevDayButtonDisable = useMemo(() => presentDay === 0, [presentDay]);
  const currentDayButtonDisable = useMemo(() => users.length === 0 || presentDay === users.length - 1, [presentDay]);
  const nextDayButtonDisable = useMemo(() => users.length === 0 || presentDay === users.length - 1, [presentDay]);

  const dispatch = useDispatch();

  const handlePreviousDay = () => {
    dispatch(previousDay());
  };
  const handleCurrentDay = () => {
    dispatch(currentDay());
  };
  const handleNextDay = () => {
    dispatch(nextDay());
  };
  return (
    <div className={styles.main}>
      <ChangeDayButton
        label="Previous Day"
        onClick={handlePreviousDay}
        disabled={prevDayButtonDisable}
        className={prevDayButtonDisable ? styles.main__prevDay_btn_disabled : styles.main__prevDay_btn}
      />
      <ChangeDayButton
        label="Current Day"
        onClick={handleCurrentDay}
        disabled={currentDayButtonDisable}
        className={currentDayButtonDisable ? styles.main__curDay_btn_disabled : styles.main__curDay_btn}
      />
      <ChangeDayButton
        label="Next Day"
        onClick={handleNextDay}
        disabled={nextDayButtonDisable}
        className={nextDayButtonDisable ? styles.main__nextDay_btn_disabled : styles.main__nextDay_btn}
      />
    </div>
  );
};

export default HistoryButtons;
