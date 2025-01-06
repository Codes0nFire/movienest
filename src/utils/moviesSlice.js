import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    nowPlayingMovies: null,
    popularMovies: null,
    topRatedMovies: null,
    upcomingMovies: null,
    trailerKey: null,
  },
  reducers: {
    addNowPlayingMovies: (state, action) => {
      state.nowPlayingMovies = action.payload;
    },
    addpopularMovies: (state, action) => {
      state.popularMovies = action.payload;
    },

    addtopRatedMovies: (state, action) => {
      state.topRatedMovies = action.payload;
    },

    addupcomingMovies: (state, action) => {
      state.upcomingMovies = action.payload;
    },
    addtrailerKey: (state, action) => {
      state.trailerKey = action.payload;
    },
  },
});

export const {
  addNowPlayingMovies,
  addtrailerKey,
  addpopularMovies,
  addtopRatedMovies,
  addupcomingMovies,
} = moviesSlice.actions;
export default moviesSlice.reducer;
