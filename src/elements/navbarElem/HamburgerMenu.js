/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import { useState, useContext } from 'react';
import { ThemeContext } from '../themeContext';

import NavBarLinks from './NavbarLinks';
import DarkMode from './DarkMode';
import SpotifyLogin from '../spotifyLogin';

function HamburgerMenu(props) {
    const [ open, setOpen ] = useState(false);
    const theme = useContext(ThemeContext);
  
    const style = css`
        visibility: hidden;
        width: 0;
        padding: 0;
        margin: 0;
        border: 0px solid black;
        background: none;
  
      @media screen and (max-width: 768px) {
        width: auto;
        visibility: visible;
        padding: 10px;
        display: inline-flex;      
        text-align: center;
  
        div {
          transition: max-height 1s; 
          overflow: hidden;
        }
  
        button {
          background: none;
          width: auto;
          font-size: 30px;
          border: 0px solid black;
          padding-left: ${open ? "13.5px" : "auto"};
          padding-right: ${open ? "10px" : "auto"};
          color: ${theme.textColor};
        }
  
        button:hover {
          color: ${theme.accent};
          cursor: pointer;
        }
  
        button:focus {
          outline: none;
        }
      }
    `;
  
    const openStyle = css`
        opacity: 1;
        display: inline-flex;
        position: absolute;
        left: 0;
        top: 82px;
        background-color: ${theme.contentBox};
        margin: 0px;
        box-shadow: 0 1px 2px 0 rgba(0, 0, 0, .2), 0 1.5px 5px 0 rgba(0, 0, 0, 0.19);
        flex-direction: column;
        max-height: 400px;
        min-width: auto;
        width: 150px;
  
        ul {
          display: flex;
          flex-direction: column;
        }
      `;
  
       return (
        <div css={style}>
          <div css={open ? openStyle : [css`opacity: 0; max-height: 0;`]}>
            <NavBarLinks links={props.links} /> 
            <DarkMode css={css`margin-left: auto; margin-left: initial;`} darkModeHandler={props.darkModeHandler} />
            <SpotifyLogin />
            {/* <NavBarLinks css={css`margin-left: auto; margin-left: initial;`} links={{"Login": "/login"}} /> */}
          </div>
          <button onClick={() => (setOpen(!open))}>{open ? '❮' : '☰'}</button>
        </div>
      );
  }

  export default HamburgerMenu