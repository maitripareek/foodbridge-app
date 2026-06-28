import React, { useEffect, useState } from "react";
import axios from "axios";

function FoodList() {
  const [foods, setFoods] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/api/food")
      .then(res => setFoods(res.data));
  }, []);

  return (
    <div>
      {foods.map(food => (
        <div key={food._id}>
          <h3>{food.foodType}</h3>
          <p>{food.location}</p>
          <p>{food.status}</p>
        </div>
      ))}
    </div>
  );
}

export default FoodList;