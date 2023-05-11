import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  registerData: {},
};

export const registerSlice = createSlice({
  name: "register",
  initialState,
  reducers: {
    setRegisterData: (state, action) => {
      state.registerData = {
        ...state.registerData,
        ...action.payload,
      };
    },
  },
});

export const { setRegisterData } = registerSlice.actions;

export default registerSlice.reducer;
