import React, { useState } from "react";

const Texter = () => {
  const [text, setText] = useState("");
  const validateText = () => {
    if (text.length === 0) {
      alert("Please enter some text in the box....");
    }
  };

  const handleChange = (e) => {
    setText(e.target.value);
  };
  const upHandler = () => {
    validateText();
    let newText = text.toUpperCase();
    setText(newText);
  };
  const loHandler = () => {
    validateText();
    let newText = text.toLowerCase();
    setText(newText);
  };
  const cpHandler = () => {
    validateText();
    const words = text.split(" ");
    const capitalized = words.map(
      (word) => word.charAt(0).toUpperCase() + word.slice(1)
    );
    return setText(capitalized.join(" "));
  };
  const clHandler = () => {
    validateText();
    setText("");
  };
  return (
    <>
      <div className="container my-5">
        <div className="row text-center">
          <div className="col-md-8 mx-auto">
            <h1 className="text-center">Text Analyzer</h1>
            <form className="p-3 txtr_form shadow rounded">
              <h5>Enter text below to analyze</h5>

              <textarea
                className="form-control border border-2 border-dark rounded mb-3"
                id="txt"
                rows="6"
                onChange={handleChange}
                value={text}
              ></textarea>
              <button
                type="button"
                className="btn btn-primary m-2"
                onClick={upHandler}
              >
                Upper Case
              </button>
              <button
                type="button"
                className="btn btn-primary m-2"
                onClick={loHandler}
              >
                Lower Case
              </button>
              <button
                type="button"
                className="btn btn-primary m-2"
                onClick={cpHandler}
              >
                Capitalize
              </button>
              <button
                type="button"
                className="btn btn-primary m-2"
                onClick={clHandler}
              >
                Clear
              </button>
            </form>
          </div>
          <div className="col-md-8 mx-auto">
            <h1 className="text-center py-4">Text Summary</h1>
            <div className="sum_wrp p-5 shadow rounded">
              <div className="sum_items">
                <span className="btn btn-dark my-2 p-2 rounded">
                  Characters
                </span>
                <span>{text.length}</span>
              </div>
              <div className="sum_items">
                <span className="btn btn-dark my-2 p-2 rounded">Words</span>
                <span>{text.split(" ").length}</span>
              </div>
              <div className="sumr_items">
                <h4>Preview</h4>
                <p className="p-3 border border-2 border-dark rounded preview">
                  {text}
                </p>
              </div>
              <p className="py-2">
                Design & Developed by |<b> M.Rizwan</b>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Texter;
