import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  login: false,
};

export const loginSlice = createSlice({
  name: "transactions",
  initialState,
  reducers: {
    loginUser: (state) => {
      state.login = true;
    },
    logoutUser: (state) => {
      state.login = false;
    },
  },
});

export const { loginUser, logoutUser } = loginSlice.actions;

export default loginSlice.reducer;
