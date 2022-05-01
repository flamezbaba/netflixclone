import styled, { ThemeProvider } from "styled-components";
import { theme } from "../utils/theme";
import { mobile, tablet, laptop } from "../responsive";
import logo from "../assets/logo.png";
import React, { useState } from "react";

import { MdClose, MdMenu } from "react-icons/md";

const Logo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  ${mobile({ justifyContent: "flex-start" })};
  ${tablet({ justifyContent: "flex-start" })};

  img {
    /* width: 50px; */
    /* height: 50px; */
  }
`;

const Header = styled.div`
  padding: 0 5% 0 5%;
  width: 100%;
  background-color: #fff;
  display: flex;
  height: 70px;
  justify-content: space-between;
  align-items: center;
  outline: 1px solid red;
  position: relative;

  .hd2 {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 40px;
    ${mobile({ display: "none" })};
    ${tablet({ display: "none" })};

    a {
      text-decoration: none;
      color: #000;
    }
  }

  .hd3 {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 40px;
    ${mobile({ display: "none" })};
    ${tablet({ display: "none" })};

    span:nth-child(2) {
      background-color: ${(props) => props.theme.primaryColor};
      color: #fff;
      padding: 7px 20px;
      border-radius: 5px;
    }
  }

  .mobile-wrapper {
    ${laptop({ display: "none" })};
    svg {
      cursor: pointer;
    }
  }
`;

const Container = styled.div`
  width: 100%;
  background-color: #fff;
  display: flex;
  height: auto;
  position: relative;

  .mobile-menu {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background-color: #fff;
    display: flex;
    flex-direction: column;
    z-index: 1000;

    a {
      text-decoration: none;
      color: ${(props) => props.theme.gray1};
    }

    .cc {
      display: flex;
      justify-content: flex-end;
      margin-right: 20px;
      margin-top: 20px;
      svg {
        text-align: right;
        color: ${(props) => props.theme.primaryColor};
        cursor: pointer;

        &:hover {
          transform: scale(1.1);
          transition: all 0.5s ease;
        }
      }
    }

    .dd {
      margin-top: 50px;
      height: 50%;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;

      .hd1 {
        display: flex;
        flex-direction: column;
        gap: 50px;
        text-align: center;
      }

      .hd2 {
        display: flex;
        flex-direction: column;
        gap: 20px;
        text-align: center;

        a:nth-child(2) {
          background-color: ${(props) => props.theme.primaryColor};
          color: #fff;
          padding: 7px 20px;
          border-radius: 5px;
        }
      }
    }
  }
`;

const TopNav = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(true);
  };

  const closeMenu = () => {
    setShowMenu(false);
  };

  return (
    <ThemeProvider theme={theme}>
      <Container>
        <Header>
          <Logo>
            <a href="/">
              <img src={logo} alt="" />
            </a>
          </Logo>

          <div className="hd2">
            <span>
              <a href="">Home</a>
            </span>
            <span>About</span>
            <span>Properties</span>
          </div>
          <div className="hd3">
            <span>Login</span>
            <span>Register</span>
          </div>

          <div className="mobile-wrapper">
            <MdMenu size={35} onClick={toggleMenu} />
          </div>
        </Header>
        {showMenu && (
          <div className="mobile-menu">
            <div className="cc">
              <MdClose size={45} onClick={closeMenu} />
              {/* <MdClose size={45} /> */}
            </div>
            <div className="dd">
              <div className="hd1">
                <a href="">Home</a>
                <a href="">About</a>
                <a href="">Property</a>
              </div>
              <div className="hd2">
                <a href="">Login</a>
                <a href="">Register</a>
              </div>
            </div>
          </div>
        )} 
      </Container>
    </ThemeProvider>
  );
};

export default TopNav;
