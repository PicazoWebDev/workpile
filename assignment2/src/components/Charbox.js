import React from "react";

const charbox = (props) => {
  return (
    <div className="charbox" onClick={props.removeCharHandler}>
      {props.char}
    </div>
  );
};

export default charbox;
