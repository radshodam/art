/**

themeSlice.js
*/
import { createSlice } from "@reduxjs/toolkit"; // import createSlice from toolkit
// create theme slice with initial state and reducers
export const themeSlice = createSlice({
  name: "theme", // name of the slice
  initialState: { theme: "light" }, // initial state of the slice
  reducers: {
    setTheme: (state, action) => {
      // action to set the theme
      state.theme = action.payload; // update the state with the payload
    },
  },
});

// export the actions from the theme slice
export const { setTheme } = themeSlice.actions;

// export the theme slice reducer
export default themeSlice.reducer;
