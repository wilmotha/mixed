/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import React, { useState } from 'react';

function Error(props) {
    const styles = css`
        border: 1px solid red;
        border-radius: 5px;
        background-color: lightpink;
        width: 35%;
        margin: 5px 0px 5px;
        padding: 5px;
    `;

    if (props.show) {
      return (
        <div css={styles}>
          <p> {props.children} </p>
        </div>
      );
    }
    return null;
}

function Search(props) {
    const [ data, setData ] = useState("");
    const [ error, setError ] = useState(false);

    const styles = css`
        input {
            /* background-color: ghostwhite; */
            background-color: gainsboro;
            padding: 10px;
            width: 30%;
            border: 0px solid gray;
            border-radius: 5px 0px 0px 5px; 
            box-shadow: 0 1px 2px 0 rgba(0, 0, 0, .2), 0 1.5px 5px 0 rgba(0, 0, 0, 0.19);
        }
        input:hover {
            background-color: lightgray;
        }

        input:focus {
            background-color: lightgray;
            outline: none;

        }

        button {
            background-color: ghostwhite;
            padding: 10px;
            border-radius: 0px 5px 5px 0px;
            border: 0px solid grey;
            padding-left: 12px;
            padding-right: 12px;
            box-shadow: 0 1px 2px 0 rgba(0, 0, 0, .2), 0 1.5px 5px 0 rgba(0, 0, 0, 0.19);
        }
        button:hover {
            background-color: #F0F0F0;
        }
        button:focus {
            background-color: #F0F0F0;
        }

    `;

    const handleChange = e => {
        console.log("target: ", e.target.value)
        setData(e.target.value);
    };

    const handleSubmit = e => {
        e.preventDefault();
        if (data === '') {
            setError(true);
        } else {
            props.handleSubmit(data);
            setError(false);
            setData('');
        }
    };

    return (
        <form css={styles} >
            <link 
                rel="stylesheet" 
                href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
            </link>
            <input 
                type="text" 
                name="data" 
                value={data}
                placeholder={props.placeHolder} 
                onChange={handleChange} 
            /> 
            <button onClick={handleSubmit}> 
                <i className="fa fa-search"></i>
            </button> 
            <Error show={error}> {props.errorMessage} </Error>
        </form>
    );
}

export default Search