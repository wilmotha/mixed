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
        ul {
            columns: 3;
            -webkit-columns: 3;
            -moz-columns: 3;
            border-bottom: solid #303030 1px;
        }

        li {
            list-style: none;
        }

        .title {
            color: grey;
        }

        .songs {
            font-size: 15px;
            margin-bottom: 12px;
        }

        li {

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
                <ul class="title">
                    <li>
                        Title
                    </li>
                    <li>
                        Artist
                    </li>
                    <li>
                        Album
                    </li>
                </ul>
                {playlistData.tracks ? playlistData.tracks.items.map((song) => (
                    <ul className="songs">
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