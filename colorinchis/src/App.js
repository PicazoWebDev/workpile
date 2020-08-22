import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import ColorCard from "./components/ColorCard";

const app = (props) => {
  const [brandState, setBrandState] = useState({
    id: "Docapost",
  });
  const [colorsState, setColorsState] = useState({
    colors: [
      {
        id: "Brand color standard",
        name: "Cobalt",
        value: "#0000ff",
        desc: "Color primario de la marca",
        show: true,
      },
      {
        id: "Brand color alt",
        name: "Cobalt - light",
        value: "#417cff",
        desc: "Color primario en claro",
        show: true,
      },
      {
        id: "Brand color opp",
        name: "Cobalt - dark",
        value: "#00008c",
        desc: "Color primario en claro",
        show: true,
      },
    ],
  });

  const setColor = () => {
    setBrandState({
      id: "Santander",
    });
    setColorsState({
      colors: [
        {
          id: "Brand color",
          name: "SuperRed",
          value: "#ff0000",
          desc: "Color primario de la marca",
          show: true,
        },
        {
          id: "Brand color alt",
          name: "Notanred",
          value: "#ec0000",
          desc: "Color primario de la marca",
          show: true,
        },
        {
          id: "Brand color dark",
          name: "Dark",
          value: "#aa2222",
          desc: "Color primario de la marca",
          show: true,
        },
      ],
    });
  };

  const hideColor = (colorId) => {
    let newColors = colorsState.colors;
    const targetIndex = newColors.findIndex((color) => color.id === colorId);
    newColors[targetIndex].show = false;
    setColorsState({ colors: newColors });
  };

  const removeColor = (colorId) => {
    setColorsState({
      colors: colorsState.colors.filter((color) => color.id !== colorId),
    });
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">Welcome to Colorinchis</h1>
      </header>
      <p className="App-intro">
        The colorinchis project to handle cool CSS & designs
      </p>

      <h2>{brandState.id}</h2>

      <div className="catalogue">
        <ColorCard
          id={colorsState.colors[0].id}
          name={colorsState.colors[0].name}
          value={colorsState.colors[0].value}
          desc={colorsState.colors[0].desc}
          show={colorsState.colors[0].show}
          hideItem={hideColor}
        />
        <ColorCard
          id={colorsState.colors[1].id}
          name={colorsState.colors[1].name}
          value={colorsState.colors[1].value}
          desc={colorsState.colors[1].desc}
          show={colorsState.colors[1].show}
          hideItem={hideColor}
        />
        <ColorCard
          id={colorsState.colors[2].id}
          name={colorsState.colors[2].name}
          value={colorsState.colors[2].value}
          desc={colorsState.colors[2].desc}
          show={colorsState.colors[2].show}
          hideItem={hideColor}
        />
      </div>
      <button className="button" onClick={setColor}>
        Set red color
      </button>
    </div>
  );
};

export default app;
