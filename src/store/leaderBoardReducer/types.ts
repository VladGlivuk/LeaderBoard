import {
  EDIT_USER,
  FETCH_USERS,
  ADD_USER,
  PREVIOUS_DAY,
  NEXT_DAY,
  CURRENT_DAY,
  FIND_BEST_LEADERS,
} from '../action-types';

export type Leader = {
  name: string;
  score: number;
  avatar?: string;
  id: string;
  positionDifference: number;
};

export type Response = {
  'display-name': string;
};

export interface ILeaderBoardReducer {
  allUsers: Leader[][];
  currentDay: number;
  topLeaders: Array<Leader>;
}

type EditUser = {
  type: typeof EDIT_USER;
  payload: Leader;
};

export type FetchUsers = {
  type: typeof FETCH_USERS;
  payload: Array<Leader>;
};

export type AddUser = {
  type: typeof ADD_USER;
  payload: Leader;
};

export type PreviousDay = {
  type: typeof PREVIOUS_DAY;
  payload: undefined;
};

export type NextDay = {
  type: typeof NEXT_DAY;
  payload: undefined;
};

export type CurrentDay = {
  type: typeof CURRENT_DAY;
  payload: undefined;
};

export type FindBestLeaders = {
  type: typeof FIND_BEST_LEADERS;
  payload: undefined;
};

export type ActionType = EditUser | FetchUsers | AddUser | PreviousDay | NextDay | CurrentDay | FindBestLeaders;
