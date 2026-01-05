import React, { useState } from "react";

export default function Textforms(props) {
  const [text, setText] = useState("");

  const handleUpClick = () => {
    setText(text.toUpperCase());
    props.showAlert?.("Converted to Uppercase!", "success");
  };

  const handleLoClick = () => {
    setText(text.toLowerCase());
    props.showAlert?.("Converted to Lowercase!", "success");
  };

  const handleClearClick = () => {
    setText("");
    props.showAlert?.("Text cleared!", "success");
  };

  const handleCopyClick = () => {
    navigator.clipboard.writeText(text);
    props.showAlert?.("Text copied to clipboard!", "success");
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const wordCount =
    text.trim().length === 0 ? 0 : text.trim().split(/\s+/).length;

  return (
    <>
      <div
        className="container"
        style={{ color: props.mode === "dark" ? "white" : "#042743" }}
      >
        <h1 className="mb-3"> {props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            style={{
              backgroundColor: props.mode === "dark" ? "#145183ff" : "white",
              color: props.mode === "dark" ? "white" : "#042743",
            }}
            rows="7"
          />
        </div>
        <button
          className="btn btn-primary mx-1 my-1"
          onClick={handleUpClick}
          disabled={text.length === 0}
        >
          Convert to Uppercase
        </button>
        <button
          className="btn btn-primary mx-1 my-1"
          onClick={handleLoClick}
          disabled={text.length === 0}
        >
          Convert to Lowercase
        </button>
        <button
          className="btn btn-info mx-1 my-1"
          onClick={handleClearClick}
          disabled={text.length === 0}
        >
          Clear
        </button>
        <button
          className="btn btn-danger mx-1 my-1"
          onClick={handleCopyClick}
          disabled={text.length === 0}
        >
          Copy
        </button>
      </div>

      <div
        className="container my-3"
        style={{ color: props.mode === "dark" ? "white" : "#042743" }}
      >
        <h2>Text Summary</h2>
        <p>
          <b>
            {wordCount} words and {text.length} characters
          </b>
        </p>
        <p>{(0.008 * wordCount).toFixed(2)} Minutes read</p>
        <h3>Preview</h3>
        <p>{text.length > 0 ? text : "Nothing to preview!"}</p>
      </div>
    </>
  );
}
