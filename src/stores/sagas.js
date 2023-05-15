import { all, fork } from "redux-saga/effects";

//Sagas
import todoSaga from "../services/todo/saga";

function* rootSaga() {
  yield all([fork(todoSaga)]);
}

export default rootSaga;
