import React, { useState } from 'react'

export default function TextForm(props) {

    const [text, setText] = useState('')
    const handleOnChange = (event) => {
        setText(event.target.value);
    }

    const handleUpperCase = () => {
        setText(text.toUpperCase());
    }

    const handleLowerCase = () => {
        setText(text.toLowerCase());
    }
    const handleClearText = () => {
        setText('');
    }
    const handleCopyText = () => {
        let copiedText = document.getElementById('myBox');
        copiedText.select();
        navigator.clipboard.writeText(copiedText.value);
    }
    let myStyle = {
        color: props.mode === 'light' ? 'black' : 'white',
        backgroundColor: props.mode === 'light' ? 'white' : 'black'
    }
    let color = `btn btn-${props.mode === 'light' ? 'dark' : 'light'}`;
    return (
        <div style={myStyle}>
            <h2> {props.heading} </h2>
            <div className="mb-3">
                <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="3" placeholder='Enter text here'></textarea>
            </div>
            <button className={`btn btn-${color} my-2 mx-2`} onClick={handleUpperCase}>Convert to UpperCase</button>
            <button className={`btn btn-${color} my-2 mx-2`} onClick={handleLowerCase}>Convert to LowerCase</button>
            <button className={`btn btn-${color} my-2 mx-2`} onClick={handleClearText}>Clear Text</button>
            <button className={`btn btn-${color} my-2 mx-2`} onClick={handleCopyText}>Copy Text</button>
            <div className="container my-3">
                <h2><u>Text Description</u></h2>
                <p>Text contains :
                    {text.split(' ').length} words and {text.length} characters
                </p>
                <p>Time needed to read: {0.008 * text.length} seconds</p>
            </div>
            <div className="container my-3">
                <h2>Preview</h2>
                <p> {text.length > 0 ? text : "Enter something to preview here: "} </p>
            </div>
        </div >)
}
