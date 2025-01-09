import { createSlice } from "@reduxjs/toolkit";

const searchSlice=createSlice({
    name:"search",
    initialState:{
      isSearchPage:false,
      searchMovies:null
    },
    reducers:{
        toggleSearch:(state)=>{
            state.isSearchPage=!state.isSearchPage
        },

        addSearchMovies:(state,action)=>{
            state.searchMovies=action.payload
        }
    }
})


export const {toggleSearch,addSearchMovies}=searchSlice.actions
export default searchSlice.reducer;