import { EDIT_USER, FETCH_USERS, ADD_USER } from '../action-types';

export type Leader = {
  name: string;
  score: number;
  avatar?: string;
  id: string;
};

export interface ILeaderBoardReducer {
  allUsers: Array<Leader>;
}

export type Response = {
  'display-name': string;
};

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

export type ActionType = EditUser | FetchUsers | AddUser;
