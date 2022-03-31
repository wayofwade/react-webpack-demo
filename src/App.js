/**
 * 首页
 */
import logo from './logo.svg';
import Z from './Z.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <img src={Z} className="App-Z" alt="Z" />
        <p>
          Edit0hhhhh呵呵呵呵呵呵呵 <code>src/App.js</code> and save to reload.
        </p>
        <img src={require('./Z.png')} className="App-Z" alt="Z" />
        <img src={'https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg'} className="App-Z" alt="Z" />

        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
