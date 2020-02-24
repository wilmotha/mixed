/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import { useEffect, useState, useContext } from 'react';
import { ThemeContext } from './themeContext';
import { loginUrl } from '../spotifyApi';
import { reset_token } from '../redux/actions';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { getToken } from '../redux/selectors';


export default function SpotifyLogin(props) {
    const token = useSelector(getToken);
    const [login, setLogin] = useState(false);
    const theme = useContext(ThemeContext);
    const dispatch = useDispatch();


    useEffect(() => {
        if (token === "") {
            setLogin(false);
        } else {
            setLogin(true);
        }
    }, [ token ]);

    const styles = css`
        list-style: none;
        padding: 10px;
        display: inline-flex;
        margin: 0;
  
  
        li button {
          display: inline-block;
          padding: 15px;
          padding-top: 20px;
          text-decoration: none;
          font-size: 16px;
          color: ${theme.textColor};
          background: transparent;
          border: none;
        }
  
        button:hover {
          color: ${theme.accent};
          cursor: pointer;
        }

        button:focus {
            outline: none;
        }
  
        .active {
          border-bottom: 3px solid ${theme.accent};
        }
    `;

    return (
        <div>
            {console.log("LOGIN: ", login), console.log("TOKEN: ", token)}
            <ul css={styles}>
                <li>
                    {login ? <button onClick={() => (dispatch(reset_token()))}>
                        Logout
                    </button> :
                    <button onClick={() => (window.location.href=loginUrl())}>
                        Login
                    </button>}
                </li>
            </ul>
        </div>
    );
}