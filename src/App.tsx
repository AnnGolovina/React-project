import React, {useContext, useState, Dispatch} from "react";
import { Counter } from "./components/Counter";
import { Users } from "./components/Users";

import "./App.css";
import { MainContextProvider } from "./context/MainContext";
import { Posts } from "./components/Posts";

function App() {
  return (
    <div className="App">
      <MainContextProvider>
      <Counter
        value="VALUE"
        name="Ann"
        age={10}
        arr={[1, 2, 3, 4, 5]}
        fn={() => console.log("!!!")}
      />
      <Users />
      <Posts/>
      </MainContextProvider>
    </div>
  );
}

export default App;
