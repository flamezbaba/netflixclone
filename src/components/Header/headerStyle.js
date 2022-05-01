import styled from "styled-components";
import { devices, hex2rgba } from "../../responsive";
import { theme } from "../../utils/theme";

export const StyledH = styled.div`
  background: transparent;
  display: flex;
  flex-direction: column;
  width: 100%;

  @media ${devices.mobile} {
    display: none;
  }

  header {
    display: flex;
    width: calc(100% - 60px);
    padding: 10px 30px;
    z-index: 800;
    background: linear-gradient(to top, transparent 0%, rgba(0, 0, 0, 0.7) 99%);

    justify-content: space-between;
    @media ${devices.mobile} {
      padding: 10px 0px 10px 10px;
      margin-bottom: 100px;
    }

    .left-nav {
      display: flex;
      gap: 20px;

      .logo-wrapper {
        img {
          width: 100px;
          @media ${devices.mobile} {
            width: 70px;
          }
        }
      }

      nav {
        ul {
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          gap: 30px;
          list-style: none;
        }

        li {
          a {
            color: #e5e5e5;
            font-weight: 500;

            &:hover {
              color: #fff;
            }
          }

          &:first-child {
            a {
              color: #fff;
            }
          }
        }
      }
    }

    .right-nav {
      display: flex;
      align-items: center;
      color: #fff;
      gap: 20px;

      .search-wrapper {
        display: flex;

        .search-input {
          display: flex;
          align-items: center;
          border: 1px solid #fff;
          padding-right: 5px;
          padding-left: 3px;
          padding-top: 2px;
          padding-bottom: 2px;

          input {
            background-color: transparent;
            outline: 0;
            border: 0;
            color: #fff;
          }
        }
      }

      .notification-wrapper {
        position: relative;
        cursor: pointer;
        /* outline: 2px solid red; */

        .nw-dropdown {
          position: absolute;
          top: calc(100% + 10px);
          right: -20px;
          width: 400px;
          height: 300px;
          z-index: 1000;

          .nw {
            height: 100%;
            overflow-y: scroll;
            overflow-x: visible;
            background-color: ${hex2rgba(theme.ntBlack, 0.8)};

            border-top: 2px solid #fff;
            border-left: 1px solid grey;
            border-right: 1px solid grey;
            border-bottom: 1px solid grey;
            box-shadow: 3px 2px 1px rgba(0, 0, 0, 0.5);

            &:before {
              content: " ";
              width: 0px;
              height: 0px;
              position: absolute;
              top: -11px;
              right: 20px;
              bottom: 0;
              z-index: 1000;
              border-left: 10px solid transparent;
              border-right: 10px solid transparent;
              border-bottom: 10px solid #fff;
              border-top: 1px solid transparent;
            }

            .dd-item {
              display: flex;
              padding: 10px 20px;
              border-bottom: 1px solid grey;
              gap: 20px;

              &:hover {
                background-color: #000;
                cursor: pointer;
              }

              .avatar {
                img {
                  width: 100px;
                  height: 50px;
                }
              }

              .text {
                display: flex;
                flex-direction: column;
                justify-content: space-between;
                gap: 10px;

                > div {
                  font-size: 0.9rem;
                }

                > span {
                  font-size: 0.8rem;
                  color: grey;
                }
              }
            }
          }
        }
      }

      .user-dropdown-wrapper {
        img {
          width: 30px;
        }
      }
    }
  }
`;

export const MobileHeader = styled.div`
  display: flex;
  width: 100%;
  z-index: 5000;
  background-color: #000;
  @media ${devices.laptop} {
    display: none;
  }

  .mobile-wrapper {
    display: flex;
    width: 100%;
    height: 40px;
    padding: 5px 10px;
    justify-content: space-between;

    .md-dropdown {
      position: absolute;
      top: 48px;
      left: 0;
      min-height: 100vh;
      width: 60vw;
      background-color: #000;
      display: flex;
      z-index: 5000;

      > div {
        list-style: none;
        color: #999;
        display: inline-block;
        width: 100%;

        li {
          margin-bottom: 20px;
          padding-left: 20px;
          /* border-left: 3px solid #b9090b; */
          padding-top: 2px;
          padding-bottom: 2px;
          font-weight: 700;

          &:hover {
            border-left: 3px solid #b9090b;

            a {
              color: #fff;
            }
          }

          a {
            color: #999;
          }
        }
      }
    }

    .logo-wrapper {
      display: flex;
      align-items: center;
      color: #fff;
      font-size: 26px;
      cursor: pointer;

      img {
        width: 90px;
      }
    }

    .search-wrapper {
      display: flex;
      align-items: center;

      .search-input {
        display: flex;
        align-items: center;
        border: 1px solid #ccc;
        padding-right: 3px;
        padding-left: 3px;
        padding-top: 0px;
        padding-bottom: 0px;
        color: #fff;
        height: 30px;
        justify-content: space-between;

        input {
          background-color: transparent;
          outline: 0;
          border: 0;
          color: #fff;
          font-size: 13px;
          width: 140px;
          letter-spacing: 1px;
        }
      }
    }
  }
`;
