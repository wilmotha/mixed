import React from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from './elements/navbar';

const navLinks = {
    Mix: '/mix',
    Playlists: '/playlists'
};

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar name="mixed" links={navLinks}/>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
