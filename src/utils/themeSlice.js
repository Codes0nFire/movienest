import { createSlice } from "@reduxjs/toolkit";

const themeSlice=createSlice({
    name:"theme",
    initialState:{
        darkmode:true
    },
    reducers:{
        switchdarkmode:(state)=>{
            state.darkmode=!state.darkmode
        }
    }

})


export const {switchdarkmode}=themeSlice.actions
export default themeSlice.reducer;