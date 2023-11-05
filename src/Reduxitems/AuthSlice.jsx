


import apiInstance from "./Helper";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState={};

export const registerr=createAsyncThunk("user/signup",
async(data)=>{
    let ar=await apiInstance.post(`user/signup`,data);
    let ar2=ar?.data;
    return ar2
});
export const loginn=createAsyncThunk("user/signin",
async(data)=>{
    let ar=await apiInstance.post(`user/signin`,data);
    let ar2=ar?.data;
    return ar2
});

export const AuthSlice = createSlice({
    name: "AuthSlice",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
      builder
        .addCase(registerr.pending, (state, action) => {
          state.status = "loading";
        })
        .addCase(registerr.fulfilled, (state, { payload }) => {
          state.status = "idle";
          alert("register sucessfull")
        })
        .addCase(registerr.rejected, (state, action) => {
          state.status = "idle";
        }).addCase(loginn.pending, (state, action) => {
          state.status = "loading";
        })
        .addCase(loginn.fulfilled, (state, { payload }) => {
          state.status = "idlel";
          if(payload.token){
         localStorage.setItem("token", payload.token)
         alert("login sucessfull")
          };
          })
        .addCase(loginn.rejected, (state, action) => {
          state.status = "idle";
        });
    },
  });
  
  
  export default AuthSlice;
  
  