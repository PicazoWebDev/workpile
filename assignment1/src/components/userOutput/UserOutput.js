import React from "react";

const userOutput = (props) => {
  return (
    <div className="App-userOutput" style={props.userStyle}>
      <span className="App-userOutput__username">{props.username}</span>
      <p>Lorem ipsum dolor sit amet</p>
      <p>Demo paragraph</p>
    </div>
  );
};

export default userOutput;
