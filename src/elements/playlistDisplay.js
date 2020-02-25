/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

import { useSelector } from 'react-redux';
import { getTheme } from '../redux/selectors';


function PlaylistBox(props) {
    const theme = useSelector(getTheme);
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
    let history = useHistory();


    const addPlaylist = id => {
        if (mixList.includes(id)) {
            setMixList(mixList.filter((mix) => (mix != id)));
        } else {
            setMixList(prevState => [...prevState, id]);
        }
    }
    
    const mix = e => {
        let path = "mix/";
        mixList.map((mix) => path += mix + "&");
        path = path.slice(0, -1);

        history.push(path);
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
            <button onClick={mix}>Mix Playlists</button>
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