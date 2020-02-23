import React, { useState, useEffect } from 'react';
import Search from '../elements/search'
import { fetchData, spotifyApi, query } from '../spotifyApi';
import PlaylistDisplay from '../elements/playlistDisplay'


function Mix(props) {
    const [ search, setSearch ] = useState('');
    const [ searchData, setSearchData ] = useState([]); 

    const handleSubmit = e => {
        // error handle before setting
        setSearch(e);
    };

    useEffect(() => {
        if (spotifyApi.token) {
            fetchData(setSearchData, `search?q=${search}&type=playlist`);
        }
    }, [ search ]);

    return (
        <div>
            <h1> Mix Time </h1>
            <Search
                placeHolder="enter playlist url"
                data={search}
                handleCancel={() => (setSearch(''))} 
                handleSubmit={handleSubmit}
                errorMessage="enter a valid playlist url"
            />
            <PlaylistDisplay playlists={searchData.playlists ? searchData.playlists.items : null} />
        </div>

    );
}


export default Mix