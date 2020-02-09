/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import Search from '../elements/search';

function SiteTitle(props) {
  const styles = css`
    /* display: inline-block;
    */
    margin-bottom: 0px;
    margin-top: 5px;

    a {
      text-decoration: none;
      color: olivedrab;
      font-size: 45px
    }
    a:hover {
      color: rgb(107,165,35);
    }
  `;
  return (
    <h1 css={[styles, props.style]}> 
        <Link exact to="/">
            {props.name} 
        </Link>
    </h1>
  );
}

function HamburgerMenu(props) {
  const [ open, setOpen ] = useState(false);

  const style = css`
      visibility: hidden;
      width: 0;
      padding: 0;
      margin: 0;
      border: 0px solid black;
      background: none;

    @media screen and (max-width: 768px) {
      width: auto;
      /* height: auto; */
      /* padding: auto; */
      visibility: visible;
      padding: 10px;
      
      text-align: center;
      button {
        /* display: block; */
        /* text-align: center; */
        background: none;
        width: auto;
        font-size: 30px;
        padding: 10px;
        /* padding-: 0px; */
        border: 0px solid black;
      }
      ul {
        display: flex;
      }

      button:hover {
        color: olivedrab;
        cursor: pointer;
      }
    }
  `;
    let links;
    if (open) {
      links = <ul>
        {Object.keys(props.links).map((title) => (
          <li key={title+props.links[title]}>
            <NavLink to={props.links[title]}>
              {title}
            </NavLink>
          </li>
        ))}
      </ul>
    } else {
      links = null;
    }

    return (
      <div css={style}>
        <button onClick={() => (setOpen(!open), console.log("YEEEEEET"))}>☰</button>
        {links}
      </div>
    );
}

function NavBar(props) {
  const styles = css`
      display: flex;
      width: 100%;
      background-color: lightblue;
      box-shadow: 0 1px 2px 0 rgba(0, 0, 0, .2), 0 1.5px 5px 0 rgba(0, 0, 0, 0.19);
      padding-left: 0px;
      padding-right: 10px;
      /* justify-content: space-between; */

  
    ul {
      list-style: none;
      display: flex;
      justify-content: space-between;

    }

    li a {
      display: inline-block;
      padding: 10px 15px;
      text-decoration: none;
      color: black;
    }

    a:hover {
      color: olivedrab;
    }

    .active {
      border-bottom: 3px solid olivedrab;
    }

    @media screen and (max-width: 768px) {
      ul {
          flex-direction: column;
          display: none;
        }
      }
  `;

  const title = css`
    padding-left: 30px;
    @media screen and (max-width: 768px) {
      padding-left: 10px;
      
    }
  `;

  return (
    <nav css={styles}>
      <HamburgerMenu links={props.links}/>
      <SiteTitle name={props.name} style={title}/>
      <ul>
        {Object.keys(props.links).map((title) => (
            <li key={title+props.links[title]}>
              <NavLink to={props.links[title]}>
                {title}
              </NavLink>
            </li>
        ))}
      </ul>
    </nav>
  );
}

export default NavBar