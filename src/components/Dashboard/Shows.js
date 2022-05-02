import React from "react";
import { useSelector } from "react-redux";

import { ThemeProvider } from "styled-components";

import { theme } from "../../utils/theme";
import { MovieList } from "./dashboardStyle.js";

import { getAllShows } from "../../features/movies/movieSlice";

const Shows = (props) => {
  const shows = useSelector(getAllShows);
  const { onModalClick } = props;


  const handleModal = (e) => {
    onModalClick(e);
  };

  return (
    <ThemeProvider theme={theme}>
      <MovieList>
        <h3>TV Shows</h3>
        {shows.results && (
          <div className="movie-wrapper">
            {shows.results.map(
              (item, index) =>
                index < 6 && (
                  <div className="movie" key={index} onClick={() => handleModal(item)}>
                    <div className="movie-avatar">
                      <img
                        src={
                          "https://image.tmdb.org/t/p/original" +
                          item.backdrop_path
                        }
                        alt=""
                      />
                    </div>
                    <div className="movie-details">
                      <div className="title">
                        {item.original_name}{" "}
                        <small>({item.vote_average})</small>
                      </div>
                      <div className="desc">{item.overview}</div>
                    </div>
                  </div>
                )
            )}
          </div>
        )}
      </MovieList>
    </ThemeProvider>
  );
};

export default Shows;
