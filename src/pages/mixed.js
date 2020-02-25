/** @jsx jsx */
import { jsx } from '@emotion/core';
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { getToken } from '../redux/selectors';
import { fetchData, createPlaylist, addSongsPost } from '../spotifyApi';
import { useParams } from 'react-router-dom';


function PlaylistHolder(props) {
    const playlist = props.playlist;
    return (
        <div>
            <h1>{playlist.name}</h1>
            <div>
                {playlist.tracks ? playlist.tracks.items.map((song) => (
                    <div>
                        <h3>{song ? (song.track ? song.track.name : null) : console.log("FAILED HERE: ", playlist)}</h3>
                    </div>
                )) : null}
            </div>
        </div>
    );
}

function mix(playlistsIN) {
    let playlists = [...playlistsIN];
    let newPlaylist = {
        "description": "A playlist created by Mixed",
        "name": "Mixed Playlist",
        "tracks": {
            "items": [ ],
        },
    }

    // console.log("YEEPER BABY: ", playlists);

    const length1 = (playlists[0] ? playlists[0].tracks.items.length : 0);
    const length2 = (playlists[1] ? playlists[1].tracks.items.length : 0);

    for (let i = 0, j = 0; i+j < length1+length2;) {
        if (i < length1) {
            // console.log("ADD1: ", splaylists[0].tracks.items[i]);
            newPlaylist.tracks.items.push(playlists[0].tracks.items[i]);
            i++;
        }
        if (j < length2) {
            newPlaylist.tracks.items.push(playlists[1].tracks.items[j]);
            j++;
        }
    }

    playlists.unshift(newPlaylist);
    // console.log("EVEN YEEPER: ", playlists);
    return playlists;
}

export default function Mixed(props) {
    const [ playlists, setPlaylists ] = useState([]);
    const [ created, setCreated ] = useState(false);
    const token = useSelector(getToken);
    const { playlistIDs } = useParams();
    const [ id, setId ] = useState("");

    useEffect(() => {
        const ids = playlistIDs.split('&');
        ids.map((id) => fetchData(token, setPlaylistsHelper, `playlists/${id}`));
    }, [ playlistIDs ]);

    const setPlaylistsHelper = playlist => {
        setPlaylists(prevState => [...prevState, playlist])
    }

    const savePlaylist = e => {
        const newPlaylist = playlists[0];
        // console.log("funder: ", newPlaylist);
        createPlaylist(token, playlists[1].owner.id, newPlaylist.name, newPlaylist.description, setId);
    }
    
    useEffect(() => {
        if (id != "") {
            console.log("PEOPLE MAGAZINE: ", id);
            const uris = (playlists[0].tracks ? (playlists[0].tracks.items.map(song => song.track.uri)) : null);
            addSongsPost(token, id.id, uris);
        }
    }, [ id ]);

    return (
        <div>
            <h1>ITS TIME TO MIX BOI</h1>
            {created ? 
                <button onClick={savePlaylist}>Save Playlist</button> :
                <button onClick={() => setPlaylists(mix(playlists), setCreated(true))}>Create Playlist</button>
            }
            {playlists.map((playlist) => (
                <PlaylistHolder playlist={playlist} />
            ))}
        </div>
    );
}