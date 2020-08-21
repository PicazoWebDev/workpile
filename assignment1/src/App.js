import React, { useState } from "react";
import "./App.css";
import UserInput from "./components/userInput/UserInput";
import UserOutput from "./components/userOutput/UserOutput";

const app = () => {
  const [usernameState, setUsernameState] = useState("John Doe");
  const [userStyleState, setUserStyleState] = useState({});

  const usernameHandler = (event) => {
    setUsernameState(event.target.value);
    setUserStyleState({
      border: "2px solid #ff2222",
      backgroundColor: "#aa2222",
      color: "#ffffff",
    });
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">React course assignment 1</h1>
      </header>
      <main>
        <div className="App-userInput__row">
          <UserInput
            username={usernameState}
            usernameHandler={usernameHandler}
          ></UserInput>
        </div>
        <div className="App-userOutput__row">
          <UserOutput
            username={usernameState}
            userStyle={userStyleState}
          ></UserOutput>
          <UserOutput
            username={usernameState}
            userStyle={userStyleState}
          ></UserOutput>
          <UserOutput
            username={usernameState}
            userStyle={userStyleState}
          ></UserOutput>
        </div>
      </main>
    </div>
  );
};

export default app;
