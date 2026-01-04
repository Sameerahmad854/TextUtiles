import React, { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Textforms from "./components/Textforms";
import About from "./components/About";
import Alert from "./components/Alert";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light"); // light/dark mode
  const [alert, setAlert] = useState(null); // alert state

  // show alert function
  const showAlert = (message, type) => {
    setAlert({ msg: message, type: type });
    setTimeout(() => setAlert(null), 2000);
  };

  // Dark/Light mode toggle
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#042743";
      showAlert("Dark mode has been enabled", "success");
      document.title = "TextUtils - Dark Mode";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled", "success");
      document.title = "TextUtils - Light Mode";
    }
  };

  // Change background to a custom color
  const changeThemeColor = (color) => {
    document.body.style.backgroundColor = color;
    showAlert(`Theme color changed!`, "success");
  };

  return (
    <Router>
      <Navbar
        title="TextUtils"
        mode={mode}
        toggleMode={toggleMode}
        changeThemeColor={changeThemeColor}
      />
      <Alert alert={alert} />
      <div className="container my-3">
        <Routes>
          <Route exact path="/about" element={<About />} />
          <Route
            exact
            path="/"
            element={
              <Textforms
                heading="Enter the Text to Analyse Below"
                mode={mode}
                showAlert={showAlert}
              />
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
