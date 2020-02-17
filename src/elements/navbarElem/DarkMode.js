/** @jsx jsx */
import { jsx, css } from '@emotion/core';

import Slider from '../slider';

function DarkMode(props) {
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
            <Slider darkModeHandler={props.darkModeHandler} />
        </li>
      </ul>
    );
  }

  export default DarkMode