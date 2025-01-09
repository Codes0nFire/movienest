import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice"
import moviesReducer from "./moviesSlice"
import searchReducer from "./searchSlice"
import themeReducer from "./themeSlice"
const appStore=configureStore({
    reducer:{
        user:userReducer,
        movies:moviesReducer,
        search:searchReducer,
        theme:themeReducer
    }
})


export default appStore;