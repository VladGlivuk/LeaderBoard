import axios from 'core/API';
import { Dispatch } from 'redux';
import { nanoid } from 'nanoid';
import { AxiosResponse } from 'axios';
import { EDIT_USER, FETCH_USERS, ADD_USER } from '../action-types';
import { AddUser, FetchUsers, Response } from './types';

export const editUser = (id: string, name: string, score: number) => ({
  type: EDIT_USER,
  payload: { id, name, score },
});

export const fetchUsers = () => async (dispatch: Dispatch<FetchUsers>) => {
  axios
    .get('http://coding-test.cube19.io/frontend/v1/starting-state')
    .then(({ data }) => dispatch({ type: FETCH_USERS, payload: data }));
};

export const addUser = (name: string, score: number) => async (dispatch: Dispatch<AddUser>) => {
  const requestBody = {
    username: name,
  };
  const response: AxiosResponse<Response> = await axios.post(
    'http://coding-test.cube19.io/frontend/v1/process-user',
    requestBody
  );
  const payload = { name: response.data['display-name'], score, id: nanoid() };
  dispatch({ type: ADD_USER, payload });
};
