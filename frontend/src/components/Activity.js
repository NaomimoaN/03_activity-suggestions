import axios from "axios";
import React, { useState, useEffect } from "react";

function Activity({ type }) {
    const [activity, setActivity] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

      const fetchActivity = async () => {

        if (!type) return;
        setLoading(true);
        setError(false);

        try {
          const response = await axios.get(
            `https://apis.scrimba.com/bored/api/activity?type=${type}`
          );
          setActivity(response.data.activity);
        } catch (error) {
          setError(error);
          console.error("Error fetching activity:", error);
        } finally {
          setLoading(false);
        }
      };



    useEffect(()=>{
        fetchActivity();
    }, [type])

    const handleButtonClick = (e) => {
        e.preventDefault();
        fetchActivity();
    }

    // if (!type) return <p>Please select a type to see an activity.</p>; // type が未選択の場合のメッセージ
    // if (loading) return <p>Loading...</p>;
    // if (error) return <p>Error: {error.message}</p>;

    return (
      <div class="containers">
        <h1>Try this activity!!</h1>
        <h2>Type: {type}</h2>
        <p className="activity">{activity ? activity : "please choose a type of activities on the left"}</p>
        <button onClick={handleButtonClick}>Try another one</button>
      </div>
    );
    

}

export default Activity;