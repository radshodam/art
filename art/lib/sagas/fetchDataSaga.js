import axios from "axios";
import appHTTP from "lib/api/appHTTP";
import { all, call, fork, put, takeEvery } from "redux-saga/effects";
import {
  fetchDataPending,
  fetchDataSuccess,
  fetchDataError,
} from "../store/fetchDataSlice";

function* handleFetchDataPending() {
  try {
    const http = appHTTP({ noToken: true });
    const res = yield call(http.get, "/products");
    // const res = yield axios.get(`https://fakestoreApi.com/products`);

    if (res) {
      yield put(fetchDataSuccess(res.data));
    }
  } catch (error) {
    debugger;
    // const errorMessage = "Can't reach server right now.";
    debugger;
    yield put(fetchDataError(error.message));
  }
}

export function* watchFetchData() {
  yield takeEvery(fetchDataPending.type, handleFetchDataPending);
}

export default function* rootSaga() {
  yield all([fork(watchFetchData)]);
}
