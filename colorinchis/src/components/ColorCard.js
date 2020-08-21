import React from "react";

// interface colorProps {
//   id: string;
//   name: string;
//   desc: string;
//   value: string;
//   hideItem: function;
//   removeItem: function;
// }

const colorCard = (props) => {
  // mapeamos las props
  const { id, name, desc, value, hideItem } = props;

  return (
    <div className="colorCard">
      <p>{id}</p>
      <p>{name}</p>
      <p>{desc}</p>
      <div className="colorCard__ball" style={{ backgroundColor: value }}>
        {value}
      </div>
      <button onClick={() => hideItem(id)}>Ocultar</button>
    </div>
  );
};

export default colorCard;
