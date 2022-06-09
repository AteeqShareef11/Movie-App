import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import MovieApi from "../../common/apis/MovieApi"
import {APIkey} from "../../common/apis/MovieApiKey"

export const featcMoviesApi = createAsyncThunk("movies/featcMoviesApi", async (inputTerm)=>{
  
        
    const response = await MovieApi.get(`?apikey=${APIkey}&s=${inputTerm}&type=movie`
    )
    return  response.data

})

export const featcShowsApi = createAsyncThunk("movies/featcShowsApi", async (inputTerm)=>{
   
        
    const response = await MovieApi.get(`?apikey=${APIkey}&s=${inputTerm}&type=series`
    )
    return  response.data

})

export const featcMoviesDetailApi = createAsyncThunk("movies/featcMoviesDetailApi", async (id)=>{
        
    const response = await MovieApi.get(`?apikey=${APIkey}&i=${id}&Plot=full`);
    return  response.data
   

});


const initialState = {
    movies:{},
    shows:{},
    selectedMovie:{}
}


const movieSlice = createSlice({
    name:"movies",
    initialState,
    reducers:{
        // addMovies: (state,{payload}) => {
        //     state.movies = payload;
        // },
        removeSelectedMovie : (state) =>{
           state.selectedMovie = {};
        },
    },
    extraReducers:{
        [featcMoviesApi.pending] : ()=>{
            console.log("pending")
        },
        [featcMoviesApi.fulfilled] : (state, {payload})=>{
            console.log("fullfild")
            return {...state,movies:payload};
        },
        [featcMoviesApi.rejected] : ()=>{
            console.log("rejected")
        },
        [featcShowsApi.fulfilled] : (state, {payload})=>{
            console.log("fullfild")
            return {...state,shows:payload};
        },
        [featcMoviesDetailApi.fulfilled] : (state, {payload})=>{
            console.log("fullfild DETAIL")
            return {...state,selectedMovie:payload};
        },
    }
    
});

export const {removeSelectedMovie} = movieSlice.actions;
export const getAllMovies = (state) => state.movies.movies
export const getAllShows = (state) => state.movies.shows
export const getSelectedMovie = (state) => state.movies.selectedMovie


export default movieSlice.reducer;