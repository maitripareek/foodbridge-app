import React, { useState } from "react";
import axios from "axios";
import "./AddFood.css";

function AddFood() {

  const [food, setFood] = useState({
    donorName: "",
    foodType: "",
    quantity: "",
    location: "",
    expiryTime: ""
  });

  const submitFood = async () => {
    try {

      await axios.post(
        "http://localhost:5000/api/food/add",
        food
      );

      alert("Food Added Successfully!");

      setFood({
        donorName: "",
        foodType: "",
        quantity: "",
        location: "",
        expiryTime: ""
      });

    } catch (error) {
      console.log(error);
      alert("Error adding food");
    }
  };

  return (

    <div className="container">

      <div className="food-card">

        <h1>🍱 FoodBridge</h1>

        <p className="subtitle">
          Donate excess food to help needy people
        </p>

        <input
          type="text"
          placeholder="Donor Name"
          value={food.donorName}
          onChange={(e) =>
            setFood({ ...food, donorName: e.target.value })
          }
        />

        <input
          type="text"
          placeholder="Food Type"
          value={food.foodType}
          onChange={(e) =>
            setFood({ ...food, foodType: e.target.value })
          }
        />

        <input
          type="number"
          placeholder="Quantity"
          value={food.quantity}
          onChange={(e) =>
            setFood({ ...food, quantity: e.target.value })
          }
        />

        <input
          type="text"
          placeholder="Location"
          value={food.location}
          onChange={(e) =>
            setFood({ ...food, location: e.target.value })
          }
        />

        <input
          type="text"
          placeholder="Expiry Time"
          value={food.expiryTime}
          onChange={(e) =>
            setFood({ ...food, expiryTime: e.target.value })
          }
        />

        <button onClick={submitFood}>
          Donate Food
        </button>

      </div>

    </div>
  );
}

export default AddFood;