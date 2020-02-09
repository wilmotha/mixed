import React, { useState } from 'react';
import Search from '../elements/search'

function Mix(props) {
    const [ url, setUrl ] = useState('');

    const handleSubmit = e => {
        // error handle before setting
        setUrl(e);
    };

    return (
        <div>
            <h1> Mix Time </h1>
            <Search 
                placeHolder="enter playlist url"
                data={url}
                handleCancel={() => (setUrl(''))} 
                handleSubmit={handleSubmit}
                errorMessage="enter a valid playlist url"
            />
            <h3>{url}</h3>
        </div>

    );
}


export default Mix