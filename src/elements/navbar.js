import React from 'react';
import { NavLink, Link } from 'react-router-dom';

function SiteTitle(props) {
  return (
    <h1 className="site-title" > 
        <Link className="site-title" exact to="/">
            {props.name} 
        </Link>
    </h1>
  );
}

function NavBar(props) {
  return (
    <div id="navbar">
      <SiteTitle name={props.name} />
      <ul>
        {Object.keys(props.links).map((title) => (
          <li key={title+props.links[title]}>
            <NavLink to={props.links[title]}>
              {title}
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default NavBar