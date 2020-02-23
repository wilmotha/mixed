/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import { useEffect, useState, useContext } from 'react';
import { ThemeContext } from './themeContext';
import { loginUrl } from '../spotifyApi';


const hash = window.location.hash
    .substring(1)
    .split("&")
    .reduce(function(initial, item) {
        if (item) {
            var parts = item.split("=");
            initial[parts[0]] = decodeURIComponent(parts[1]);
        }
        return initial;
    }, {}); 

// window.location.hash = "";

export default function SpotifyLogin(props) {
    const [login, setLogin] = useState(false);
    const theme = useContext(ThemeContext);
    
    // add a timer that makes user renter login
    useEffect(() => {
        let _token = hash.access_token;
        if (_token) {
            props.setToken(_token);
            setLogin(true);
        }
    }, [hash.access_token]);    

    
    const styles = css`
        list-style: none;
        padding: 10px;
        display: inline-flex;
        margin: 0;
  
  
        li a {
          display: inline-block;
          padding: 15px;
          padding-top: 20px;
          text-decoration: none;
          color: ${theme.textColor};
        }
  
        a:hover {
          color: ${theme.accent};
        }
  
        .active {
          border-bottom: 3px solid ${theme.accent};
        }
    `;

    return (
        <div>
            {(!login) && (
                <ul css={styles}>
                    <li>
                        <a href={loginUrl()}>
                            Login
                        </a>
                    </li>
                </ul>
            )}
        </div>
    );
}