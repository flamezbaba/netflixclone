import React from "react";
// import styled, { ThemeProvider } from "styled-components";
import { StyledW } from "./welcomeStyle.js";
import redlogo from "../../assets/redlogo.png";
import { Link } from "react-router-dom";

const Welcome = () => {
  return (
    <StyledW>
      <header>
        <Link to="/">
          <img src={redlogo} alt="logo" />
        </Link>
      </header>
      <section>
        <div className="who">Who's Watching? </div>
        <div className="profile-list">
          <Link to="/dashboard">
            <div className="profile">
              <img src="https://occ-0-1168-300.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABeoiFWtkpT2ezo-zFFoj5VDcvij4ZYSLnUqgWObtKbMG85CvH7yu27n7WgP0LVu3el_Vj3hw1L-eAwDVXYm_m8iJFWo1.png?r=f08" alt="avatar"/>
              <span>Home</span>
            </div>
          </Link>
          <Link to="/dashboard">
            <div className="profile">
              <img src="https://occ-0-1168-300.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABblaqFlXX2IW8zOeb6a7h7w8W1wXJI6XeqvfqWA3HsBylJjOucB_L01cj1sHzjYOF3-AzNbq5lJ4RaBOzvoRDo5i3EzT.png?r=552" alt="avatar" />
              <span>Office</span>
            </div>
          </Link>
          <Link to="/dashboard">
            <div className="profile">
              <img src="https://occ-0-1168-300.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABeUqbfriC_pGWtwTa1KOx-ZSiQYa7ltLkOuduGxY_GRRc41ugYJNGYHe4LNcmshST4qkRSENvcs2xFomPc0rtX8wq2NG.png?r=b97" alt="avatar" />
              <span>Friends</span>
            </div>
          </Link>
          <Link to="/dashboard">
            <div className="profile">
              <img src="https://occ-0-1168-300.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABdm_-DEYu1y2T38LnXWSy-u7u24MbY361Zg2WziU3fOqSJy3w2j3-7E9f6FQVC_Rv3zj3xGZ1SQM7F6G8WjR4XFnHwDL.png?r=fcd" alt="avatar" />
              <span>Kids</span>
            </div>
          </Link>
        </div>
      </section>
    </StyledW>
  );
};

export default Welcome;
