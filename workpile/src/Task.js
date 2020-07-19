import React from "react";

const task = (props) => {
  return (
    <div className="task">
      <p>{props.taskName}</p>
    </div>
  );
};

export default task;
