import {
  all,
  take,
  fork,
  call,
  put,
  takeEvery,
  takeLatest,
} from "redux-saga/effects";

// Helpers
import getApi from "../../helpers/apiHelper";
import { GET_TODO_LIST_API_URL } from "../../helpers/urlHelper";

// Action Types
import { GET_TODO_LIST } from "./actionTypes";

function* GetTodoList() {
  console.log("Action called in Saga");
  const { response, error } = yield call(getApi(GET_TODO_LIST_API_URL));
  console.log(response, error);
}

function* WatchGetTodoList() {
  const response = yield take(GET_TODO_LIST);
  console.log(response);
  yield call(GetTodoList, response);
}

function* todoSaga() {
  yield all([fork(WatchGetTodoList)]);
}

export default todoSaga;
