import CounterReducer from "./components/CounterReducer";
import CounterReducerEnhanced from "./components/CounterReducerEnhanced";
import ShoppingCart from "./components/ShoppingCart";

function App() {
  return (
    <div>
      <h1>useReducer</h1>
      <hr />
      <ShoppingCart />
      <hr />
      <CounterReducerEnhanced />
      <hr />
      <CounterReducer />
    </div>
  );
}

export default App;
