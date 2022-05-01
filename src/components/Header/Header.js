import React, { useState } from "react";
import { ThemeProvider } from "styled-components";

import { theme } from "../../utils/theme";
import { StyledH, MobileHeader } from "./headerStyle.js";
import redlogo from "../../assets/redlogo.png";
import { Link } from "react-router-dom";
import { MdSearch, MdNotifications, MdClose, MdMenu } from "react-icons/md";

const Header = () => {
  const [showNtDropDown, setShowNtDropDown] = useState(false);
  const [mobileDropDown, setMobileDropDown] = useState(false);

  const ntDrop = [1, 3, 4, 31, 33, 35].map((item) => (
    <div className="dd-item" key={item}>
      <div className="avatar">
        <img
          src="https://dnm.nflximg.net/api/v6/kvDymu0eXRyicIuSUzvRrxrm5dU/AAAABYivw7_3s90ssYBeDG9YqPLiNv0UszrJr9SD0EAh3nsNRsLjNe2AD-kc9rjt1m719KB3oJ8DGDVeidhaRcMs9_74ATD4TZbf7NDQ75TQqMIOoVbQF6qW0wN5fhbiIQGl6c76Xek.jpg?r=9f2"
          alt="avatar"
        />
      </div>
      <div className="text">
        <div>
          365 Days Movie of live Hello guys and good evening, to those who took
          up the course today, welcome.
        </div>
        <span>1 Day Ago </span>
      </div>
    </div>
  ));

  return (
    <ThemeProvider theme={theme}>
      <StyledH>
        <header>
          <div className="left-nav">
            <div className="logo-wrapper">
              <img src={redlogo} alt="logo" />
            </div>
            <nav>
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>

                <li>
                  <Link to="/">TV Shows</Link>
                </li>

                <li>
                  <Link to="/">Movies</Link>
                </li>
                <li>
                  <Link to="/">New & Popular</Link>
                </li>
              </ul>
            </nav>
          </div>
          <div className="right-nav">
            <div className="search-wrapper">
              <div className="search-input">
                <MdSearch size={25} />
                <input type="text" placeholder="search movies, shows" />
                <MdClose size={25} />
              </div>
            </div>
            <div
              className="notification-wrapper"
              onMouseLeave={(e) => setShowNtDropDown(false)}
            >
              <MdNotifications
                size={25}
                onMouseEnter={(e) => setShowNtDropDown(true)}
              />
              {showNtDropDown && (
                <div className="nw-dropdown">
                  <div className="nw">{ntDrop}</div>
                </div>
              )}
            </div>
            <div className="user-dropdown-wrapper">
              <img
                src="https://occ-0-1168-300.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABeoiFWtkpT2ezo-zFFoj5VDcvij4ZYSLnUqgWObtKbMG85CvH7yu27n7WgP0LVu3el_Vj3hw1L-eAwDVXYm_m8iJFWo1.png?r=f08"
                alt="avatar"
              />
              <div className="uw-dropdown">
                <div className="uw"></div>
              </div>
            </div>
          </div>
        </header>
      </StyledH>
      <MobileHeader>
        <div className="mobile-wrapper">
          {mobileDropDown && (
            <div className="md-dropdown">
              <div>
                <li>
                  <Link to="/">Home</Link>
                </li>

                <li>
                  <Link to="/">TV Shows</Link>
                </li>

                <li>
                  <Link to="/">Movies</Link>
                </li>
                <li>
                  <Link to="/">New & Popular</Link>
                </li>
              </div>
            </div>
          )}
          <div className="logo-wrapper">
            <MdMenu onClick={() => setMobileDropDown(!mobileDropDown)}/>
            <img src={redlogo} alt="logo" />
          </div>
          <div className="search-wrapper">
            <div className="search-input">
              <input type="text" placeholder="search movies, shows" />
              <MdClose size={20} />
            </div>
          </div>
        </div>
      </MobileHeader>
    </ThemeProvider>
  );
};

export default Header;
