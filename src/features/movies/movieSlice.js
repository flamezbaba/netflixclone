import { createSlice } from "@reduxjs/toolkit";
import { fetchAsyncMovies, fetchAsyncShows } from "./movieThunk";

const initialState = {
  movies: {},
  shows: {},
  loading: true,
  apiError: false,
  apiErrorMessage: "Loading...",
};

export const movieSlice = createSlice({
  name: "movie",
  initialState,
  reducers: {},
  extraReducers: {
    [fetchAsyncMovies.pending]: () => {
      console.log("MoviePending");
    },
    [fetchAsyncMovies.fulfilled]: (state, { payload }) => {
      console.log("MovieFetched Successfully!");
      return { ...state, movies: payload, loading: false };
    },
    [fetchAsyncMovies.rejected]: (state) => {
      console.log("MovieRejected!");
      return {
        ...state,
        loading: false,
        apiError: true,
        apiErrorMessage: "Connection Failed, Refresh Page",
      };
    },
    [fetchAsyncShows.pending]: () => {
      console.log("ShowsPending");
    },
    [fetchAsyncShows.fulfilled]: (state, { payload }) => {
      console.log("ShowFetch");

      return { ...state, shows: payload, loading: false };
    },
    [fetchAsyncShows.rejected]: (state) => {
      console.log("ShowsRejected!");
      return {
        ...state,
        loading: false,
        apiError: true,
        apiErrorMessage: "Connection Failed, Refresh Page",
      };
    },
  },
});

export const getAllMovies = (state) => state.movies.movies;
export const getAllShows = (state) => state.movies.shows;
export default movieSlice.reducer;
