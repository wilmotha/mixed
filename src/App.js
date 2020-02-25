/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import { useContext } from 'react';
import { Route, Switch } from 'react-router-dom';
import { ThemeContext } from './elements/themeContext';

// elements
import Navbar from './elements/navbar';

// pages
import RandomName from './pages/randomName';
import Mix from './pages/mix';
import Playlists from './pages/playlists';
import Home from './pages/home'
import PlaylistDetails from './pages/playlistDetails';
import { Callback } from './spotifyApi';
import Mixed from './pages/mixed';

const navlinks = {
    "Search": "/mix",
    "Playlists": "/playlists",
    "Name Generator": "/limpBizkit"
};

function App(props) {
  const theme = useContext(ThemeContext);

  const styles = css`
    background: ${theme.background};
    color: ${theme.textColor};
    main {
      padding: 25px;
      padding-top: 70px;
    }
  `;

  return (
    <div css={styles}>
      <Navbar name="mixed" darkModeHandler={props.darkModeHandler} links={navlinks} setToken={props.setToken}/>
      <main>
        <Switch>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route path="/mix/:playlistIDs">
            <Mixed />
          </Route>
          <Route exact path="/mix">
            <Mix />
          </Route>
          <Route exact path="/playlists">
            <Playlists />
          </Route>
          <Route path="/limpBizkit">
            <RandomName/>
          </Route>
          <Route path="/playlists/:playlistID">
            <PlaylistDetails />
          </Route>
          <Route path="/callback">
            <Callback/>
          </Route>
          <Route path="*">
            <h1> 404! </h1>
            <h3> You are in the wrong place... </h3>
          </Route>
        </Switch>
      </main>
    </div>
  );
}

export default App;
