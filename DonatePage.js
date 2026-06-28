import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import "../styles/DonatePage.css";

function DonatePage() {
  const [food, setFood] = useState({
    donorName: "",
    foodType: "",
    quantity: "",
    location: "",
    contact: "",
    expiryTime: "",
    description: ""
  });

  const handleChange = (e) => {
    setFood({
      ...food,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post("http://localhost:5000/api/food/add", food);

      toast.success("Food Donation Added Successfully 🎉");

      setFood({
        donorName: "",
        foodType: "",
        quantity: "",
        location: "",
        contact: "",
        expiryTime: "",
        description: ""
      });

    } catch (error) {
      console.log(error);
      toast.error("Donation failed. Check backend/server.");
    }
  };

  return (
    <div className="donate-page">
      <div className="donate-card">
        <h1>Donate Food 🍱</h1>
        <p>Help reduce food waste and feed people in need.</p>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="donorName"
            placeholder="Restaurant / Store Name"
            value={food.donorName}
            onChange={handleChange}
            required
          />

          <input
            type="text"
            name="foodType"
            placeholder="Food Name"
            value={food.foodType}
            onChange={handleChange}
            required
          />

          <input
            type="text"
            name="quantity"
            placeholder="Quantity e.g. 20 meals"
            value={food.quantity}
            onChange={handleChange}
            required
          />

          <input
            type="text"
            name="location"
            placeholder="Pickup Location"
            value={food.location}
            onChange={handleChange}
            required
          />

          <input
            type="tel"
            name="contact"
            placeholder="Contact Number"
            value={food.contact}
            onChange={handleChange}
            required
          />

          <input
            type="datetime-local"
            name="expiryTime"
            value={food.expiryTime}
            onChange={handleChange}
            required
          />

          <textarea
            name="description"
            placeholder="Additional Information"
            rows="4"
            value={food.description}
            onChange={handleChange}
          />

          <button type="submit">Donate Food</button>
        </form>
      </div>
    </div>
  );
}

export default DonatePage;