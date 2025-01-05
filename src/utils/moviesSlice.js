import { createSlice } from "@reduxjs/toolkit";

const moviesSlice=createSlice({
    name:"movies",
    initialState:{
        nowPlayingMovies:null,
        trailerKey:null

    },
    reducers:{

        addNowPlayingMovies:(state,action)=>{
                state.nowPlayingMovies=action.payload;
        },
        addtrailerKey:(state,action)=>{
            state.trailerKey=action.payload;
    },

        
    }

})


export const {addNowPlayingMovies,addtrailerKey}=moviesSlice.actions;
export default moviesSlice.reducer;