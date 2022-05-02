import React, { Fragment, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchAsyncMovies,
  fetchAsyncShows,
} from "../../features/movies/movieThunk";
import { getAllMovies } from "../../features/movies/movieSlice";
import { ThemeProvider } from "styled-components";

import Header from "../Header/Header";
import TopList from "./TopList";
import Shows from "./Shows";

import { theme } from "../../utils/theme";
import {
  StyledD,
  ListStart,
  MovieModal,
  Wrapper,
  MovieList,
  LoadingWrapper,
} from "./dashboardStyle.js";

import {
  MdArrowBackIosNew,
  MdArrowForwardIos,
  MdOutlinePlayCircleOutline,
  MdOutlineClose,
} from "react-icons/md";

const Dashboard = () => {
  const dispatch = useDispatch();

  const [tmSlideIndex, setTmSlideIndex] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [modalData, setModalData] = useState({});

  const theLoader = useSelector((state) => state.movies.loading);
  const apiError = useSelector((state) => state.movies.apiError);
  const apiErrorMessage = useSelector((state) => state.movies.apiErrorMessage);

  useEffect(() => {
    dispatch(fetchAsyncMovies());
    dispatch(fetchAsyncShows());
  }, [dispatch]);

  const movies = useSelector(getAllMovies);


  const handleTmClick = (direction) => {
    const tt = (movies.results.length - 1) / 2;
    if (direction === "left") {
      setTmSlideIndex(tmSlideIndex > 0 ? tmSlideIndex - 1 : tt);
    } else {
      setTmSlideIndex(tmSlideIndex < tt ? tmSlideIndex + 1 : 0);
    }
  };

  const handleMovieModal = (e) => {
    if (showModal) {
      setModalData({});
      setShowModal(false);
    } else {
      setModalData(e);
      setShowModal(true);
    }
  };
  return (
    <ThemeProvider theme={theme}>
      <Wrapper>
        {showModal && (
          <MovieModal
            modalImg={
              "https://image.tmdb.org/t/p/original" + modalData.backdrop_path
            }
          >
            <div className="modal-bg">
              <div className="player-wrapper">
                <div className="player-overlay">
                  <div className="modal-close">
                    <div onClick={() => setShowModal(false)}>
                      <MdOutlineClose />
                    </div>
                  </div>
                  <div className="title">
                    <p>{modalData.original_title || modalData.original_name  }</p>
                    <button>
                      <MdOutlinePlayCircleOutline />
                      <span>Play</span>
                    </button>
                  </div>
                </div>
              </div>
              <div className="details-wrapper">
                <div className="details">
                  <p>{modalData.overview}</p>
                </div>
                <div className="cast">{/* <p>Cast</p> */}</div>
              </div>
            </div>
          </MovieModal>
        )}
        {apiError || theLoader ? (
          <LoadingWrapper>
            <div>
              <p>{apiErrorMessage}</p>
            </div>
          </LoadingWrapper>
        ) : (
          <Fragment>
            <Header></Header>
            {movies.results && (
              <StyledD
                heroimg={
                  "https://image.tmdb.org/t/p/original" +
                  movies.results[0].backdrop_path
                }
              >
                <div className="hero-wrapper">
                  <div className="hero-image">
                    <div className="hero-overlay">
                      <div className="title">
                        <p className="bt">{movies.results[0].original_title}</p>
                        <p className="ds">{movies.results[0].overview}</p>
                        <div className="btn">
                          <button>
                            <MdOutlinePlayCircleOutline /> Play
                          </button>
                          <button>More Info</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </StyledD>
            )}
            <ListStart tmSliderIndex={tmSlideIndex}>
              <div className="top-list">
                <div className="title">Top Movies</div>
                <div className="items">
                  <div
                    className="left-move"
                    onClick={() => handleTmClick("left")}
                  >
                    <MdArrowBackIosNew />
                  </div>
                  <div className="cols-wrapper">
                    <div className="cols">
                      <TopList
                        data={movies.results}
                        onModalClick={handleMovieModal}
                      ></TopList>
                    </div>
                  </div>
                  <div
                    className="right-move"
                    onClick={() => handleTmClick("right")}
                  >
                    <MdArrowForwardIos />
                  </div>
                </div>
              </div>
            </ListStart>

            <MovieList>
              <h3>Trending Now</h3>
              {movies && (
                <div className="movie-wrapper">
                  {movies.results.map(
                    (item, index) =>
                      (index > 3 && index < 8) && (
                        <div
                          className="movie"
                          key={index}
                          onClick={() => handleMovieModal(item)}
                        >
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
                              {item.original_title}{" "}
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

            <Shows  onModalClick={handleMovieModal}></Shows>
          </Fragment>
        )}
      </Wrapper>
    </ThemeProvider>
  );
};

export default Dashboard;
