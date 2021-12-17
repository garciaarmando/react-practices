import "./App.css";
import MyPageContext from "./components/MyPageContext";
import MyPage from "./components/MyPage";

function App() {
  return (
    <div>
      <h1>React Context API</h1>
      <a
        href="https://es.reactjs.org/docs/context.html"
        target="_blank"
        rel="noreferrer">
        Documentation
      </a>
      <MyPageContext />
      <br />
      <hr />
      <br />
      <MyPage />
    </div>
  );
}

export default App;
