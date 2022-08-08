import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./auth-slice";
import policySlice from "./policy-slice";

const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    policy: policySlice.reducer,
  },
});

export default store;
