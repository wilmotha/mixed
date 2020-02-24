/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import { useContext, useEffect, useState } from 'react';
import { ThemeContext } from '../elements/themeContext';
import { Link } from 'react-router-dom';

function PlaylistBox(props) {
    const theme = useContext(ThemeContext);
    const [ check, setCheck ] = useState(false); 

    const styles = css`
        padding: 20px;
        padding-bottom: 5px;
        img {
            width: 200px;
            height: 200px;
        }

        img:hover {
            opacity: 0.6;
        }

        a {
            text-decoration: none;
        }

        a:hover {
            color: grey;
        }

        div {
            width: 200px;
            text-decoration: none;
            color: ${theme.textColor};
        }

    `;

    const handleClick = e => {
        setCheck(!check);
        props.addPlaylist(props.link);
    }

    return (
        <div css={styles} key={props.link}>
            <Link to={`playlists/${props.link}`}>
                <img src={props.image} />
                <div>{props.name}</div>
            </Link>
            <input onClick={handleClick} checked={check} type="checkbox" id="mixbox" value={props.link}></input>
            <label for="mixbox">Mix</label>
        </div>  
    );
}

export default function PlaylistDisplay(props) {
    const [ mixList, setMixList ] = useState([]);

    const addPlaylist = id => {
        if (mixList.includes(id)) {
            setMixList(mixList.filter((mix) => (mix != id)));
        } else {
            setMixList(prevState => [...prevState, id]);
        }
    }
    
    const styles = css`
        #playlistHolder {
            display: inline-flex;
            flex-wrap: wrap;
        }
    `;

    return (
        <div css={styles} onSubmit={addPlaylist}>                    
            <h3>Playlists</h3>
            <button onClick={() => console.log(mixList)}>Mix Playlists</button>
            <div id="playlistHolder">
                {props.playlists ? props.playlists.map((playlist) => (
                    
                    <PlaylistBox 
                        key={playlist.id}
                        link={playlist.id}
                        image={playlist.images ? playlist.images[0].url : null} 
                        name={playlist.name}
                        addPlaylist={addPlaylist}
                    />
                    
                )) : null}
            </div>
        </div>
    );
}