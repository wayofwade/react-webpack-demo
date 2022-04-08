/**
 * 首页
 */
import { useEffect } from "react";
import logo from "./logo.svg";
import Z from "./Z.png";
import Z1 from "./statics/Z1.png";
import "./App.css";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

const App = () => {
  const history = useNavigate();
  const { t } = useTranslation();
  useEffect(() => {
    // ddd
  }, []);

  const jumpPath = (pathname) => {
    history({ pathname: pathname, search: "test=22222" });
  };

  const dom = (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <a
          className="App-link"
          onClick={() => {
            jumpPath("/test2");
          }}
          rel="noopener noreferrer"
        >
          跳转测试页面22222{t("home.title")}
        </a>
        <img src={Z1} className="App-Z" alt="Z" />
        <a
          className="App-link"
          onClick={() => {
            jumpPath("/test1");
          }}
          rel="noopener noreferrer"
        >
          跳转测试页面111
        </a>
        <img src={Z} className="App-Z" alt="Z" />
      </header>
    </div>
  );

  return dom;
};
export default App;
