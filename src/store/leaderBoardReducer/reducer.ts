import { currentDay } from 'store/leaderBoardReducer/actions';
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
      // const topUsers: Leader[] = [];
      // const sortedUsers = state.allUsers.flat().sort((a, b) => b.score - a.score);
      // sortedUsers.forEach(user => {
      //   if (topUsers.length >= 4) return;
      //   const existsTopUser = state.topLeaders.find(topUser => user.id === topUser.id);
      //   if (!existsTopUser) {
      //     topUsers.push(user);
      //     return;
      //   }
      //   const isInNewTopUsers = topUsers.findIndex(topUser => topUser.id === user.id) >= 0;
      //   console.log(existsTopUser);
      //   if (!isInNewTopUsers) topUsers.push(existsTopUser.score > user.score ? existsTopUser : user);
      // });

      // let topUsers: Leader[] = [];
      // const topUsers = state.allUsers
      //   .flat()
      //   .sort((a, b) => b.score - a.score)
      //   .slice(0, 4);

      // } else {
      //   const sortedUsers = state.allUsers.flat().sort((a, b) => b.score - a.score);
      //   console.log(sortedUsers);
      //   sortedUsers.forEach(user => {
      //     if (topUsers.length < 4) return;
      //     const existTopUser = state.topLeaders.find(topUser => topUser.id === user.id);
      //   });
      // }

      // const sortedUsers = state.allUsers.flat().sort((a, b) => b.score - a.score);
      //   console.log(sortedUsers);
      //   sortedUsers.forEach(user => {
      //     if (topUsers.length < 4) return;
      //     const existTopUser = state.topLeaders.find(topUser => topUser.id === user.id);
      //     console.log(user);
      //     if (existTopUser) {
      //       // const existTopUser = topUsers.find(topUser => topUser.id === user.id);
      //       topUsers.push(existTopUser.score > user.score ? existTopUser : user);
      //     }
      //     const userInCurrentTop = state.topLeaders.find(topUser => topUser.id === user.id);
      //     if (userInCurrentTop) {
      //       topUsers.push(userInCurrentTop.score > user.score ? userInCurrentTop : user);
      //     } else {
      //       topUsers.push(user);
      //     }
      //   });

      // const topUsers = state.allUsers.flat().sort((a, b) => b.score - a.score);
      // const result = topUsers.slice(0, 4).filter(user => {
      //   const userAsLeader = state.topLeaders.find(topUser => topUser.id === user.id);
      //   if (userAsLeader) userAsLeader.score = userAsLeader.score > user.score ? userAsLeader.score : user.score;
      //   return true;
      // });

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
        console.log(sortedCurrentDay);
        const newTopUsers: Array<Leader> = [];
        sortedCurrentDay.forEach(user => {
          console.log('newTopUsers', newTopUsers);
          const existingUser = state.topLeaders.find(topLeader => topLeader.id === user.id);
          if (existingUser) newTopUsers.push(existingUser.score > user.score ? existingUser : user);
          else newTopUsers.push(user);
        });
        topUsers = newTopUsers.sort((a, b) => b.score - a.score);
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
