import React, {useState} from 'react'

import PropTypes from 'prop-types'


export default function TextForm(props) {
  
  const handleUpClick = ()=>{
        // console.log("Convert to Uppercase clicked")
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Text Converted to UpperCase","success")
  }
  
  const handleLoClick = ()=>{
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Text Converted to LowerCase","success")
  }

  const handleClearClick = ()=>{
    let newText = '';
    setText(newText);
    props.showAlert("Successfully Cleared the Text","warning")
  }

  const handleOnChange = (event)=>{
    // console.log("On Changed")
    setText(event.target.value)
  }

  const handleCopy = ()=>{
    let text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value)
    props.showAlert("Text Copied!","success")
  }

  const handleExtraSpaces = ()=>{
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "))
    props.showAlert("Extra Spaces Removed","warning")
  }
  const [text,setText] = useState('');
  return (
    <>
      <div className='container'>
        <h1 className='my-3' style={{color:props.mode==='dark'?'white':'black'}}>{props.heading}</h1>
        <div className="mb-3">
            <textarea className='form-control' name="" id="myBox" rows="8" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode==='dark'?'grey':'white',color:props.mode==='dark'?'white':'black'}}></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to UpperCase</button>
        <button className="btn btn-primary mx-2" onClick={handleLoClick}>Convert to LowerCase</button>
        <button className="btn btn-primary mx-2" onClick={handleClearClick}>Clear Text</button>
        <button className="btn btn-primary mx-2" onClick={handleCopy}>Copy Text</button>
        <button className="btn btn-primary mx-2" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
        
      </div>

      <div className="container my-3" style={{color:props.mode==='dark'?'white':'black'}}>
        <h1>Your Text Summary Is Here</h1>
        <p>{text.split(" ").length} Words, {text.length} Charactres</p>
        <p>{0.008 * text.split(" ").length} Minutes to read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter text to Preview"}</p>
      </div>
    </>
    
  )
}

TextForm.propType = {
    heading : PropTypes.string.isRequired,
}
