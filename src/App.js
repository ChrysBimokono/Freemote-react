import React, { useState } from "react";

import "./styles.css";

export default function App() {
  const firstName = "chrys";
  const middleName = "Enock";
  const showMiddleName = true;

  const [number, setNumber] = useState(0);
  const [textValue, SetTextValue] = useState("");
  const [formStage, setFormStage] = useState(0);
  const [names, setNames] = useState(["chrys"]);

  let content;
  if (formStage === 0) {
    content = (
      <>
        <h1>Let's talk JSX</h1>
        <div className="container">
          <h3>{firstName}</h3>
          {showMiddleName && <h5>{middleName}</h5>}
          <h2>{number}</h2>
          <button onClick={() => setNumber(number + 1)}>+</button>
          <input type="text" onChange={(e) => SetTextValue(e.target.value)} />
          {textValue.length > 10 ? textValue : "none"}
          <button onClick={() => setFormStage(formStage + 1)}> Next</button>
        </div>
      </>
    );
  }

  if (formStage === 1) {
    content = (
      <>
        <h1>Step 2</h1>
        <div className="container">
          <h3>{firstName}</h3>
          {showMiddleName && <h5>{middleName}</h5>}
          <h2>{number}</h2>
          <button onClick={() => setNumber(number + 1)}>+</button>
          <input type="text" onChange={(e) => SetTextValue(e.target.value)} />
          {textValue.length > 10 ? textValue : "none"}
          <button onClick={() => setFormStage(formStage + 1)}> Next</button>
          <button onClick={() => setFormStage(formStage - 1)}> Prev</button>
        </div>
      </>
    );
  }

  if (formStage === 2) {
    content = (
      <>
        {names.map((name) => (
          <div>{name}</div>
        ))}
        <button onClick={() => setNames([...names, "Jan"])}> Add name</button>
        <button onClick={() => setFormStage(formStage - 1)}> Prev</button>
      </>
    );
  }

  return (
    <div className="App" style={{ color: "red", fontWeight: "Bold" }}>
      {content}
    </div>
  );
}
