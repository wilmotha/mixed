import React from 'react';

export const theme = {
    light: {
      themeColor: "#ffffff",
      background: "#fffffff",
      accent: "#1ED760",
      accentHover: "#19bd53",
      contentBox: "#fffffff",
      textColor: "#191414"
    },
    dark: {
      themeColor: "#191414",
      background: "#212121",
      accent: "#1ED760",
      accentHover: "#19bd53",
      contentBox: "#222222",
      textColor: "#ffffff"
    }
  };
  
export const ThemeContext = React.createContext(theme.light);