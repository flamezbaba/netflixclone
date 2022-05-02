import styled from "styled-components";
import { devices } from "../../responsive";
// import { theme, hex2rgba } from "../../utils/theme";

export const Wrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  /* position: relative; */
  /* overflow: hidden; */
`;

export const StyledD = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: auto;

  .hero-wrapper {
    width: 100%;
    background-color: ${(props) => props.theme.ntBlack};
    height: 700px;
    display: flex;
    color: #fff;

    @media ${devices.laptop} {
      margin-top: -72px;
    }

    @media ${devices.mobile} {
      height: 300px;
    }

    .hero-image {
      background-image: url(${(props) => props.heroimg});
      background-size: cover;
      display: flex;
      width: 100%;
      height: 100%;
      position: relative;

      .hero-overlay {
        width: 100%;
        height: 100%;
        position: absolute;
        display: flex;
        z-index: 200;
        align-items: center;
        background: linear-gradient(
          to bottom,
          transparent 0%,
          ${(props) => props.theme.ntBlack} 90%
        );

        @media ${devices.mobile} {
          background: linear-gradient(
            to bottom,
            transparent 0%,
            ${(props) => props.theme.ntBlack} 80%
          );
        }

        .title {
          width: 100%;
          height: 100%;
          margin-left: 50px;
          display: flex;
          flex-direction: column;
          justify-content: center;

          @media ${devices.mobile} {
            justify-content: flex-start;
            margin-top: 50px;
          }

          .bt {
            font-size: 4vw;
            text-transform: uppercase;
            font-weight: bold;
            text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.45);

            @media ${devices.mobile} {
              font-size: 20px;
            }
          }

          .ds {
            width: 85vw;
            font-size: 1.2vw;
            margin-top: 0.1vw;
            color: #fff;
            font-weight: 400;
            line-height: normal;
            text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.45);

            @media ${devices.mobile} {
              font-size: 15px;
              line-height: 1.3;
            }
          }

          .btn {
            display: flex;
            gap: 10px;
            margin-top: 1.9vw;

            @media ${devices.mobile} {
              button {
                &:nth-child(2) {
                  display: none;
                }
              }
            }

            button {
              color: #000;
              background-color: #fff;
              padding: 15px 30px;
              font-size: 1vw;
              font-weight: 700;
              border-radius: 3px;
              border: 0;
              display: flex;
              align-items: center;
              gap: 10px;

              svg {
                font-size: 2vw;
              }

              @media ${devices.mobile} {
                padding: 5px 10px;
                font-size: 20px;

                svg {
                  font-size: 30px;
                }
              }
            }
          }
        }
      }
    }
  }
`;

export const ListStart = styled.div`
  display: flex;
  width: 100%;
  height: auto;
  background-color: transparent;
  margin-top: -100px;
  z-index: 500;
  position: relative;
  margin-bottom: 30px;

  .top-list {
    width: 100%;
    display: flex;
    flex-direction: column;

    .title {
      color: #fff;
      font-size: 18px;

      margin-left: 50px;
      margin-bottom: 10px;
    }

    .items {
      width: 100%;
      height: 120px;
      display: flex;
      justify-content: space-between;

      .left-move {
        width: 50px;
        display: flex;
        background-color: rgba(0, 0, 0, 0.5);
        border-top-right-radius: 5px;
        border-bottom-right-radius: 5px;
        justify-content: center;
        align-items: center;
        color: #fff;
        z-index: 500;
        cursor: pointer;
        transition: all 0.5s ease-out;

        &:hover {
          background-color: rgb(0, 0, 0);
        }

        svg {
          font-size: 40px;
        }
      }

      .cols-wrapper {
        width: calc(100% - 120px);
        height: 120px;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        margin-left: 10px;
        margin-right: 10px;
        overflow: hidden;

        .cols {
          display: flex;
          gap: 10px;
          display: flex;
          justify-content: flex-start;
          transition: all 1.1s ease;
          transform: translateX(${(props) => props.tmSliderIndex * -300}px);

          @media ${devices.mobile} {
            transform: translateX(${(props) => props.tmSliderIndex * -200}px);
          }
        }
      }

      .right-move {
        width: 50px;
        display: flex;
        background-color: rgba(0, 0, 0, 0.5);
        border-top-left-radius: 5px;
        border-bottom-left-radius: 5px;
        justify-content: center;
        align-items: center;
        color: #fff;
        z-index: 700;
        cursor: pointer;
        transition: all 0.5s ease-out;

        &:hover {
          background-color: rgb(0, 0, 0);
        }

        svg {
          font-size: 40px;
        }
      }
    }
  }
`;

export const TopListItem = styled.div`
  .item {
    display: flex;
    width: 260px;
    height: 120px;
    background-color: ${(props) => props.theme.ntBlack};
    background-image: url(${(props) => props.bga});
    background-size: cover;
    /* background-image: url("https://occ-0-1168-300.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABarkEcdb4mYWyTF0dLM8mQ1ZWqNZQdI3R0sipsIJbduACAoLb13BC0i2zmt8pg-G_BAx_YQIaH9s6pvr25natJict8w.jpg?r=539"); */
    border-radius: 5px;
    box-sizing: border-box;
    justify-content: center;
    align-items: flex-end;
    padding: 10px 20px;
    position: relative;
    overflow: visible;

    @media ${devices.mobile} {
      width: 200px;
    }

    &:hover {
      /* transform: scale(1.2); */
      .overlay {
        cursor: pointer;
        background: linear-gradient(
          to bottom,
          transparent 0%,
          rgba(0, 0, 0, 0.3) 99%
        );
      }
    }

    .overlay {
      position: absolute;
      width: 100%;
      height: 120px;
      top: 0;
      border-radius: 5px;
      display: flex;
      justify-content: center;
      align-items: flex-end;
      background: linear-gradient(
        to bottom,
        transparent 0%,
        rgba(0, 0, 0, 0.6) 99%
      );

      span {
        font-size: 14px;
        font-weight: bold;
        padding: 10px;
        color: #fff;
        text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.45);
        /* margin-bottom: 10px;  */
      }
    }
  }
`;

export const MovieModal = styled.div`
  position: fixed;
  width: 100%;
  height: 100vh;
  top: 0;
  left: 0;
  right: 0;
  z-index: 900;
  display: flex;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.6);
  overflow: scroll;
  transition: all 0.8s ease-out;

  .modal-bg {
    width: 60vw;
    height: auto;
    border-radius: 10px;
    background-color: #181818;
    overflow: visible;
    margin-top: 10vh;
    margin-bottom: 10vh;

    @media ${devices.mobile} {
      width: 95vw;
    }

    .player-wrapper {
      position: relative;
      width: 100%;
      height: 400px;
      background-color: transparent;
      background-image: url(${(props) => props.modalImg});
      background-size: cover;
      border-top-left-radius: 10px;
      border-top-right-radius: 10px;
      @media ${devices.mobile} {
        height: 250px;
      }

      .player-overlay {
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        width: 100%;
        height: 400px;
        background: linear-gradient(to bottom, transparent 0%, #181818 99%);
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        border-top-left-radius: 10px;
        border-top-right-radius: 10px;

        @media ${devices.mobile} {
          height: 250px;
        }

        .title {
          padding-left: 50px;

          > p {
            font-size: 60px;
            color: #fff;
            @media ${devices.mobile} {
              font-size: 40px;
              margin-top: -150px;
            }
          }

          button {
            margin-top: 5px;
            padding: 5px 20px;
            border-radius: 5px;
            background-color: #fff;
            display: flex;
            gap: 10px;
            font-size: 25px;
            align-items: center;
            border: 0px;
            cursor: pointer;

            @media ${devices.mobile} {
              font-size: 20px;
              margin-top: 20px;
            }
          }
        }

        .modal-close {
          display: flex;
          width: 100%;
          justify-content: flex-end;

          > div {
            margin-top: 10px;
            margin-right: 20px;
            background-color: #181818;
            border-radius: 50%;
            color: #fff;
            width: 36px;
            height: 36px;
            display: flex;
            justify-content: center;
            align-items: center;
            font-size: 25px;
            cursor: pointer;
            transition: all 0.7s ease-out;

            &:hover {
              transform: rotate(180deg);
            }
          }
        }
      }
    }

    .details-wrapper {
      position: relative;
      display: flex;
      padding-bottom: 100px;
      padding-top: 10px;
      padding-left: 50px;
      padding-right: 50px;
      color: #fff;
      /* gap: 40px; */
      grid-gap: 40px;
      background-color: #181818;
      font-size: 16px;
      line-height: 26px;
      height: auto;
      border-bottom-left-radius: 10px;
      border-bottom-right-radius: 10px;

      @supports not (gap: 1em) {
        /* .flex-container { */
        margin: -0.5em;
        /* } */
        > * {
          margin: 0.5em;
        }
      }

      @media ${devices.mobile} {
        flex-direction: column;
      }

      .details {
        width: 65%;
        @media ${devices.mobile} {
          width: 90%;
        }
      }

      .cast {
        width: 35%;
        @media ${devices.mobile} {
          width: 90%;
        }
      }
    }
  }
`;

export const LoadingWrapper = styled.div`
  position: fixed;
  width: 100%;
  height: 100vh;
  top: 0;
  left: 0;
  right: 0;
  z-index: 900;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 1);
  overflow: scroll;
  transition: all 0.8s ease-out;

  > div {
    font-size: 3vw;
    color: #eee;
  }
`;

export const MovieList = styled.div`
  display: flex;
  flex-direction:column ;
  width: calc(100% - 100px);
  height: auto;
  background-color: transparent;
  margin-top: 30px;
  position: relative;
  margin-bottom: 50px;
  padding-left: 50px;
  padding-right: 50px;

  h3{
    color: #fff;
    margin-bottom: 10px;
  }
  .movie-wrapper {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    gap: 25px;

    .movie {
      width: 48%;
      height: 150px;
      border-radius: 6px;
      display: flex;
      flex-direction: row;
      overflow: hidden;

      @media ${devices.mobile} {
        width: 100%;
        flex-direction: column;
        height: auto;
      }

      .movie-avatar {
        width: 100%;
        height: 150px;
        background-color: #eee;

        img {
          width: 100%;
          height: 100%;
        }
      }

      .movie-details {
        width: calc(100% - 40px);
        height: 150px;
        background-color: #181818;
        color: #fff;
        padding: 10px;

        @media ${devices.mobile} {
           width: 100%;
          }

        .title {
          font-weight: bold;
          font-size: 20px;
          margin-bottom: 10px;

          small {
            font-size: 12px;
          }
        }

        .desc {
          line-height: 1.5;
          margin-bottom: 10px;
          font-size: 14px;
          overflow: hidden;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-line-clamp: 4;
          -webkit-box-orient: vertical;

          @media ${devices.mobile} {
            margin-bottom: 2px;
          }
        }
      }
    }
  }
`;
