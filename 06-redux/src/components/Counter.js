import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  DECREMENT,
  DECREMENT_5,
  INCREMENT,
  INCREMENT_5,
  RESET,
} from "../types";

const Counter = () => {
  const state = useSelector(state => state);
  const dispatch = useDispatch();

  return (
    <div>
      <h2>Redux Counter</h2>
      <nav>
        <button onClick={() => dispatch(INCREMENT_5())}>+5</button>
        <button onClick={() => dispatch(INCREMENT())}>+1</button>
        <button onClick={() => dispatch(RESET())}>Reset 0</button>
        <button onClick={() => dispatch(DECREMENT_5())}>-5</button>
        <button onClick={() => dispatch(DECREMENT())}>-1</button>
      </nav>
      <h3>{state.contador}</h3>
    </div>
  );
};

export default Counter;
