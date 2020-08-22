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

  // const removeColorHandler = (colorId) => {
  //   setColorsState({
  //     colors: colorsState.colors.filter((color) => color.id !== colorId),
  //   });
  // };

  const removeColorHandler = (colorIndex) => {
    let colors = colorsState.colors;
    colors.splice(colorIndex, 1);
    setColorsState({
      colors: colors,
    });
  };

  const setColorCodeHandler = (event, colorIndex) => {
    let color = { ...colorsState.colors[colorIndex] };
    color.value = event.target.value;

    let colors = [...colorsState.colors];
    colors[colorIndex] = color;

    setColorsState({ colors: colors });
  };

  const intro = (
    <p className="App-intro">
      The colorinchis project to handle cool CSS & designs
    </p>
  );

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">Welcome to Colorinchis</h1>
      </header>
      {intro}

      <h2>{brandState.id}</h2>

      <div className="catalogue">
        {colorsState.colors.map((color, index) => {
          return color.show ? (
            <ColorCard
              key={color.id}
              id={color.id}
              name={color.name}
              value={color.value}
              desc={color.desc}
              removeItem={() => removeColorHandler(index)}
              setColorCode={(event) => setColorCodeHandler(event, index)}
            />
          ) : null;
        })}
      </div>
      <button className="button" onClick={setColor}>
        Set red color
      </button>
    </div>
  );
};

export default app;
