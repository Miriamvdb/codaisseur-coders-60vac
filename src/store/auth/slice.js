import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  me: null, // the logged-in user
  accessToken: null,
  loading: false,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    startLoadingAuth: (state) => {
      state.loading = true;
    },

    userLoggedIn: (state, action) => {
      state.me = action.payload.user;
      state.accessToken = action.payload.accessToken;
      state.loading = false;
    },

    logOut: (state, action) => {
      console.log("Log out", action);
      localStorage.removeItem("token");
      return initialState;
    },
  },
});

export const { startLoadingAuth, userLoggedIn, logOut } = authSlice.actions;
export default authSlice.reducer;
