import { useReducer } from "react";

const initialState = { contador: 0 };

const TYPES = {
  INCREMENT_5: "INCREMENT_5",
  INCREMENT: "INCREMENT",
  RESET: "RESET",
  DECREMENT: "DECREMENT",
  DECREMENT_5: "DECREMENT_5",
};

const reducer = (state, action) => {
  switch (action.type) {
    case TYPES.INCREMENT_5:
      return { contador: state.contador + action.payload };
    case TYPES.INCREMENT:
      return { contador: state.contador + 1 };
    case TYPES.RESET:
      return initialState;
    case TYPES.DECREMENT_5:
      return { contador: state.contador - action.payload };
    case TYPES.DECREMENT:
      return { contador: state.contador - 1 };

    default:
      return state;
  }
};

const CounterReducer = () => {
  // const [contador, setContador] = useState(0);
  const [state, dispatch] = useReducer(reducer, initialState);

  const sumar5 = () => dispatch({ type: TYPES.INCREMENT_5, payload: 5 });

  const sumar = () => dispatch({ type: TYPES.INCREMENT });

  const reset = () => dispatch({ type: TYPES.RESET });

  const restar = () => dispatch({ type: TYPES.DECREMENT });

  const restar5 = () => dispatch({ type: TYPES.DECREMENT_5, payload: 5 });

  return (
    <div style={{ textAlign: "center" }}>
      <h3>Counter with useReducer</h3>
      <button onClick={sumar5}>+5</button>
      <button onClick={sumar}>+</button>
      <button onClick={reset}>0</button>
      <button onClick={restar}>-</button>
      <button onClick={restar5}>-5</button>
      <p>{state.contador}</p>
    </div>
  );
};

export default CounterReducer;
