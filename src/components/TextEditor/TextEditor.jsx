import React, { useState } from "react";
import "../../App.css";


const TextEditor = (props) => {
  let [count,setCount] = useState(0)
  const [textArea, setTextArea] = useState("");
  const onChangeHandler = (e) => {
    setTextArea(e.target.value);
  };
  

  let uppercase = () => {
    let prev = textArea.toUpperCase();
    setTextArea(prev);
  };
  let lowercase = () => {
    let prev = textArea.toLowerCase();
    setTextArea(prev);

  };
 
 
  let clearAll = () => {
    setTextArea("");

  };

  const copyAll = () =>{
    let text = document.getElementById("mybox")
    text.select()
    navigator.clipboard.writeText(textArea)

  }
  


  return (

      

    <>
      <div className="container my-4 d-flex gap-3 flex-column">
        <h1 style={{color:props.TextColor}}>{props.heading}</h1>
        
        <textarea
          style={{border:"none",backgroundColor:props.NavColor,color:props.TextColor}}
          id="mybox"
          className="p-3 mx-5"
          rows="10"
          onChange={onChangeHandler}
          value={textArea}
          placeholder="Enter Your Text Here ..."
        ></textarea>

        <div className="d-flex gap-2 justify-content-center">
          <button className="btn btn-primary" onClick={uppercase} style={{ width: "10rem" }}>
            UpperCase
          </button>
          <button className="btn btn-primary"  onClick={lowercase} style={{ width: "10rem" }}>
            LowerCase
          </button>
          <button className="btn btn-primary"  onClick={copyAll} style={{ width: "10rem" }}>
            Copy Text
          </button>
          <button className="btn btn-danger"  onClick={clearAll} style={{ width: "10rem" }}>
            Clear
          </button>
        </div>
      </div>

      .<div className="container my-2" style={{color:props.TextColor}}>
        <h2>Your Text Summary</h2>
        <p>
          {textArea.split(" ").filter((elm)=>{return elm.length!=0}).length} words and {textArea.length} characters </p>
        <p>{0.004202 * textArea.split(" ").filter((elm)=>{return elm.length!=0}).length} minute read </p>
        <h4>Preview</h4>
        <p className="border rounded p-2">{
        textArea.length>0 ? textArea: "Enter something above in text editor to preview it ..."}</p>
      </div>
    </>
  );
};

export default TextEditor;
