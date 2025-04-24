import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

function TypeChooser({ handleTypeClick }) {
  const [types] = useState([
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

  const onTypeClick = (type) => {
    setChooseType(type);
    // Pass the selected type to the parent component
    handleTypeClick(type);
    console.log("Selected type:", type);
  };

  return (
    <div class="containers">
      <h1>Type Chooser</h1>
      <h2>Choose type of activities</h2>
      <ul>
        {types.map((type, index) => (
          <li
            key={index}
            href="#"
            onClick={(e) => {
              e.preventDefault();
              onTypeClick(type);
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

//memo I tried to fetch the types from the API and it worked but I prefed static data rather than random data. So I commented out the code below for my further study.

// useEffect(() => {
//   // 複数のリクエストを送信
//   const fetchActivities = async () => {
//     try {
//       const requests = Array.from({ length: 8 }, () =>
//         axios.get(`https://apis.scrimba.com/bored/api/activity`)
//       );
//       const responses = await Promise.all(requests);
//       const activities = responses.map((response) => response.data.type);
//       const uniqueActivities = [...new Set(activities)]; // 重複を排除
//       setTypes(uniqueActivities); // 取得したすべての type をセット
//     } catch (error) {
//       console.error("There was an error fetching the types!", error);
//     }
//   };

//   fetchActivities();
// }, []);
