import fetch from 'isomorphic-unfetch';
import React from 'react';
import { Redirect } from 'react-router-dom';
import { set_token } from './redux/actions';
import { useDispatch } from 'react-redux';

export let spotifyApi = {
    authEndpoint: 'https://accounts.spotify.com/authorize',
    clientId: 'da9f7be280c04af894da601f1492e0af',
    clientSecret: '',
    redirectUri: 'http://localhost:3000/callback',
    scopes: [
        "user-read-currently-playing",
        "user-read-playback-state",
        'playlist-modify-public', 
        'playlist-modify-private', 
        'user-read-private'
    ]
};

export function loginUrl() {
    const url = `${spotifyApi.authEndpoint}?client_id=${spotifyApi.clientId}&redirect_uri=${spotifyApi.redirectUri}&scope=${spotifyApi.scopes.join("%20")}&response_type=token&show_dialog=true`;
    console.log("URL: ", url);
    return url;
}

export async function fetchData(token, setData, toFetch = "") {
    let responseBody = {};
    
    try {
        const response = await fetch(
            `https://api.spotify.com/v1/${toFetch}`, 
             {headers: {
                'Authorization': `Bearer ${token}`
              }}
        );
        responseBody = response.json();
    } catch(e) {
        console.log("oops... ", e);
    }
    responseBody.then((result) => (setData(result), console.log(result)));
}

export async function createPlaylist(token, userID, name, description, setData) {
    const response = await fetch(
    `https://api.spotify.com/v1/users/${userID}/playlists`,
    {
        method: 'POST',
        body: JSON.stringify({
            "name": name,
            "description": description,
            "public": true
        }),
        headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
        }
    }
    );
    setData(await response.json());
}

export async function addSongsPost(token, id, songs) {
    const response = await fetch(
    `https://api.spotify.com/v1/playlists/${id}/tracks`,
    {
        method: 'POST',
        body: JSON.stringify({
            "uris": songs
        }),
        headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
        }
    }
    );
    const responseBody = await response.json();
}

export function Callback() {
    const dispatch = useDispatch();

    const hash = window.location.hash
    .substring(1)
    .split("&")
    .reduce(function(initial, item) {
        if (item) {
            var parts = item.split("=");
            initial[parts[0]] = decodeURIComponent(parts[1]);
        }
        return initial;
    }, {}); 

    let _token = hash.access_token;
    if (_token) {
        dispatch(set_token(_token));
    }

    // change this to go back to users previous location
    return (
        <Redirect exact to='/'/>
    )
}
