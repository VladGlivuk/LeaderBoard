import { nanoid } from 'nanoid';
import { CREATE_USER, EDIT_USER } from '../action-types';

export const createUser = (name: string, score: number) => ({
  type: CREATE_USER,
  payload: { name, score, id: nanoid() },
});

export const editUser = (index: number, name: string, score: number) => ({
  type: EDIT_USER,
  payload: { index, name, score },
});
