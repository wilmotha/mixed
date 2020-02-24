/** @jsx jsx */
import { jsx } from '@emotion/core';
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { getToken } from '../redux/selectors';
import { fetchData } from '../spotifyApi';
import { useParams } from 'react-router-dom';



export default function Mixed(props) {
    const [ playlists, setPlaylists ] = useState([]);
    const token = useSelector(getToken);
    const { playlistIDs } = useParams();

    useEffect(() => {
        console.log("Here: ", playlistIDs);
        // const ids = playlistIDs.split('&');
        // ids.map((id) => fetchData(token, setPlaylistsHelper, `/playlists/${id}`))
    }, [ playlists ]);

    const setPlaylistsHelper = playlist => {
        setPlaylists(prevState => [...prevState, playlist])
    }

    return (
        <div>
            <h1>ITS TIME TO MIX BOI</h1>
            {console.log("YEET: ", playlists)}
        </div>
    );
}