import React, { useState } from "react";
import { text } from "./data";
import "./App.css";

function App() {
  const [paragraphs, setParagraphs] = useState([]);
  const [number, setNumber] = useState(0);
  const generateParagraph = () => {
    if (number < 0) {
      setParagraphs(text.slice(0, 1));
    } else if (number > text.length) {
      setParagraphs(text.slice(0, text.length));
    } else setParagraphs(text.slice(0, number));
  };

  return (
    <div className="center divColor">
      <div className="mesi">
        <h1>Paragraph generator</h1>
        <label for="paragraph">Paragraphs</label>
        {"   "}
        <input
          type="number"
          value={number}
          onChange={(e) => {
            setNumber(e.target.value);
          }}
        />
        {"      "}
        {"   "}
        <button onClick={generateParagraph}>Generate</button>
      </div>
      <br></br>
      <br></br>
      <p>
        {paragraphs.map((element, index) => {
          return <p>{element}</p>;
        })}
      </p>
    </div>
  );
}

export default App;
