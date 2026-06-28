import React from "react";
import "../styles/RegisterPage.css";

function RegisterPage() {

  return (
    <div className="auth-page">
      <div className="auth-card">

        <h1>Register 📝</h1>
        <p>Create your FoodBridge account</p>

        <input
          type="text"
          placeholder="Full Name"
        />

        <input
          type="email"
          placeholder="Email"
        />

        <input
          type="tel"
          placeholder="Phone Number"
        />

        <input
          type="password"
          placeholder="Password"
        />

        <input
          type="password"
          placeholder="Confirm Password"
        />

        <button>
          Register
        </button>

      </div>
    </div>
  );
}

export default RegisterPage;