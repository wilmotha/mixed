import React, { useState } from 'react';
import Form from '../elements/form';

function nameChange(name1) {
    let name = "";
    
    for (let i = 0; i < name1.length; i++) {
        name = name + name1.charAt(i);
    }
    // name = name.replace(/smith/gi, 'hot dog water');
    name = name.replace(/c/gi, 'k');
    name = name.replace(/s/gi, 'z');
    name = name.replace(/ui/gi, 'i');
    name = name.replace(/mo/gi, 'nu');
    name = name.replace(/w/gi, 'v');
    name = name.replace(/th/gi, 'f');    
    name = name.replace(/r/gi, '®');    
    name = name.replace(/t/gi, '™');
    name = name.replace(/d/gi, 'g');



    const front = [
        "limp ", "moizt ", "tubby ", "hot dog flavored ", "nookie ", "", "thiq ", "chunker ", "thumper ", "slik "
    ];
    
    let rand = Math.floor(Math.random() * 10);
    name = front[rand] + name;

    return name;    
}

function WildName(props) {
    return (
        <div>
            <p>Your old name was: <b> {props.children} </b></p>
            <p>Your New name is: <b> {nameChange(props.children)} </b></p>
        </div>
    );
}

function RandomName() {
    const [ name, setName ] = useState('temp');

    return (
        <div>
            <h1>Limp Bizkit name generator</h1>
            <Form 
                placeHolder="enter name"
                data={name}
                handleCancel={() => (setName(''))} 
                handleSubmit={(data) => (setName(data))}
                errorMessage="Enter your name boi"
            />
            <WildName>{name}</WildName>    
        </div>
    );
}

export default RandomName