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
  const { id, name, desc, value, removeItem, setColorCode } = props;

  return (
    <div className="colorCard">
      <p>{id}</p>
      <p>{name}</p>
      <p>{desc}</p>
      <div className="colorCard__ball" style={{ backgroundColor: value }}>
        <input
          maxLength="7"
          className="colorCard__hexInput"
          type="text"
          value={value}
          onChange={setColorCode}
        />
      </div>
      <button className="button" onClick={removeItem}>
        Ocultar
      </button>
    </div>
  );
};

export default colorCard;
