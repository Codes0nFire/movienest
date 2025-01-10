import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    nowPlayingMovies: null,
    popularMovies: null,
    topRatedMovies: null,
    upcomingMovies: null,
    trailerKey: null,
    movieDetail:null,
    movieImages:null
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
    addmovieDetail: (state, action) => {
      state.movieDetail = action.payload;
    },
    removemovieDetail: (state, action) => {
      state.movieDetail = null;
    },
    addmovieImages: (state, action) => {
      state.movieImages = action.payload;
    },
  },
});

export const {
  addNowPlayingMovies,
  addtrailerKey,
  addpopularMovies,
  addtopRatedMovies,
  addupcomingMovies,
  addmovieDetail,
  removemovieDetail,
  addmovieImages
} = moviesSlice.actions;
export default moviesSlice.reducer;
