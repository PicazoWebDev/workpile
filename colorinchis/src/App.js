import React, { Component } from "react";
import logo from "./logo.svg";
// import "./styles.scss";
import "./App.css";
import ColorCard from "./components/ColorCard";

class App extends Component {
  state = {
    colors: [
      {
        id: "Brand color",
        name: "Cobalt",
        value: "#0000ff",
        desc: "Color primario de la marca",
      },
    ],
  };

  setColor = () => {
    this.setState({
      colors: [
        {
          id: "Brand color",
          name: "Santander",
          value: "#ec0000",
          desc: "Color primario de la marca",
        },
      ],
    });
  };
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Colorinchis</h1>
        </header>
        <p className="App-intro">
          The colorinchis project to handle cool CSS & designs
        </p>

        <ColorCard
          id={this.state.colors[0].id}
          name={this.state.colors[0].name}
          value={this.state.colors[0].value}
          desc={this.state.colors[0].desc}
        />

        <button onClick={this.setColor}>Set red color</button>
      </div>
    );
  }
}

export default App;
