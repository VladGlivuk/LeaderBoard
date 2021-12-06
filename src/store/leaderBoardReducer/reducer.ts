import { nanoid } from 'nanoid';
import update from 'immutability-helper';
import {
  EDIT_USER,
  FETCH_USERS,
  ADD_USER,
  PREVIOUS_DAY,
  NEXT_DAY,
  CURRENT_DAY,
  FIND_BEST_LEADERS,
} from '../action-types';
import { ActionType, ILeaderBoardReducer, Leader } from './types';
import avatar from '../../img/png/secondPerson.png';

const initialState: ILeaderBoardReducer = {
  allUsers: [],
  currentDay: -1,
  topLeaders: [],
};

const leaderBoardReducer = (state = initialState, action: ActionType): ILeaderBoardReducer => {
  const { type, payload } = action;

  switch (type) {
    case EDIT_USER: {
      const newCurrentDay = state.allUsers[state.currentDay]
        .map((el: Leader) => (el.id === (payload as Leader).id ? { ...el, ...payload } : el))
        .sort((a, b) => b.score - a.score)
        .map((item, index) => {
          const prevUserIndex = state.allUsers[state.currentDay].findIndex(user => user.id === item.id);
          return { ...item, positionDifference: prevUserIndex - index };
        });
      return update(state, {
        allUsers: { [state.currentDay]: { $set: newCurrentDay } },
      });
    }

    case FETCH_USERS: {
      const fetchedUsers = (payload as Array<Leader>)
        .map(user => {
          const existUser = state.allUsers[state.currentDay]?.find(item => item.name === user.name);
          return existUser
            ? {
                ...existUser,
                score: user.score ? user.score : 0,
              }
            : { ...user, avatar, score: user.score || 0, id: nanoid(), positionDifference: 0 };
        })
        .sort((a, b) => b.score - a.score)
        .map((item, index) => {
          const prevUserIndex = state.allUsers[state.currentDay]?.findIndex(user => user.id === item.id);
          return {
            ...item,
            positionDifference: state.currentDay === -1 ? 0 : prevUserIndex - index,
          };
        });
      return {
        ...state,
        currentDay: state.currentDay + 1,
        allUsers: [...state.allUsers, fetchedUsers],
      };
    }

    case ADD_USER: {
      const newCurrentDay = [
        ...state.allUsers[state.currentDay],
        { ...(payload as Leader), avatar, positionDifference: 0 },
      ]
        .sort((a, b) => b.score - a.score)
        .map((item, index) => {
          const prevUserIndex = state.allUsers[state.currentDay].findIndex(user => user.id === item.id);
          return {
            ...item,
            positionDifference: prevUserIndex < 0 ? 0 : prevUserIndex - index,
          };
        });

      return update(state, {
        allUsers: { [state.currentDay]: { $set: newCurrentDay } },
      });
    }

    case PREVIOUS_DAY: {
      return {
        ...state,
        currentDay: state.currentDay - 1,
      };
    }

    case NEXT_DAY: {
      return {
        ...state,
        currentDay: state.currentDay + 1,
      };
    }

    case CURRENT_DAY: {
      return {
        ...state,
        currentDay: state.allUsers.length - 1,
      };
    }

    case FIND_BEST_LEADERS: {
      let topUsers: Leader[] = [];
      if (state.currentDay < 1) {
        const firstDayTopLeaders = state.allUsers
          .flat()
          .sort((a, b) => b.score - a.score)
          .slice(0, 4);
        topUsers = firstDayTopLeaders;
      } else {
        const sortedCurrentDay: Leader[] = state.allUsers[state.currentDay]
          .sort((a, b) => b.score - a.score)
          .slice(0, 4);
        if (state.topLeaders[3].score > sortedCurrentDay[0].score) {
          topUsers = state.topLeaders;
        }
        const newTopUsers: Array<Leader> = [...state.topLeaders];
        sortedCurrentDay.forEach(user => {
          const existingUser = newTopUsers.find(topLeader => topLeader.id === user.id);
          if (existingUser && user.score > existingUser.score) {
            newTopUsers[newTopUsers.findIndex(topUser => topUser.id === existingUser.id)] = user;
          } else if (!existingUser) {
            newTopUsers.push(user);
          }
        });
        topUsers = newTopUsers.sort((a, b) => b.score - a.score).slice(0, 4);
      }
      return {
        ...state,
        topLeaders: topUsers,
      };
    }

    default:
      return state;
  }
};

export default leaderBoardReducer;
