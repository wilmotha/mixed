/** @jsx jsx */
import { jsx, css } from '@emotion/core';

// creation of this slider was pulled mostly from website below
//https://www.w3schools.com/howto/howto_css_switch.asp
function Slider(props) {
    const styles = css`
        .switch {
            position: relative;
            display: inline-block;
            width: 40px;
            height: 24px;
        }
    
        /* Hide default HTML checkbox */
        .switch input {
            opacity: 0;
            width: 0;
            height: 0;
        }
    
        /* The slider */
        .slider {
            position: absolute;
            cursor: pointer;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background-color: #383838;
            -webkit-transition: .4s;
            transition: .4s;
        }
    
        .slider:before {
            position: absolute;
            content: "";
            height: 16px;
            width: 16px;
            left: 4px;
            bottom: 4px;
            background-color: ghostwhite;
            -webkit-transition: .4s;
            transition: .4s;
        }
    
        input:checked + .slider {
            background-color: #ccc;
        }
    
        input:focus + .slider {
            box-shadow: 0 0 1px #2196F3;
        }
    
        input:checked + .slider:before {
            -webkit-transform: translateX(16px);
            -ms-transform: translateX(16px);
            transform: translateX(16px);
        }
        
        .slider.round {
            border-radius: 34px;
        }
    
        .slider.round:before {
            border-radius: 50%;
        }
    `;

    return (
        <div css={styles}>
            <label className="switch">
                <input onClick={props.darkModeHandler} type="checkbox" />
                <span className="slider round"></span>
            </label>
        </div>
    );
}

export default Slider