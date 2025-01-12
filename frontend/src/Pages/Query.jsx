import "./Query.css"
import TextField from "@mui/material/TextField";
import React, { useState } from 'react';

function Query() {
    const [input, setInput] = useState('');
    const [submittedInput, setSubmittedInput] = useState('');

    const handleInputChange = (event) => {
        setInput(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault(); 
        setSubmittedInput(input);
    };

    const handleKeyDown = (event) => {
        if (event.key === 'Enter') { 
            handleSubmit(event);
        }
    };
    return (
        <>
            <div id='image'>
                <h2 id='introtext'><b id="greentext">Interested</b> in house plants? Start here.</h2>
                <h4 id='bodytext'>Start your journey by conversing with AI to give you some ideas.</h4>
            </div>
            <div id='box'>
                <p id='internal'>You typed: {submittedInput}</p>
            </div>
            <div className="main" id="searching">
                <div className="search">
                    <TextField
                    id="outlined-basic"
                    variant="outlined"
                    fullWidth
                    label="Search"
                    value={input}
                    onChange={handleInputChange}
                    onKeyDown={handleKeyDown}
                    />
                </div>
            </div>
        </>
    );
}

export default Query