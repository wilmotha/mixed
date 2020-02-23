/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ThemeContext } from '../elements/themeContext';

import { fetchData } from '../spotifyApi';

export default function PlaylistDetails() {
    const { playlistID } = useParams();
    const [ playlistData, setPlaylistData ] = useState([]);

    useEffect(() => {
        if (playlistID) {
            fetchData(setPlaylistData, `playlists/${playlistID}`);
        }
    }, [ playlistID ]);

    return (
        <div>
            <h1>{playlistData.name}</h1>
            <div>
                {playlistData.tracks ? playlistData.tracks.items.map((song) => (
                    <div>
                        <h3>{song.track ? song.track.name : null}</h3>
                    </div>
                )) : null}
            </div>
        </div>
    );
}