import React from "react";
import { Provider } from "react-redux";
import "./App.css";
import ReduxTheory from "./components/ReduxTheory";
import store from "./store";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <h1>Redux</h1>
        <hr />
        <ReduxTheory />
      </div>
    </Provider>
  );
}

export default App;
