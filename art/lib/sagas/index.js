/**
 * Root Sagas
 */
import { all } from "redux-saga/effects";
import watchFetchDataSagas from "./fetchDataSaga";

export default function* rootSaga(getState) {
  yield all([watchFetchDataSagas()]);
}
