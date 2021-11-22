import { nanoid } from 'nanoid';
import { CREATE_USER, EDIT_USER } from '../action-types';
import { ActionType, ILeaderBoardReducer, Leader } from './types';
import avatar from '../../../img/png/secondPerson.png';

const initialState: ILeaderBoardReducer = {
  allUsers: [
    { name: 'chris', score: 6, id: nanoid(), avatar },
    { name: 'fred', score: 7, id: nanoid(), avatar },
    { name: 'elena', score: 5, id: nanoid(), avatar },
    { name: 'grace', score: 11, id: nanoid(), avatar },
    { name: 'bob', score: 7, id: nanoid(), avatar },
    { name: 'alice', score: 1, id: nanoid(), avatar },
    { name: 'dom', score: 11, id: nanoid(), avatar },
    { name: 'harriet', score: 22, id: nanoid(), avatar },
  ].sort((a, b) => b.score - a.score),
};

const leaderBoardReducer = (state = initialState, action: ActionType): ILeaderBoardReducer => {
  const { type, payload } = action;

  switch (type) {
    case CREATE_USER: {
      return {
        ...state,
        allUsers: [...state.allUsers, { ...payload, avatar }].sort((a, b) => b.score - a.score),
      };
    }
    case EDIT_USER: {
      const userIndex = state.allUsers.findIndex(user => user.id === payload.id);

      // immutability helper
      // return update(state, {
      // allUsers: {[userIndex]: ${set: payload}}
      // })
      return {
        ...state,
        allUsers: state.allUsers.map((el: Leader, index: number) =>
          index === payload.index ? { ...el, name: payload.name, score: payload.score } : el
        ),
      };
    }
    default:
      return state;
  }
};

export default leaderBoardReducer;
