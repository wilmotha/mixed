import React, { useState, useEffect } from 'react';
import Search from '../elements/search'
import { fetchData } from '../spotifyApi';
import PlaylistDisplay from '../elements/playlistDisplay'
import { useSelector } from 'react-redux';
import { getToken } from '../redux/selectors';

function Mix(props) {
    const [ search, setSearch ] = useState('');
    const [ searchData, setSearchData ] = useState([]);
    const token = useSelector(getToken);

    const handleSubmit = e => {
        // error handle before setting
        setSearch(e);
    };

    useEffect(() => {
        if (search) {
            fetchData(token, setSearchData, `search?q=${search}&type=playlist`);
        }
    }, [ search ]);

    return (
        <div>
            <h1> Search </h1>
            <Search
                placeHolder="Search playlist"
                data={search}
                handleCancel={() => (setSearch(''))} 
                handleSubmit={handleSubmit}
                errorMessage="Could not find anything"
            />
            <PlaylistDisplay playlists={searchData.playlists ? searchData.playlists.items : null} />
        </div>

    );
}


export default Mix