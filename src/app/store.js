import { configureStore } from "@reduxjs/toolkit";
import moviReducer from "../features/movies/movieSlice"

export const store = configureStore({
    reducer : {
        movie : moviReducer
    }
})