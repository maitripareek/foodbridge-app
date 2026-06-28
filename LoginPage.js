import React from "react";
import { Link } from "react-router-dom";
import "../styles/LoginPage.css";

function LoginPage() {
  return (
    <div className="auth-page">
      <div className="auth-card">

        <h1>Login 🔐</h1>
        <p>Welcome back to FoodBridge</p>

        <input
          type="email"
          placeholder="Email"
        />

        <input
          type="password"
          placeholder="Password"
        />

        <div className="auth-options">
          <Link to="/forgot-password">
            Forgot Password?
          </Link>
        </div>

        <button>
          Login
        </button>

        <p className="auth-bottom-text">
          Don’t have an account?{" "}
          <Link to="/register">
            Register Now
          </Link>
        </p>

      </div>
    </div>
  );
}

export default LoginPage;