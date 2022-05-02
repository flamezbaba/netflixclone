import { createAsyncThunk } from "@reduxjs/toolkit";
import movieApi from "../../apis/movieApi";

export const fetchAsyncMovies = createAsyncThunk(
  "movies/fetchAsyncMovies",
  async () => {
    const response = await movieApi.get(
      `/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`
    );

    return response.data;
  }
);

export const fetchAsyncShows = createAsyncThunk(
  "movies/fetchAsyncShows",
  async () => {
    const response = await movieApi.get(
      `/discover/tv?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`
    );

    return response.data;
  }
);
