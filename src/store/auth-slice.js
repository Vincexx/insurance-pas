import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    isLoggedIn: true,
    registerForm: {
      firstName: "",
      middleName: "",
      lastName: "",
      address: "",
      email: "",
      password: "",
    },
    loginForm: {
      email: "",
      password: "",
    },
  },
  reducers: {
    setRegForm(state, action) {
      state.registerForm[action.payload.name] = action.payload.value;
    },
    login(state) {
      state.isLoggedIn = true;
    },
    logout(state) {
      state.isLoggedIn = false;
    },
  },
});

export const authActions = authSlice.actions;

export default authSlice;
