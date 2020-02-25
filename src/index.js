import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Global, css } from '@emotion/core';
import * as serviceWorker from './utils/serviceWorker';
import ReactDOM from 'react-dom';
import { PersistGate } from 'redux-persist/integration/react'
import { useSelector } from 'react-redux';
import { getTheme } from './redux/selectors';


import App from './App';
import { Provider } from 'react-redux';
import { store, persistor } from './redux/store'

function Root() {
    const theme = useSelector(getTheme);

    const globalStyles = css`
    @import url('https://fonts.googleapis.com/css?family=Open+Sans&display=swap" rel="stylesheet');
    body {
        font-family: 'Open Sans', sans-serif;
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        background: ${theme.background};
      }
    `;

    return(  
        <BrowserRouter >
          <Global styles={globalStyles} />
          <App />
        </BrowserRouter>   
    );
  }
  
  ReactDOM.render(
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Root />
      </PersistGate>
    </Provider>,
    document.getElementById('root')
  );

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
