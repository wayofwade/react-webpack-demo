/**
 * 首页
 */
import { useEffect } from "react";
import logo from "./logo.svg";
import Z from "./Z.png";
import Z1 from "./statics/Z1.png";
import "./App.css";
import Home from "./home/App.js";

const App = () => {
  useEffect(() => {
    // ddd
  }, []);

  const dom = (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <img src={Z} className="App-Z" alt="Z" />
        <p>
          Edit0hhhhh呵呵呵呵2222ww <code>src/Apwwwwwwwwp.js</code> and save to
          reload.
        </p>
        <img src={Z1} className="App-Z" alt="Z" />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <Home />
    </div>
  );

  return dom;
};
export default App;
