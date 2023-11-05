
import apiInstance from "./Helper";
import { toast } from "react-toastify";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState={
 
  items: [{}]
};

export const list=createAsyncThunk("/product/list",
async(data)=>{
    let ar=await apiInstance.post(`/product/list`,data);
    return ar?.data;
});
export const Cre=createAsyncThunk("/product/create",
async(data)=>{
let aa=await apiInstance.post(`/product/create`,data);
return aa?.data
});
export const productRemove = createAsyncThunk(
  "/product/remove",

  async (formdata) => {
    let res = await apiInstance.post(`/product/remove`, formdata);

    let resData = res?.data;

    return resData;
  }
);
export const productUpdate = createAsyncThunk(
  "/product/update",

  async (formdata) => {
    let res = await apiInstance.post(`/product/update`, formdata);

    let resData = res?.data;

    return resData;
  }
);


export const productDetails = createAsyncThunk(
  "product/detail/",

  async (id) => {
    let res = await apiInstance.get(`product/detail/${id}`);

    let resData = res?.data;

    return resData;
  }
);





export const ProductSlice=createSlice({
    name:"Productslice",
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder
         .addCase(list.pending, (state) => {
            state.status = 'loading';
          })
          .addCase(list.fulfilled, (state,{payload}) => {
            state.status = 'idlel';
            state.items = payload.data;
            console.log("hapning")
          })
          .addCase(list.rejected, (state, action) => {
            state.status = 'idle';
            state.error = action.error.message;
          }).addCase(Cre.pending, (state) => {
            state.status = 'loading';
          })
          .addCase(Cre.fulfilled, (state, {payload}) => {
            state.status = 'idlel';
            state.list = payload?.data;
            toast(payload?.message)
          })
          .addCase(Cre.rejected, (state, action) => {
            state.status = 'reject';
            state.error = action.error.message;
          })
          .addCase(productRemove.rejected, (state, action) => {
            state.status = "idle";
          })
    
          .addCase(productRemove.pending, (state, action) => {
            state.status = "loading";
          })
          .addCase(productRemove.fulfilled, (state, { payload }) => {
            state.status = "idle";
            state.total = payload?.data
            toast(payload?.message)
    
    
          })   .addCase(productUpdate.pending, (state, action) => {
            state.status = "loading";
          })
          .addCase(productUpdate.fulfilled, (state, { payload }) => {
            state.status = "idle";
            localStorage.setItem("title",payload?.data?.title)
            toast(payload?.message)
          })
          .addCase(productUpdate.rejected, (state, action) => {
            state.status = "idle";
          }) .addCase(productDetails.pending, (state, action) => {
            state.status = "loading";
          })
          .addCase(productDetails.fulfilled, (state, { payload }) => {
            state.status = "idle";
            state.det = payload?.data
    
    
          })
          .addCase(productDetails.rejected, (state, action) => {
            state.status = "idle";
          });
    
          
          
      },
    });
    
    
    export default ProductSlice;
    