/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ThemeContext } from '../themeContext';

function SiteTitle(props) {
    const theme = useContext(ThemeContext);
  
    const styles = css`
      width: auto;
      padding: 10px;
      display: inline-flex;      
      text-align: center;
  
      a {
        text-decoration: none;
        color: ${theme.accent};
        font-size: 45px;
        font-weight: bold;
      }
      a:hover {
        color: ${theme.accentHover};
      }
    `;
    return (
      <div css={[styles, props.style]}> 
          <Link exact to="/">
              {props.name} 
          </Link>
      </div>
    );
  }

  export default SiteTitle
  