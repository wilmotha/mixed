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

    const styles = css`
        li {
            display: inline-flex;
            padding-right: 20px;            
        }
    `;

    useEffect(() => {
        if (playlistID) {
            fetchData(token, setPlaylistData, `playlists/${playlistID}`);
        }
    }, [ playlistID ]);

    return (
        <div css={styles}>
            <h1>{playlistData.name}</h1>
            <div>
                {playlistData.tracks ? playlistData.tracks.items.map((song) => (
                    <ul>
                        <li>
                            {song.track ? song.track.name : null}
                        </li>
                        <li>
                            {song.track ? (song.track.artists ? song.track.artists[0].name : null) : null}
                        </li>
                        <li>
                            {song.track ? (song.track.album ? song.track.album.name : null) : null }
                        </li>
                    </ul>
                )) : null}
            </div>
        </div>
    );
}