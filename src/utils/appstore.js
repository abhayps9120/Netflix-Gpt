import { configureStore } from "@reduxjs/toolkit";
import  useReducer  from "./userSlice";
import moviesReducer from "./movieSlice"

export const appStore = configureStore(
    {
        reducer : {user:useReducer,
            movies:moviesReducer,
        }
    }
)
