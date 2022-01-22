import React from "react";
import { Provider } from "react-redux";
import "./App.css";
import Counter from "./components/Counter";
import ReduxTheory from "./components/ReduxTheory";
import store from "./store";

function App() {
  return (
    <Provider store={store}>
      <div>
        <h1>Redux</h1>
        <Counter />
        <hr />
        <ReduxTheory />
      </div>
    </Provider>
  );
}

export default App;
