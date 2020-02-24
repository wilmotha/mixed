/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchData } from '../spotifyApi';
import { useSelector } from 'react-redux';
import { getToken } from '../redux/selectors';

export default function PlaylistDetails() {
    const { playlistID } = useParams();
    const [ playlistData, setPlaylistData ] = useState([]);
    const token = useSelector(getToken);

    useEffect(() => {
        if (playlistID) {
            fetchData(token, setPlaylistData, `playlists/${playlistID}`);
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