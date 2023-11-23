import React, { useState } from "react";

const Texter = () => {
  const [text, setText] = useState("");
  const validateText = () => {
    if (text.length === 0) {
      // setText("Please enter some text Here first....");
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
    // const words = text.split("");
    const words = text.split(/[ ,.]+/);
    const capitalized = words.map(
      (word) => word.charAt(0).toUpperCase() + word.slice(1)
    );
    setText(capitalized.join(" "));
  };

  const clHandler = () => {
    validateText();
    setText("");
  };

  const exspHandler = () => {
    validateText();
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
  };

  const copHandler = async () => {
    validateText();
    try {
      await navigator.clipboard.writeText(text);
      alert("Content copied to clipboard");
    } catch (err) {
      console.error("Failed to copy: ", err);
    }
  };

  return (
    <>
      <div className="container my-5">
        <div className="row text-center">
          <div className="col-md-8 mx-auto">
            <h1 className="text-center shadow-sm rounded">Text Analyzer</h1>
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
                className="btn btn-primary m-2 fw-bold shadow-sm"
                onClick={upHandler}
              >
                Upper Case
              </button>
              <button
                type="button"
                className="btn btn-primary m-2 fw-bold shadow-sm"
                onClick={loHandler}
              >
                Lower Case
              </button>
              <button
                type="button"
                className="btn btn-primary m-2 fw-bold shadow-sm"
                onClick={cpHandler}
              >
                Capitalize
              </button>
              <button
                type="button"
                className="btn btn-primary m-2 fw-bold shadow-sm"
                onClick={clHandler}
              >
                Clear
              </button>
              <button
                type="button"
                className="btn btn-primary m-2 fw-bold shadow-sm"
                onClick={copHandler}
              >
                Copy Text
              </button>
              <button
                type="button"
                className="btn btn-primary m-2 fw-bold shadow-sm"
                onClick={exspHandler}
              >
                Remove Spaces
              </button>
            </form>
          </div>
          <div className="col-md-8 mx-auto">
            <h1 className="text-center py-4 shadow-sm rounded">Text Summary</h1>
            <div className="sum_wrp p-5 shadow rounded">
              <div className="sum_items">
                <span className="btn btn-dark my-2 p-2 rounded">
                  Characters
                </span>
                <span>{text.length}</span>
              </div>
              <div className="sum_items">
                <span className="btn btn-dark my-2 p-2 rounded">Words</span>
                <span>
                  {
                    text.split(/\s+/).filter((element) => {
                      return element.length !== 0;
                    }).length
                  }
                </span>
              </div>
              <div className="sumr_items">
                <h4>Preview</h4>
                <p className="p-3 border border-2 border-dark rounded preview">
                  {text.length > 0
                    ? text
                    : "Enter some text in the box above to preview here..."}
                </p>
              </div>
              <p className="pt-2">
                Designed & Developed by |<b> M.Rizwan</b>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Texter;
