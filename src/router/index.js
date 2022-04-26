import React, { Component } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // 引入routerdom

import Test1 from "../home/App"; // 导入的组件
import Test2 from "../home/App2";
import App from "../App";
import Login from "../login/App"; // 登陆的组件

class Home extends Component {
  render() {
    return (
      <Router>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/test1" element={<Test1 />} />
          <Route path="/test2" element={<Test2 />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Router>
    );
  }
}

export default Home;
