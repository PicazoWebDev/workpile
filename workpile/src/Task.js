import React from "react";

const task = (props) => {
  //mapeamos las props
  let name = props.name;
  let assignedTo = props.assignedTo;
  let status = props.status;
  return (
    <div className="task">
      <p>TAREA: {name}</p>
      <p>ASIGNADA A: {assignedTo}</p>
      <p>ESTADO: {status}</p>
    </div>
  );
};

export default task;
