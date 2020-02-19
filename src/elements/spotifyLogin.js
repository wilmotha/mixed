/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import { useEffect, useState, useContext } from 'react';
import {ThemeContext} from './themeContext';


export const authEndpoint = 'https://accounts.spotify.com/authorize';

// put this in a struct
const clientId = 'da9f7be280c04af894da601f1492e0af';
const clientSecret = '';
const redirectUri = 'http://localhost:3000/';
const scopes = [
    "user-read-currently-playing",
    "user-read-playback-state",
    // 'playlist-modify-public', 
    // 'playlist-modify-private', 
    // 'user-read-private'
];

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

window.location.hash = "";

function loginUrl() {
    return `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join("%20")}&response_type=token&show_dialog=true`;
}

export default function SpotifyLogin(props) {
    const [token, setToken] = useState("");
    const theme = useContext(ThemeContext);

    useEffect(() => {
        let _token = hash.access_token;
        if (_token) {
            setToken(_token);
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
            {(!token) && (
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