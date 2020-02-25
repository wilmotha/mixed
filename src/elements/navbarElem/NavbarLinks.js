/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import { NavLink } from 'react-router-dom';

import { useSelector } from 'react-redux';
import { getTheme } from '../../redux/selectors';


function NavBarLinks(props) {
    const theme = useSelector(getTheme);
    
    const styles = css`
        list-style: none;
        padding: 10px;
        display: inline-flex;
        margin: 0;
  
  
        li a {
          display: inline-block;
          padding: 15px;
          padding-top: 20px;
          text-decoration: none;
          color: ${theme.textColor};
        }
  
        a:hover {
          color: ${theme.accent};
        }
  
        .active {
          border-bottom: 3px solid ${theme.accent};
        }
    `;
  
    return (
      <ul css={styles} {... props}>
          {Object.keys(props.links).map((title) => (
            <li key={title+props.links[title]}>
              <NavLink exact to={props.links[title]}>
                {title}
              </NavLink >
            </li>
          ))}
        </ul>
    );
  }

  export default NavBarLinks