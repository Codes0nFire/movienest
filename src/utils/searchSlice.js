import { createSlice } from "@reduxjs/toolkit";

const searchSlice=createSlice({
    name:"search",
    initialState:{
      isSearchPage:false
    },
    reducers:{
        toggleSearch:(state)=>{
            state.isSearchPage=!state.isSearchPage
        }
    }
})


export const {toggleSearch}=searchSlice.actions
export default searchSlice.reducer;