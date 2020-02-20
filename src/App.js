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

const navlinks = {
    "Mix": "/mix",
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
      <Navbar name="mixed" darkModeHandler={props.darkModeHandler} links={navlinks}/>
      <main>
        <Switch>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route path="/mix">
            <Mix />
          </Route>
          <Route path="/playlists">
            <Playlists />
          </Route>
          <Route path="">
            <RandomName/>
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
