import { createAsyncThunk } from "@reduxjs/toolkit";
import movieApi from "../../apis/movieApi";

export const fetchAsyncMovies = createAsyncThunk(
  "movies/fetchAsyncMovies",
  async () => {
    const movieText = "avengers";
    const response = await movieApi.get(
      `?apiKey=${process.env.REACT_APP_API_KEY}&s=${movieText}&type=movie`
    );

    return response.data;
  }
);
