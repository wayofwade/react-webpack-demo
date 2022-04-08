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
          测试home页面2
        </a>
      </header>
    </div>
  );
};

export default Home;
