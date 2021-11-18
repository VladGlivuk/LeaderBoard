import { combineReducers } from "redux";
import { createStore } from "redux";
import leaderBoardReducer from "./leaderBoardReducer/reducer";

const rootReducer = combineReducers({
  leaderBoard: leaderBoardReducer,
});

const store = createStore(rootReducer);

export type IStore = ReturnType<typeof rootReducer>;
export default store;
