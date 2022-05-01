export const theme = {
    ntBlack: "#141414",
    
  primaryColor: "#33C2FF",
  secondaryColor: "#132542",
  bgGray: "#FBFBFB",
  gray1: "#464545",
  gray2: "#e7e7e9",
  blackShadow: "rgba(0,0,0, .3)",
};

export const hex2rgba = (hex, alpha = 1) => {
    const [r, g, b] = hex.match(/\w\w/g).map((x) => parseInt(x, 16));
    return `rgba(${r},${g},${b},${alpha})`;
  };
  