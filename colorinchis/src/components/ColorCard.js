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
    <div className="bcm-colorCard">
      <p>{id}</p>
      <p>{name}</p>
      <p>{desc}</p>
      <div className="bcm-colorCard__ball" style={{ backgroundColor: value }}>
        <input
          maxLength="7"
          className="bcm-colorCard__hexInput"
          type="text"
          value={value}
          onChange={setColorCode}
        />
      </div>
      <button className="button" onClick={removeItem}>
        Eliminar
      </button>
    </div>
  );
};

export default colorCard;
