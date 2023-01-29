/**
 * Redux Store
 */

import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import rootSaga from "../sagas";
import fetchDataReducer from "./fetchDataSlice";
import themeReducer from "./themeSlice"; // import themeReducer
const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: {
    fetchData: fetchDataReducer,
    theme: themeReducer, // add themeReducer to the store
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ thunk: false }).concat(sagaMiddleware),
});

sagaMiddleware.run(rootSaga);

export default store;
