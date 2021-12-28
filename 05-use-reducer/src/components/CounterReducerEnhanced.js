import { useReducer } from "react";
import { TYPES } from "../actions/contadorActions";
import {
  contadorInit,
  contadorInitialState,
  contadorReducer,
} from "../reducers/contadorReducer";

const CounterReducerEnhanced = () => {
  const [state, dispatch] = useReducer(
    contadorReducer,
    contadorInitialState,
    contadorInit
  );

  const sumar5 = () => dispatch({ type: TYPES.INCREMENT_5, payload: 5 });

  const sumar = () => dispatch({ type: TYPES.INCREMENT });

  const reset = () => dispatch({ type: TYPES.RESET });

  const restar = () => dispatch({ type: TYPES.DECREMENT });

  const restar5 = () => dispatch({ type: TYPES.DECREMENT_5, payload: 5 });

  return (
    <div style={{ textAlign: "center" }}>
      <h3>Counter with useReducer (Enhanced)</h3>
      <button onClick={sumar5}>+5</button>
      <button onClick={sumar}>+</button>
      <button onClick={reset}>0</button>
      <button onClick={restar}>-</button>
      <button onClick={restar5}>-5</button>
      <p>{state.contador}</p>
    </div>
  );
};

export default CounterReducerEnhanced;
