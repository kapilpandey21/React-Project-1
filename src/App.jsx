import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import About from "./components/About/About";

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import TextEditor from "./components/TextEditor/TextEditor";

function App() {
const [TextColor,setTextColor] = useState("white")
const [NavColor,setNavColor] = useState("black")
const [BackColor,setBackColor] = useState("#106278")

const changeColor = () =>{
  if(NavColor==="white"){
    setNavColor("black")
    setTextColor("white")
    setBackColor("#106278")
  }
  else{
    setNavColor("white")
    setTextColor("black")
    setBackColor("white")
  }
}

  return (
    <>
      <BrowserRouter>
        <div style={{backgroundColor:BackColor,minHeight:"100vh"}}>
        <Navbar logo="ARIA&" changeColor={changeColor} TextColor={TextColor} NavColor={NavColor} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/texteditor" element={<TextEditor 
          changeColor={changeColor} TextColor={TextColor} NavColor={NavColor}  />} />
        </Routes>
        </div>
      </BrowserRouter>


    </>
  );
}

export default App;

{/* <Navbar title="AR" />

    <About />
    <Home />

<Home />
<About /> */}