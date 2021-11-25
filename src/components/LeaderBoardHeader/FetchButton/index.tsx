import { fetchUsers } from 'store/leaderBoardReducer/actions';
import { useDispatch } from 'react-redux';
import styles from './FetchButton.module.scss';

const FetchButton = () => {
  const dispatch = useDispatch();

  const handleFetchUsers = () => {
    dispatch(fetchUsers());
  };

  return (
    <div className={styles.main}>
      <button className={styles.main__btn} onClick={handleFetchUsers}>
        Fetch Users
      </button>
    </div>
  );
};

export default FetchButton;
