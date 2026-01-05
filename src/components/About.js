// import React, { useState } from "react";
import React from "react";

export default function About(props) {
  // const [myStyle, setMyStyle] = useState({
  //   color: "white",
  //   backgroundColor: "black",
  // });
  let myStyle = {
    color: props.mode === "dark" ? "white" : "#042743",
    backgroundColor: props.mode === "dark" ? "rgba(23, 90, 141, 1)" : "white",
    border: "2px solid",
    borderColor: props.mode === "dark" ? "rgba(23, 90, 141, 1)" : "white",
  };
  // const toggleStyle = () => {
  //   if (myStyle.color === "white") {
  //     setMyStyle({
  //       color: "black",
  //       backgroundColor: "white",
  //     });
  //   } else {
  //     setMyStyle({
  //       color: "white",
  //       backgroundColor: "black",
  //     });
  //   }
  // };

  return (
    <div
      className="container"
      style={{ color: props.mode === "dark" ? "white" : "#326289ff" }}
    >
      <h1 className="my-3">About TextUtils</h1>

      <div className="accordion" id="accordionExample" style={myStyle}>
        {/* Accordion Item 1 */}
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button"
              type="button"
              style={myStyle}
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              <strong> TextUtils Overview</strong>
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={myStyle}>
              TextUtils is a web application that allows you to manipulate and
              analyze text quickly. You can convert text to uppercase,
              lowercase, remove extra spaces, and copy text with ease.
            </div>
          </div>
        </div>

        {/* Accordion Item 2 */}
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              style={myStyle}
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              <strong>Features</strong>
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={myStyle}>
              Key features include text transformation, removing extra spaces,
              copying text to clipboard, and providing live word and character
              counts. TextUtils is designed to make text editing faster and
              simpler.
            </div>
          </div>
        </div>

        {/* Accordion Item 3 */}
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              style={myStyle}
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
              <strong>Why Use TextUtils?</strong>
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={myStyle}>
              TextUtils is lightweight, fast, and user-friendly. It helps
              students, professionals, and developers save time by making text
              editing and formatting tasks easy and convenient.
            </div>
          </div>
        </div>
      </div>

      {/* Dark/Light Mode Toggle Button */}
      <div className="container my-3">
        {/* <button onClick={toggleStyle} className="btn btn-danger">
          Enable Dark/Light Mode
        </button> */}
      </div>
    </div>
  );
}
