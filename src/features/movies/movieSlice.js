import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import movieAPI from '../../common/APIs/movieAPI'
import movieAPIKey from '../../common/APIs/MovieAPIKey'



const fetchMovies = async (keyword) => {
    // const movieText = 'Captain'
    const response = await movieAPI.get(`?apiKey=${movieAPIKey}&s=${keyword}&type=movie`)
    return response.data
  }

const fetchShows = async (keyword) => {
    // const showText = 'Love'
    const response = await movieAPI.get(`?apiKey=${movieAPIKey}&s=${keyword}&type=series`)
    return response.data
  }

  const fetchMoviesOrShowsDetails = async (id) => {
    // const movieText = 'Captain'
    const response = await movieAPI.get(`?apiKey=${movieAPIKey}&i=${id}&Plot=full`)
    return response.data
  }

export const fetchAsyncMovies = createAsyncThunk('movies/fetchAsyncMovies', fetchMovies)

export const fetchAsyncSeries = createAsyncThunk('movies/fetchAsyncSeries', fetchShows)

export const fetchAsyncMoviesOrShowsDetails = createAsyncThunk('movies/fetchAsyncMoviesOrShowsDetails', fetchMoviesOrShowsDetails)

const initialState = {
    movies: [],
    shows: [],
    selectedMovieOrShow: []
}

const movieSlice = createSlice({
    name: 'movies',
    initialState,
    reducers:{
        removeSelectedMovieOrShow: (state) => {
            state.selectedMovieOrShow = []
        }
    },
    extraReducers: {
        [fetchAsyncMovies.fulfilled] : (state, {payload}) => {
            console.log('Movies Fetched Successfully')
            return {...state, movies: payload}
        },
        [fetchAsyncMovies.rejected] : () => {
            console.log('Rejected Request')
        },
        [fetchAsyncSeries.fulfilled] : (state, {payload}) => {
            console.log('Shows Fetched Successfully')
            return {...state, shows: payload}
        },
        [fetchAsyncMoviesOrShowsDetails.fulfilled] : (state, {payload}) => {
            console.log('Detail Fetched Successfully')
            return {...state, selectedMovieOrShow: payload}
        },
    }
})


export const {removeSelectedMovieOrShow} = movieSlice.actions
export const getAllMovies = (state) => state.movies  
export const getAllShows = (state) => state.shows  
export const getSelectedMovieOrShow = (state) => state.selectedMovieOrShow  
export default movieSlice.reducer  