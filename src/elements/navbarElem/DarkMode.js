/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { toggle_theme } from '../../redux/actions';
import { getTheme } from '../../redux/selectors';

import Slider from '../slider';

function DarkMode(props) {
    const dispatch = useDispatch();
    const theme = useSelector(getTheme);
    const [ checked, setChecked ] = useState(theme.themeName === "light" ? true : false);

    useEffect(() => {
      if (!((theme.themeName === "light" && checked === true) || (theme.themeName == "dark" && checked === false))) {
        setChecked(!checked);
      }

    }, [ theme ])

    const styles = css`
      list-style: none;
      padding: 10px;
      display: inline-flex;
      margin: 0;
      margin-left: auto;
      
      li {
          display: inline-block;
          padding: 15px;
          padding-top: 20px;
          text-decoration: none;
        }
    `;
  
    return (
      <ul css={styles} {... props}>
        <li>
            <Slider clickHandler={(e) => (dispatch(toggle_theme()))} checked={checked} />
        </li>
      </ul>
    );
  }

  export default DarkMode