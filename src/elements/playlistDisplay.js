/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import { useContext, useEffect, useState } from 'react';
import { ThemeContext } from '../elements/themeContext';
import { Link } from 'react-router-dom';

function PlaylistBox(props) {
    const theme = useContext(ThemeContext);

    const styles = css`
        padding: 20px;
        padding-bottom: 5px;
        img {
            width: 200px;
            height: 200px;
        }

        img:hover {
            opacity: 0.6;
        }

        a {
            text-decoration: none;
        }

        a:hover {
            color: grey;
        }

        div {
            width: 200px;
            text-decoration: none;
            color: ${theme.textColor};
        }

    `;

    return (
        <div css={styles} key={props.id}>
            <Link to={`playlists/${props.link}`}>
                <img src={props.image} />
                <div>{props.name}</div>
            </Link>
            {/* <a href={props.link}> 
                
            </a> */}
        </div>  
    );
}

export default function PlaylistDisplay(props) {
    const styles = css`
        #playlistHolder {
            display: inline-flex;
            flex-wrap: wrap;
        }
    `;

    return (
        <div css={styles}>                    
            <h3>Playlists</h3>
            <div id="playlistHolder">
                {props.playlists ? props.playlists.map((playlist) => (
                    <PlaylistBox 
                        key={playlist.id}
                        link={playlist.id}
                        image={playlist.images ? playlist.images[0].url : null} 
                        name={playlist.name}
                    />
                )) : null}
            </div>
        </div>
    );
}