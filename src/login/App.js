/**
 * 首页
 */
import { useEffect } from "react";

const Home = () => {
  useEffect(() => {
    setTimeout(() => {
      document.title = "Hello React";
    });
  }, []);
  return (
    <div className="App">
      <header className="App-header">
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          登陆页面
        </a>
      </header>
    </div>
  );
};

export default Home;
