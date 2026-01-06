import React, { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Textforms from "./components/Textforms";
import About from "./components/About";
import Alert from "./components/Alert";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({ msg: message, type });
    setTimeout(() => setAlert(null), 2000);
  };

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.className = "bg-dark text-light";
      showAlert("Dark mode enabled", "success");
    } else {
      setMode("light");
      document.body.className = "bg-light text-dark";
      showAlert("Light mode enabled", "success");
    }
  };

  const changeThemeColor = (color) => {
    document.body.className = `bg-${color} ${
      color === "warning" || color === "light" ? "text-dark" : "text-light"
    }`;
    showAlert(`${color} theme applied`, "success");
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
          <Route path="/about" element={<About mode={mode} />} />
          <Route
            path="/"
            element={
              <Textforms
                heading="Try TextUtils - Word Counter & Character Counter"
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
