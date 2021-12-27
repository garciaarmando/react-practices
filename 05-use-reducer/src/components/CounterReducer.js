import { useReducer } from "react";

const initialState = { contador: 0 };

const reducer = (state, action) => {
  switch (action.type) {
    case "INCREMENT":
      return { contador: state.contador + 1 };
    case "DECREMENT":
      return { contador: state.contador - 1 };
    default:
      return state;
  }
};

const CounterReducer = () => {
  // const [contador, setContador] = useState(0);
  const [state, dispatch] = useReducer(reducer, initialState);

  const sumar = () => dispatch({ type: "INCREMENT" });
  const restar = () => dispatch({ type: "DECREMENT" });
  return (
    <div style={{ textAlign: "center" }}>
      <h3>Counter with useReducer</h3>
      <button onClick={sumar}>+</button>
      <button onClick={restar}>-</button>
      <p>{state.contador}</p>
    </div>
  );
};

export default CounterReducer;
