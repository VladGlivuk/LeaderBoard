import { CREATE_USER, EDIT_USER } from '../action-types';

export type Leader = {
  name: string;
  score: number;
  avatar: string;
  id: string | number;
  index?: any;
};

export interface ILeaderBoardReducer {
  allUsers: Array<Leader>;
}

type CreateUser = {
  type: typeof CREATE_USER;
  payload: Leader;
};

type EditUser = {
  type: typeof EDIT_USER;
  payload: Leader;
};

export type ActionType = CreateUser | EditUser;
