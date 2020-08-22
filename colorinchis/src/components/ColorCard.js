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
  const { id, name, desc, value, show, hideItem } = props;

  let style = {};
  if (!show) {
    style = { display: "none" };
  }

  return (
    <div className="colorCard" style={style}>
      <p>{id}</p>
      <p>{name}</p>
      <p>{desc}</p>
      <p>show: {show + ""}</p>
      <div className="colorCard__ball" style={{ backgroundColor: value }}>
        {value}
      </div>
      <button className="button" onClick={() => hideItem(id)}>
        Ocultar
      </button>
    </div>
  );
};

export default colorCard;
