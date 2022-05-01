export const devices = {
  mobile: "(max-width: 900px)",
  // tablet: "(max-width: 850px)",
  laptop: "(min-width: 905px)",
};

export const hex2rgba = (hex, alpha = 1) => {
  hex = hex.toString();

  const red = parseInt(hex.slice(1, 3), 16);
  const green = parseInt(hex.slice(3, 5), 16);
  const blue = parseInt(hex.slice(5, 7), 16);

  return `rgba(${red}, ${green}, ${blue}, ${alpha})`;
};
