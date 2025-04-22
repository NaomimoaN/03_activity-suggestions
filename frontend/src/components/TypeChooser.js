import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

function TypeChooser() {
  const [types, setTypes] = useState([
    "recreational",
    "education",
    "social",
    "busywork",
    "charity",
    "cooking",
    "relaxation",
    "diy",
  ]);

  const [chooseType, setChooseType] = useState(null);

  const handleTypeClick = (type) => {
    setChooseType(type);
  };

  return (
    <div>
      <h1>Type Chooser</h1>
      <ul>
        {types.map((type, index) => (
          <li
            key={index}
            href="#"
            onClick={(e) => {
              e.preventDefault();
              handleTypeClick(type);
            }}
          >
            {type}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TypeChooser;
