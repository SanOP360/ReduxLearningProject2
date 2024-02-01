import { configureStore } from "@reduxjs/toolkit";
import uiSlice from "./UIslice";

const store =configureStore({
    reducer:{
        ui:uiSlice.reducer
    }
})


export default store