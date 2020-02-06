import React, { useState } from 'react';

function Error(props) {
    if (props.show) {
      return (
        <div id="error">
          <p> {props.children} </p>
        </div>
      );
    }
    return null;
}

function Form(props) {
    const [ data, setData ] = useState("");
    const [ error, setError ] = useState(false);

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

    const handleCancel = e => {
        setData('');
        if (props.handleCancel) {
            props.handleCancel();
        }
    }

    return (
        <form id="dialog" onSubmit={handleSubmit}>
            <input 
                type="text" 
                name="data" 
                value={data}
                placeholder={props.placeHolder} 
                onChange={handleChange} 
            /> 
            <input 
                type="submit" 
                value="Go" 
            /> 
            <button 
                type="button" 
                onClick={handleCancel}> 
                Clear
            </button>
            <Error show={error}> {props.errorMessage} </Error>
        </form>
    );
}

export default Form