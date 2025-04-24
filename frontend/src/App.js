import React from "react";
import { useState, useEffect } from "react";
import TypeChooser from "./components/TypeChooser.js";
import Activity from "./components/Activity.js";
import "./App.css";

function App() {
  const [selectType, setSelectType] = useState(null);

  const handleTypeClick = (type) => {
    setSelectType(type);
    console.log("Selected type:", selectType);
  };

  return (
    <div className="App">
      <TypeChooser handleTypeClick={handleTypeClick} />
      <Activity type={selectType} />
    </div>
  );
}

export default App;
