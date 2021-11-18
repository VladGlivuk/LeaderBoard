import { CREATE_USER } from "../action-types";
import { createUser } from "./actions";

export type User = {
  score: number;
  name: string;
  id: string;
};

export interface ILeaderBoardReducer {
  allUsers: Array<User>;
}

type CreateUser = {
  type: typeof CREATE_USER;
  payload: User;
};

export type ActionType = CreateUser;
