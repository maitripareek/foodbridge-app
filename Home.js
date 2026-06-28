import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Home.css";

function Home() {
  const navigate = useNavigate();

  return (
    <div className="home">

      {/* HERO SECTION */}
      <div className="hero-section">

        <div className="hero-left">
          <h1>
            Reduce Food <br /> Waste 🍱
          </h1>

          <p>
            Connecting restaurants and grocery stores
            with people in need.
          </p>

          <button
            className="donate-btn"
            onClick={() => navigate("/donate")}
          >
            Start Donating
          </button>
        </div>

        <div className="hero-right">
          <img
            src="https://cdn-icons-png.flaticon.com/512/2921/2921822.png"
            alt="Food Donation"
          />
        </div>

      </div>

      {/* STATS SECTION */}
      <div className="stats-section">

        <div className="stat-box">
          <h1>1200+</h1>
          <p>Meals Saved 🍱</p>
        </div>

        <div className="stat-box">
          <h1>300+</h1>
          <p>Families Helped ❤️</p>
        </div>

        <div className="stat-box">
          <h1>50+</h1>
          <p>Restaurants Joined 🏪</p>
        </div>

        <div className="stat-box">
          <h1>2 Tons</h1>
          <p>Food Waste Reduced 🌍</p>
        </div>

      </div>

      {/* HOW IT WORKS */}
      <div className="how-section">

        <h2>How FoodBridge Works</h2>

        <div className="steps-container">

          <div className="step-card">
            <h1>1️⃣</h1>
            <p>Restaurants donate leftover food</p>
          </div>

          <div className="step-card">
            <h1>2️⃣</h1>
            <p>NGOs receive food requests</p>
          </div>

          <div className="step-card">
            <h1>3️⃣</h1>
            <p>Volunteers deliver meals</p>
          </div>

          <div className="step-card">
            <h1>4️⃣</h1>
            <p>Families receive food safely</p>
          </div>

        </div>
      </div>

      {/* FEATURES */}
      <div className="features-section">

        <h2>Why Choose FoodBridge?</h2>

        <div className="feature-grid">

          <div className="feature-card">
            <h3>⚡ Fast Donations</h3>
            <p>Quickly connect donors and NGOs.</p>
          </div>

          <div className="feature-card">
            <h3>📍 Live Tracking</h3>
            <p>Track food deliveries in real time.</p>
          </div>

          <div className="feature-card">
            <h3>🔒 Safe & Verified</h3>
            <p>Verified restaurants and NGOs only.</p>
          </div>

          <div className="feature-card">
            <h3>🌍 Eco Friendly</h3>
            <p>Reduce food waste and protect nature.</p>
          </div>

        </div>
      </div>

      {/* TESTIMONIAL */}
      <div className="testimonial-section">

        <h2>What People Say</h2>

        <div className="testimonial-card">
          <p>
            "FoodBridge helped us distribute meals
            to over 200 families in one week."
          </p>

          <h4>— NGO Volunteer</h4>
        </div>

      </div>

      {/* CTA */}
      <div className="cta-section">

        <h1>Every Meal Matters 🍽️</h1>

        <button
          className="cta-btn"
          onClick={() => navigate("/donate")}
        >
          Donate Now
        </button>

      </div>

      {/* FOOTER */}
      <footer className="footer">

        <p>© 2026 FoodBridge. All rights reserved.</p>

        <div className="footer-links">
          <span>About</span>
          <span>Contact</span>
          <span>Privacy</span>
        </div>

      </footer>

    </div>
  );
}

export default Home;