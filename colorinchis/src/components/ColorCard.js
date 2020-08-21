import React from "react";

// interface colorProps {
//   id: string;
//   name: string;
//   desc: string;
//   value: string;
// }

const colorCard = (props) => {
  // mapeamos las props
  const { id, name, desc, value } = props;

  return (
    <div className="colorCard">
      <p>{id}</p>
      <p>{name}</p>
      <p>{desc}</p>
      <div className="colorCard__ball" style={{ backgroundColor: value }}>
        {value}
      </div>
    </div>
  );
};

export default colorCard;
