import {
  GET_TODO_LIST,
  GET_TODO_LIST_SUCCESS,
  GET_TODO_LIST_API_ERROR,
} from "./actionTypes";

const initialState = {
  loading: false,
  todoList: [],
  error: [],
};

const Todo = (state = initialState, action) => {
  console.log("state :", state, "   action:", action.type);
  switch (action.type) {
    case GET_TODO_LIST:
      state = {
        ...state,
        loading: true,
      };
      break;

    case GET_TODO_LIST_SUCCESS:
      state = {
        ...state,
        loading: false,
        todoList: action.payload,
      };
      break;

    case GET_TODO_LIST_API_ERROR:
      state = {
        ...state,
        loading: false,
        error: action.payload,
      };
      break;

    default:
      return {
        ...state,
      };
  }
};

export default Todo;
