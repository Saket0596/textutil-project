import "./App.css";
import About from "./components/About";
import Navbar from "./components/Navbar";
import Textform from "./components/Textform";
import React, { useState } from "react";
import Alert from "./components/Alert";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light"); //weather Dark Mode is Enabled or not
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#020218";
      showAlert("Dark mode has been Enabled", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been Enabled", "success");
    }
  };
  return (
    <>
     <BrowserRouter>
      <Navbar
        title="TextUtils"
        mode={mode}
        about="About-Us"
        toggleMode={toggleMode}
      />
      <div className="container my-3">
        <Alert alert={alert} />

       
          <Routes>
            <Route
              exact path="/"
              element={
                <Textform
                  showAlert={showAlert}
                  heading="Enter Your Text Below"
                  mode={mode}
                />
              }
            />

            <Route exact path="about" element={<About mode={mode}/>} />

          </Routes>
        
      </div>
      </BrowserRouter>
    </>
  );
}

export default App;
