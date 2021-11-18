import { nanoid } from "nanoid";
import { CREATE_USER } from "../action-types";
import { ActionType, ILeaderBoardReducer } from "./types";
import avatar from "../../../img/png/secondPerson.png"

const initialState: ILeaderBoardReducer = {
  allUsers: [],
};

const users = [{"name":"chris","score":6, id: nanoid(), avatar: avatar},{"name":"fred","score":7, id: nanoid(), avatar: avatar},{"name":"elena", "score":5, id: nanoid(), avatar: avatar},{"name":"grace","score":11, id: nanoid(), avatar: avatar},{"name":"bob","score":7, id: nanoid(), avatar: avatar},{"name":"alice", "score": 1, id: nanoid(), avatar: avatar},{"name":"dom","score":11, id: nanoid(), avatar: avatar},{"name":"harriet", "score": 22, id: nanoid(), avatar: avatar}]

const leaderBoardReducer = (
  state = initialState,
  action: ActionType
): ILeaderBoardReducer => {
  const { type, payload} = action;

  switch (type) {
    case CREATE_USER: {
      return {
        ...state,
      };
    }
    default:
      return state;
  }
  
}

export default leaderBoardReducer;