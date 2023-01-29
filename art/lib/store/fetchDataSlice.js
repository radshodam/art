import { createSlice } from "@reduxjs/toolkit";

export const fetchDataSlice = createSlice({
  name: "fetchData",
  initialState: { data: [], loading: false, error: null },
  reducers: {
    fetchDataPending: (state) => {
      debugger;
      state.loading = true;
    },
    fetchDataSuccess: (state, action) => {
      debugger;
      state.data = action.payload;
      state.loading = false;
      state.error = null;
    },
    fetchDataError: (state, action) => {
      debugger;
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { fetchDataPending, fetchDataSuccess, fetchDataError } =
  fetchDataSlice.actions;

export default fetchDataSlice.reducer;
