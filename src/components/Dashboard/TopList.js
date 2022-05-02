import React from "react";
import { useSelector } from "react-redux";
import { ThemeProvider } from "styled-components";

import { theme } from "../../utils/theme";
import { TopListItem } from "./dashboardStyle";

const TopList = (props) => {
  const theLoader = useSelector((state) => state.movies.loading);
  const { data, onModalClick } = props;


  const handleModal = (e) => {
    onModalClick(e);
  } 

  return (
    <ThemeProvider theme={theme}>
      <div className="cols">
        {!theLoader &&
          data.map((item, index) => (
            
            <TopListItem bga={'https://image.tmdb.org/t/p/original'+item.backdrop_path} key={index} >
              <div className="item" onClick={() => handleModal(item)}>
                <div className="overlay">
                  <span>{item.original_title}</span>
                </div>
              </div>
            </TopListItem>
          ))}
      </div>
    </ThemeProvider>
  );
};

export default TopList;
