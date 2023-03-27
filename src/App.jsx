import { useState } from "react";
import Nav from "./components/Nav";
import Content from "./components/Content";
import Sidebar from "./components/Sidebar";
import Rightbar from "./components/Rightbar";

function App() {
  return (
    <div className="App">
      <div>
        <Nav />
      </div>
      <div>
        <Content />
      </div>
      <div>
        <Sidebar />
      </div>
      <div>
        <Rightbar />
      </div>
    </div>
  );
}

export default App;
