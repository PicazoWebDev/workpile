import React from "react";

const validation = (props) => {
  const minLength = 5;

  return (
    <div>
      {props.valueLength >= minLength ? (
        <p>Input value is long enough</p>
      ) : (
        <p>Text too short</p>
      )}
    </div>
  );
};

export default validation;
