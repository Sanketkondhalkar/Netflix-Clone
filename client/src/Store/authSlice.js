import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "netflix",
  initialState: {
    register: {},
    status: false,
  },
  reducers: {
    registration: (state, action) => {
      state.register = action.payload;
    },

    changeStatus: (state, action) => {
      state.status = action.payload;
    },
  },
});

export const { registration, changeStatus } = authSlice.actions;

export default authSlice.reducer;
