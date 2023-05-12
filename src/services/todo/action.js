import {
  GET_TODO_LIST,
  GET_TODO_LIST_SUCCESS,
  GET_TODO_LIST_API_ERROR,
} from "./actionTypes";

export const getTodoList = () => {
  return {
    type: GET_TODO_LIST,
  };
};

export const getTodoListSuccess = (todoList) => {
  return {
    type: GET_TODO_LIST_SUCCESS,
    payload: todoList,
  };
};

export const getTodoListError = (error) => {
  return {
    type: GET_TODO_LIST_API_ERROR,
    payload: error,
  };
};
