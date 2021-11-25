import { nanoid } from 'nanoid';
import { EDIT_USER, FETCH_USERS, ADD_USER } from '../action-types';
import { ActionType, ILeaderBoardReducer, Leader } from './types';
import avatar from '../../img/png/secondPerson.png';

const initialState: ILeaderBoardReducer = {
  allUsers: [],
};

const leaderBoardReducer = (state = initialState, action: ActionType): ILeaderBoardReducer => {
  const { type, payload } = action;

  switch (type) {
    case EDIT_USER: {
      // immutability helper
      //   const userIndex = state.allUsers.findIndex(user => user.id === payload.id);
      //   return update(state, {
      //     allUsers: { [userIndex]: { $set: payload } },
      //   });
      return {
        ...state,
        allUsers: state.allUsers
          .map((el: Leader) => (el.id === (payload as Leader).id ? { ...el, ...payload } : el))
          .sort((a, b) => b.score - a.score),
      };
    }

    case FETCH_USERS: {
      const fetchedUsers = (payload as Array<Leader>)
        .map(user => ({
          ...user,
          score: user.score ? user.score : 0,
          avatar,
          id: nanoid(),
        }))
        .sort((a, b) => b.score - a.score);
      return {
        ...state,
        allUsers: fetchedUsers,
      };
    }

    case ADD_USER: {
      return {
        ...state,
        allUsers: [...state.allUsers, { ...(payload as Leader), avatar }].sort((a, b) => b.score - a.score),
      };
    }

    default:
      return state;
  }
};

export default leaderBoardReducer;
