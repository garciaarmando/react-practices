import Contador from "./components/Contador";

function App() {
  return (
    <div>
      <h3>Memoization in React</h3>

      <p>The three options that we have are:</p>

      <h4>
        <a href="https://es.reactjs.org/docs/react-api.html#reactmemo">
          React Memo
        </a>
      </h4>

      <ul>
        <li>Memorized a component</li>
        <li>
          Memorized again when their <b>props</b> change
        </li>
        <li>Avoids unseful re-renders</li>
        <li>
          You have to avoid their use always that you can because it might be
          more expensive the memorization task than the re-render of the
          component
        </li>
      </ul>
      <h4>Use it when:</h4>
      <ul>
        <li>You have a lot of elements rendered in a list</li>
        <li>You called data from an API</li>
        <li>a component becomes too heavy</li>
        <li>You have performance alerts in the console</li>
      </ul>

      <hr />

      <h4>
        <a href="https://es.reactjs.org/docs/hooks-reference.html#usecallback">
          useCallback
        </a>
      </h4>
      <ul>
        <li>
          You can use it to memorize functions, this will avoid to re-define
          that functions in every render of the component due a change of it's
          state variables.
        </li>
      </ul>
      <h4>Use it when:</h4>
      <ul>
        <li>
          Everytime when you are <b>passing a function like a prop</b> to a
          memorized component. Remember to encapsule the functions passed like a
          prop into a useCallback expression.
        </li>
        <li>
          Always that you give a function like a parameter of an useEffect
        </li>
      </ul>

      <hr />

      <h4>
        <a href="https://es.reactjs.org/docs/hooks-reference.html#usememo">
          useMemo
        </a>
      </h4>
      <ul>
        <li>Memorize a calculated value, that is, the result of a function</li>
        <li>It generates computed properties</li>
      </ul>
      <h4>Use it when:</h4>
      <ul>
        <li>On heavy process that requires complex calculations</li>
      </ul>
      <hr />

      <Contador />
    </div>
  );
}

export default App;
