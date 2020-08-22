import React, { useState } from "react";
import "./App.css";
import Validation from "./components/Validation";
import Charbox from "./components/Charbox";

const app = () => {
  const [inputValueLengthState, setInputValueLengthState] = useState(0);
  const [inputValueState, setInputValueState] = useState("");

  const inputOnChangeHandler = (event) => {
    setInputValueState(event.target.value);
    setInputValueLengthState(event.target.value.length);
  };

  const removeCharHandler = (charIndex) => {
    let textCopy = [...inputValueState];
    textCopy.splice(charIndex, 1);

    setInputValueState(textCopy.join(""));
  };

  return (
    <div className="App">
      <input
        type="text"
        onChange={inputOnChangeHandler}
        value={inputValueState}
      />

      <Validation valueLength={inputValueLengthState}></Validation>

      {[...inputValueState].map((char, index) => {
        return (
          <Charbox
            char={char}
            removeCharHandler={() => removeCharHandler(index)}
          ></Charbox>
        );
      })}
    </div>
  );
};

export default app;
