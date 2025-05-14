import { createSlice } from "@reduxjs/toolkit";

const signupSlice = createSlice({
  name: "signup",
  initialState: {
    gid: "",
    email: "",
    password: "",
  },
  reducers: {
    setSignupData: (state, action) => {
      
      state.gid = action.payload.gid;
      state.email = action.payload.email;
      state.password = action.payload.password;
    },
  },
});

const loginSlice = createSlice({
  name: "login",
  initialState: {
    email: "",
    password: "",
  },
  reducers: {
    setLoginData: (state, action) => {
      state.email = action.payload.email;
      state.password = action.payload.password;
    },
  },
}); 
export const { setSignupData } = signupSlice.actions
export const { setLoginData } = loginSlice.actions

export const selectSignupData = (state) => state.signup;
export const selectLoginData = (state) => state.login;

export const signupReducer = signupSlice.reducer;
export const loginReducer = loginSlice.reducer;

export default signupSlice.reducer;
export const loginSliceReducer = loginSlice.reducer;
