import fetch from 'isomorphic-unfetch';
import React, { useContext } from 'react'

// put this in a struct
export let spotifyApi = {
    authEndpoint: 'https://accounts.spotify.com/authorize',
    clientId: 'da9f7be280c04af894da601f1492e0af',
    clientSecret: '',
    redirectUri: 'http://localhost:3000/',
    scopes: [
        "user-read-currently-playing",
        "user-read-playback-state",
        'playlist-modify-public', 
        'playlist-modify-private', 
        'user-read-private'
    ],
    token: ""
};

export const TokenContext = React.createContext(spotifyApi.token);

export function loginUrl() {
    const url = `${spotifyApi.authEndpoint}?client_id=${spotifyApi.clientId}&redirect_uri=${spotifyApi.redirectUri}&scope=${spotifyApi.scopes.join("%20")}&response_type=token&show_dialog=true`;
    console.log("URL: ", url);
    return url;
}

export function setToken(token) {
    spotifyApi.token = token;
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
    let re;
    responseBody.then((result) => (setData(result), console.log(result)));
}
