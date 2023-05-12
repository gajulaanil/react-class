import {
  GET_TODO_LIST,
  GET_TODO_LIST_SUCCESS,
  GET_TODO_LIST_API_ERROR,
} from "./actionTypes";

const initialState = {
  loading: false,
  response: [],
  error: "",
};

const todo = (state = initialState, action) => {
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
        response: action.payload,
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
      state = { ...state };
      break;
  }
};

export default todo;
