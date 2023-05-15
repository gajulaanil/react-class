import { combineReducers } from "redux";

// Reducers
import Todo from "../services/todo/reducer";

const rootReducers = combineReducers({
  Todo,
});

export default rootReducers;
