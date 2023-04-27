import React, { useState } from "react";

export default function Textform(props) {
const handleUpClick=()=>{
    console.log("Upper case was Clicket"+text);
    let newText = text.toUpperCase();
    setText(newText)
    props.showAlert("Converted to uppercase!","success")
}

const handleLoClick=()=>{
    console.log("Upper case was Clicket"+text);
    let newText = text.toLowerCase();
    setText(newText)
    props.showAlert("Converted to lowercase!","success")
}
const handleClearClick=()=>{
    console.log("Upper case was Clicket"+text);
    let newText = '';
    setText(newText)
    props.showAlert("All Clear!","success")
}
const handleOnChange=(event)=>{
    console.log("On change");
    setText(event.target.value);
    
}
  const [text, setText] = useState("");
//   text ="new Text";  //Wron way to change the state
    // setText("new Text"); // Correct Way to change the state
  return (
    <>
    <div className="conatainer"  style={{color:props.mode==='dark'?'white':'black'}}>
      <h1 >{props.heading}</h1>
      <div className="mb-3">
        {/* <label for="myBox" class="form-labels"></label> */}
        <textarea
          className="form-control"
          id="mybox"
          rows="8"
          border="2px"
          value={text}
          onChange={handleOnChange}
          style={{backgroundColor:props.mode==='dark'?'#13466e':'white',color:props.mode ==='dark'?'white':'#042743'}}
        ></textarea>
      </div>
      <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleUpClick}>Convert to Uppercase</button>
      <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleLoClick}>Convert to Lowercase</button>
      <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleClearClick}>Clear</button>
    </div>
    <div className="container my-3" style={{color:props.mode==='dark'?'white':'black'}}>
        <h3>Your Text summary</h3>
        <p>{text.split(/\s+/).filter((element)=>{
          return element.length!==0
        }).length} Words and {text.length}characters</p> disabled={text.length===0}
        <p>{0.008 * text.split(" ").filter((element)=>{
          return element.length!==0
        }).length} Minutes to read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Nothing to preview"}</p>
    </div>
    </>
  );
}
