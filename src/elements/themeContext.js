import React from 'react';

export const theme = {
    light: {
      themeColor: "ghostwhite",
      background: "ghostwhite",
      accent: "#C2185B",
      accentHover: "#E91E63",
      contentBox: "ghostwhite",
      textColor: "black"
    },
    dark: {
      themeColor: "#242424",
      background: "#212121",
      accent: "#C2185B",
      accentHover: "#E91E63",
      contentBox: "#222222",
      textColor: "ghostwhite"
    }
  };
  
export const ThemeContext = React.createContext(theme.light);