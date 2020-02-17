import React, { useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Global, css } from '@emotion/core';
import * as serviceWorker from './utils/serviceWorker';
import ReactDOM from 'react-dom';
import { ThemeContext, theme } from './elements/themeContext';

import App from './App';


const globalStyles = css`
    @import url('https://fonts.googleapis.com/css?family=Open+Sans&display=swap" rel="stylesheet');
    body {
        font-family: 'Open Sans', sans-serif;
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        background: ghostwhite;
    }

`;
function Root() {
    const [ darkSlider, setDarkSlider ] = useState(false);
  
    return(
        <ThemeContext.Provider value={darkSlider ? theme.dark : theme.light}>
          <BrowserRouter >
            <Global styles={globalStyles} />
            <App darkModeHandler={(e) => (setDarkSlider(!darkSlider))}/>
          </BrowserRouter>
        </ThemeContext.Provider>
    );
  }
  
  ReactDOM.render(
    <Root />,
    document.getElementById('root')
  );

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
