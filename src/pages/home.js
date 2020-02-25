/** @jsx jsx */
import { jsx } from '@emotion/core';

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
                    The Playlists tab will show you your personal playlists
                </li>
                <li>
                    The search section will let you search for playlists
                </li>
                <li>
                    The name generator is just for fun;)
                </li>
            </ul>
        </div>
    );
}