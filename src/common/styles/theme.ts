export const lightTheme = {
  alternateBackground: "rgba(255, 255, 255, 1)",
  mainBackground: "rgba(245, 245, 245, 1)",
  modalBackground: "rgba(255, 255, 255, 1)",
  buttonHover: "rgba(245, 245, 245, 1)",
  border: "rgba(238, 238, 238, 1)",
  alternateText: "rgba(210, 210, 210, 1)",
  borderColor: "rgba(184, 184, 184, 1)",
  scrollBarHover: "rgba(175, 175, 175, 1)",
  scrollBarActive: "rgba(160, 160, 160, 1)",
  buttonActive: "rgba(75, 75, 75, 1)",
  buttonBackground: "rgba(255, 255, 255, 0.5)",
  scrollBarColor: "rgba(217, 217, 217, 1)",


  mainText: "rgba(0, 0, 0, 1)",
  shadow: "rgba(0, 0, 0, 0.25)",
  thumbColor: "rgba(85, 85, 85, 1)",
  loadingGradient: "linear-gradient(-45deg, rgba(238, 238, 238, 1) 0%, rgba(210, 210, 210, 1) 100%)",
};

export const darkTheme = {
  alternateBackground: "rgba(5, 5, 5, 1)",
  mainBackground: "rgba(15, 15, 15, 1)",
  modalBackground: "rgba(25, 25, 25, 1)",
  buttonHover: "rgba(35, 35, 35, 1)",
  border: "rgba(50, 50, 50, 1)",
  alternateText: "rgba(100, 100, 100, 1)",
  borderColor: "rgba(115, 115, 115, 1)",
  scrollBarHover: "rgba(130, 130, 130, 1)",
  scrollBarActive: "rgba(140, 140, 140, 1)",
  scrollBarColor: "rgba(85, 85, 85, 1)",
  buttonActive: "rgba(200, 200, 200, 1)",
  buttonBackground: "rgba(0, 0, 0, 0.5)",

  mainText: "rgba(255, 255, 255, 1)",
  shadow: "rgba(255, 255, 255, 0.25)",
  thumbColor: "rgba(237, 237, 237, 1)",
  loadingGradient: "linear-gradient(-45deg, rgba(50, 50, 50, 1) 0%, rgba(85, 85, 85, 1) 100%)",
};

export const getTheme = (): any => {
  const theme = localStorage.getItem("theme") || "light";
  return theme === "light" ? lightTheme : darkTheme;
};

export const getColorName = (colorName: string): string => {
  return getTheme()[colorName];
};
