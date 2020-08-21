import React from "react";
import "./UserInput.css";

const userInput = (props) => {
  return (
    <div className="App-userInput">
      <input
        className="App-userInput__input"
        type="text"
        onChange={props.usernameHandler}
        value={props.username}
      />
    </div>
  );
};

export default userInput;
