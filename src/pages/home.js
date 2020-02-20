/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import { useContext, useEffect, useState } from 'react';
import { ThemeContext } from '../elements/themeContext';

export default function Home(props) {
    return (
        <div>
            <h1> Welcome to mixed </h1>
            <p> This is a website that uses spotify APIs to combine two 
                playlists togeather to create a new playlists. 
            </p>
            <ul>
                <li>
                    You can click the login in the right corner to log into 
                    spotify
                </li>
                <li>
                    The Playlists tab will show you your playlists
                </li>
                <li>
                    The Mix section will actually do the mixing but it is 
                    currently in the works at the moment
                </li>
                <li>
                    The name generator is just for fun;)
                </li>
            </ul>
        </div>
    );
}