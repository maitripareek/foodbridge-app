import React, { useState } from "react";
import axios from "axios";

function RegisterPage() {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = async (e) => {

    e.preventDefault();

    try {

      await axios.post(
        "http://localhost:5000/api/auth/register",
        {
          name,
          email,
          password
        }
      );

      alert("Registration Successful ✅");

      setName("");
      setEmail("");
      setPassword("");

    } catch (err) {

      alert("Registration Failed ❌");

    }

  };

  return (

    <div style={styles.container}>

      <div style={styles.card}>

        <h1 style={styles.heading}>
          Join FoodBridge ✨
        </h1>

        <p style={styles.subheading}>
          Create your account and help reduce food waste.
        </p>

        <form onSubmit={handleRegister}>

          <input
            type="text"
            placeholder="Enter Full Name"
            style={styles.input}
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />

          <input
            type="email"
            placeholder="Enter Email"
            style={styles.input}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <input
            type="password"
            placeholder="Enter Password"
            style={styles.input}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <button
            type="submit"
            style={styles.button}
          >
            Register
          </button>

        </form>

      </div>

    </div>
  );
}

const styles = {

  container: {
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "#f5f5f5"
  },

  card: {
    background: "white",
    padding: "40px",
    width: "420px",
    borderRadius: "15px",
    boxShadow: "0 0 20px rgba(0,0,0,0.1)",
    textAlign: "center"
  },

  heading: {
    color: "#ff6b35",
    marginBottom: "10px",
    fontSize: "35px"
  },

  subheading: {
    color: "gray",
    marginBottom: "30px"
  },

  input: {
    width: "100%",
    padding: "15px",
    marginBottom: "20px",
    borderRadius: "8px",
    border: "1px solid #ddd",
    fontSize: "16px"
  },

  button: {
    width: "100%",
    padding: "15px",
    background: "#ff6b35",
    color: "white",
    border: "none",
    borderRadius: "8px",
    fontSize: "18px",
    cursor: "pointer",
    fontWeight: "bold"
  }

};

export default RegisterPage;