/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import { useContext, useEffect, useState } from 'react';
import { ThemeContext } from '../elements/themeContext';

import { fetchData, spotifyApi } from '../spotifyApi';

function PlaylistBox(props) {
    const theme = useContext(ThemeContext);

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
 
    useEffect(() => {
        if (spotifyApi.token) {
            fetchData(setUserData, "me");
            fetchData(setPlaylists, "me/playlists");
        }
    }, [ spotifyApi.token ]);
    
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
    `;

    return (
        <div css={styles}>
            {userData && <div> 
                <h1>
                    <a href={userData.external_urls ? userData.external_urls.spotify : null }>
                        <img src={userData.images ? userData.images[0].url : null} />
                        {userData['display_name']}
                    </a>
                </h1>
                <div>                    
                    <h3>Playlists</h3>
                    <div id="playlistHolder">
                        {userPlaylists.items ? userPlaylists.items.map((playlist) => (
                            <PlaylistBox 
                                key={playlist.id}
                                link={playlist.external_urls ? playlist.external_urls.spotify : null}
                                image={playlist.images ? playlist.images[0].url : null} 
                                name={playlist.name}
                            />
                        )) : null}
                    </div>
                </div>
            </div>}
        </div>
    );
}