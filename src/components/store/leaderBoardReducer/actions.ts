import { nanoid } from "nanoid";
import { CREATE_USER } from "../action-types";

export const createUser = (name: string, score: number) => ({
  type: CREATE_USER,
  payload: { name, score, id: nanoid() },
});
