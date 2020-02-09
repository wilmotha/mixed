import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './utils/serviceWorker';
import { BrowserRouter } from 'react-router-dom';
import { Global, css } from '@emotion/core';


const globalStyles = css`
    @import url('https://fonts.googleapis.com/css?family=Open+Sans&display=swap" rel="stylesheet');
    body {
        font-family: 'Open Sans', sans-serif;
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

`;

ReactDOM.render(
    <BrowserRouter>
        <Global styles={globalStyles}/>
        <App />
    </BrowserRouter>, 
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
