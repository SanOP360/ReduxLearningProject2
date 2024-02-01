import { createSlice } from "@reduxjs/toolkit";

createSlice({
    name:'cart',
    initialState:{
        item:[],
        totalQuantity:0,
        totalPrice:0
    },reducers:{
        addItemHandler(state,action){

        }
        removeItemFromCart(){
            
        }
    }
})