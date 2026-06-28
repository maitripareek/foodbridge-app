import React from "react";
import "../styles/LoginPage.css";

function ForgotPassword() {
  return (
    <div className="auth-page">
      <div className="auth-card">

        <h1>Reset Password 🔑</h1>
        <p>Enter your email to reset your password</p>

        <input
          type="email"
          placeholder="Enter your email"
        />

        <button>
          Send Reset Link
        </button>

      </div>
    </div>
  );
}

export default ForgotPassword;