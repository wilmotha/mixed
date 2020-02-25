/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import { useEffect, useState } from 'react';

import { fetchData } from '../spotifyApi';

import PlaylistDisplay from '../elements/playlistDisplay'
import { useSelector } from 'react-redux';
import { getToken, getTheme } from '../redux/selectors';

function PlaylistBox(props) {
    const theme = useSelector(getToken);

    const styles = css`
        padding: 20px;
        padding-bottom: 5px;
        img {
            width: 200px;
            height: 200px;
        }

        a {
            text-decoration: none;
        }

        div {
            width: 200px;
            text-decoration: none;
            color: ${theme.textColor};
        }

    `;

    return (
        <div css={styles} key={props.id}>
            <a href={props.link}> 
                <img src={props.image} />
                <div>{props.name}</div>
            </a>
        </div>  
    );
}

export default function Playlists() {
    const [ userData, setUserData ] = useState([]);
    const [ userPlaylists, setPlaylists ] = useState([]);
    const token = useSelector(getToken);
    const theme = useSelector(getTheme);

 

    useEffect(() => {
        if (token) {
            fetchData(token, setUserData, "me");
            fetchData(token, setPlaylists, "me/playlists");
        }
    }, [ token ]);
    
  

    const styles = css`

        #playlistHolder {
            display: inline-flex;
            flex-wrap: wrap;
            /* overflow: */
        }

        img {
            width: 100px;
            height: 100px;
        }
        a {
            text-decoration: none;
            color: ${theme.textColor}
        }
    `;

    return (
        <div css={styles}>
            {userData && <div> 
                <h1>
                    <a href={userData.external_urls ? userData.external_urls.spotify : null }>
                        {/* <img src={userData.images ? userData.images[0].url : null} /> */}
                        {userData['display_name']}
                    </a>
                </h1>
                <PlaylistDisplay playlists={userPlaylists.items}/>
            </div>}
        </div>
    );
}