import {
  all,
  take,
  fork,
  call,
  put,
  takeEvery,
  takeLatest,
} from "redux-saga/effects";
import { getApi } from "../../helpers/apiHelper";

function* WatchGetTodoList() {
  const response = yield call(getApi());
  console.log(response);
}

function* todoSage() {
  yield all([fork(WatchGetTodoList)]);
}
