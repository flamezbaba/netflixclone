import React, { Fragment, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAsyncMovies } from "../../features/movies/movieThunk";
import { getAllMovies } from "../../features/movies/movieSlice";
import { ThemeProvider } from "styled-components";

import Header from "../Header/Header";
import TopList from "./TopList";

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

const data = {
  herobg:
    "https://occ-0-1168-300.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABYlOFbyCzTYd5A-DlKrcPhnl2zkwcUsNjNjLRVxA9mrakPFOkCEn6qIO3Z2hocHVHRL3ybnAJtQqumye9cz9MuVm3RJ-.jpg?r=10a",
};

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
    return () => {
      dispatch(fetchAsyncMovies());
    };
  }, [dispatch]);

  const movies = useSelector(getAllMovies);

  const handleTmClick = (direction) => {
    const tt = (movies.Search.length - 1) / 2;
    if (direction === "left") {
      setTmSlideIndex(tmSlideIndex > 0 ? tmSlideIndex - 1 : tt);
    } else {
      setTmSlideIndex(tmSlideIndex < tt ? tmSlideIndex + 1 : 0);
    }
  };

  const handleMovieModal = (e) =>{
    console.log("modal dashboard",e);
    if(showModal){
      setModalData({});
      setShowModal(false);
    }
    else{
      setModalData(e);
      setShowModal(true);
    }
    
  }
  return (
    <ThemeProvider theme={theme}>
      <Wrapper>
        {theLoader && (
          <LoadingWrapper>
            <div>
              <p>Loading...</p>
            </div>
          </LoadingWrapper>
        )}
        {showModal && (
          <MovieModal modalImg={modalData.Poster}>
            <div className="modal-bg">
              <div className="player-wrapper">
                <div className="player-overlay">
                  <div className="modal-close">
                    <div onClick={() => setShowModal(false)}>
                      <MdOutlineClose />
                    </div>
                  </div>
                  <div className="title">
                    <p>{modalData.Title}</p>
                    <button>
                      <MdOutlinePlayCircleOutline />
                      <span>Play</span>
                    </button>
                  </div>
                </div>
              </div>
              <div className="details-wrapper">
                <div className="details">
                  <p>
                    {modalData.Year}
                  </p>
                </div>
                <div className="cast">
                  {/* <p>Cast</p> */}
                </div>
              </div>
            </div>
          </MovieModal>
        )}
        {apiError ? (
          <LoadingWrapper>
            <div>
              <p>{apiErrorMessage}</p>
            </div>
          </LoadingWrapper>
        ) : (
          <Fragment>
            <Header></Header>
            <StyledD heroimg={data.herobg}>
              <div className="hero-wrapper">
                <div className="hero-image">
                  <div className="hero-overlay">
                    <div className="title">
                      <p className="bt">The Walking Dead</p>
                      <p className="ds">
                        In the wake of a zombie apocalypse, survivors hold on to
                        the hope of humanity by banding together to wage a fight
                        for their own survival.
                      </p>
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
            <ListStart tmSliderIndex={tmSlideIndex}>
              <div className="top-list">
                <div className="title">
                  Top Movies
                </div>
                <div className="items">
                  <div
                    className="left-move"
                    onClick={() => handleTmClick("left")}
                  >
                    <MdArrowBackIosNew />
                  </div>
                  <div className="cols-wrapper">
                    <div className="cols">
                      <TopList data={movies.Search} onModalClick={handleMovieModal}></TopList>
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
              <div className="movie-wrapper">
                {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((item) => (
                  <div className="movie" key={item}>
                    <div className="movie-avatar">
                      <img
                        src="https://occ-0-1168-300.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABarkEcdb4mYWyTF0dLM8mQ1ZWqNZQdI3R0sipsIJbduACAoLb13BC0i2zmt8pg-G_BAx_YQIaH9s6pvr25natJict8w.jpg?r=539"
                        alt="m"
                      />
                    </div>
                    <div className="movie-details">
                      <div className="title">Movie Title</div>
                      <div className="desc">
                        <p>
                          In disguise as her friend, Ha-ri shows up to a blind
                          date to scare him away. But plans go awry when he
                          turns out to be her CEO — and makes a proposal.
                        </p>
                      </div>
                      <div className="year">
                        <p>2022</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </MovieList>
          </Fragment>
        )}
      </Wrapper>
    </ThemeProvider>
  );
};

export default Dashboard;
