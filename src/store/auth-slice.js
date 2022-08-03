import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: { isLoggedIn: true },
  reducers: {
    login(state) {
      state.isLoggedIn = true;
    },
    logout(state) {
      state.isLoggedIn = false;
    },
    register(state, action) {
      console.log(action.payload);
    },
  },
});

export const authActions = authSlice.actions;

export default authSlice;
