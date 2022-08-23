import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchAllAccounts = createAsyncThunk("users/get", async () => {
  const response = await fetch(
    `${process.env.REACT_APP_API_URL}/api/admin/users`
  );
  const json = await response.json();
  console.log(json.results);
  return json.results;
});

const userSlice = createSlice({
  name: "user",
  initialState: { allUsers: [] },
  reducers: {
    getAllUsers(state, action) {
      state.allUsers = action.payload;
    },
    resetAllUser(state) {
      state.allUsers = []
    }
  },
});

export const userActions = userSlice.actions;

export default userSlice;
