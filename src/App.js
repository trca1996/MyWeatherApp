import React from "react";
import "./App.scss";
import LeftSection from "./components/LeftSection";
import RightSection from "./components/RightSection";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <div className="app">
      <Sidebar />
      <LeftSection />
      <RightSection />
    </div>
  );
}

export default App;
