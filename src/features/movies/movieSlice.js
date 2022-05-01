import { createSlice } from "@reduxjs/toolkit";
import { fetchAsyncMovies } from "./movieThunk";

const initialState = {
  movies: {},
  loading: true,
  apiError: false,
  apiErrorMessage: ""
};

export const movieSlice = createSlice({
  name: "movie",
  initialState,
  reducers: {},
  extraReducers: {
    [fetchAsyncMovies.pending]: () => {
      console.log("Pending");
    },
    [fetchAsyncMovies.fulfilled]: (state, { payload }) => {
      console.log("Fetched Successfully!");
      return { ...state, movies: payload, loading: false };
    },
    [fetchAsyncMovies.rejected]: (state) => {
      console.log("Rejected!");
      return { ...state, loading: false, apiError: true, apiErrorMessage: "Connection Failed, Refresh Page" };
    },
  },
});

export const getAllMovies = (state) => state.movies.movies;
export default movieSlice.reducer;
