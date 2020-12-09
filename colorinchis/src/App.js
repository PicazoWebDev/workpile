// import React, { useState, useEffect } from "react";
import React, { useState } from "react";

import "./App.css";
import Header from "./components/Header";
import Menu from "./components/Menu";
import Catalogue from "./components/Catalogue";
// import ColorCard from "./components/ColorCard";


const app = () => {
  const [brandsList, setBrandsList] = useState(
    [{
      id: "Docapost",
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
        }
      ]
    },
    {
      id: "Santander",
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
      ]
    }]
  )

  const [brandState, setBrandState] = useState({...brandsList[0]});

  // useEffect(()=>{
  //   let newBrandsList = [...brandsList];
  //   newBrandsList.map((brand, index)=>{
  //     if (brand.id === brandState.id){
  //       newBrandsList[index] = brandState;
  //     }
  //   });
  //   setBrandsList(newBrandsList);
  // }, [brandState]);

  const updateBrandsList = () => {
    let newBrandsList = [...brandsList];
    newBrandsList.map((brand, index)=>{
      if (brand.id === brandState.id){
        newBrandsList[index] = brandState;
      }
    });
    setBrandsList(newBrandsList);
  }

  const removeColorHandler = (colorIndex) => {
    let brand = {...brandState};
    brand.colors.splice(colorIndex, 1);
    setBrandState(brand);
    updateBrandsList();
  };

  const setColorCodeHandler = (event, colorIndex) => {
    let brand = { ...brandState};
    brand.colors[colorIndex].value = event.target.value;
    setBrandState(brand);
    updateBrandsList();
  };

  const changeProjectHandler = (brandId) => {
    brandsList.map((brand) => {
      if (brand.id === brandId){
        setBrandState({...brand});
        updateBrandsList();
      }
    });
  }

  const intro = (
    <p className="App-intro">
      The colorinchis project to handle cool CSS & designs
    </p>
  );

  const [userName, setUserName] = useState ("Carlos");


  return (
    <div className="App">
      <Header />
      <Menu projects={brandsList} changeProjectHandler={changeProjectHandler}/>
      {intro}
      <h2>{brandState.id}</h2>
      <Catalogue colors={brandState.colors} removeColorHandler={removeColorHandler} setColorCodeHandler={setColorCodeHandler} />
    </div>
  );
};

export default app;