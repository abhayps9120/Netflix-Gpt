import { createSlice } from '@reduxjs/toolkit'

const movieSlice = createSlice ({
    name :"Movies",
    initialState:{
        nowPlayingMovies: null,
        trailerVideo: null,
    },
    reducers: {
        addMovie:(state , action)=>
        {

            state.nowPlayingMovies= action.payload;
        },
        addTrailer:(state , action)=>
        {
    
            state.trailerVideo= action.payload;
        },
        addPopular:(state , action) =>
        {
        
            state.populuarVideo= action.payload;
        },
        addTopRated:(state , action) => 
        {

            state.topRated= action.payload;
        },
        addUpcoming:(state , action) => 
        {   
            state.upcoming= action.payload;

        }
    }
  })

export const {addMovie , addTrailer , addPopular , addTopRated , addUpcoming} = movieSlice.actions;
export default movieSlice.reducer;
