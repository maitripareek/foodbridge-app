import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Dashboard.css";

function Dashboard() {

  const navigate = useNavigate();

  return (
    <div className="dashboard-page">

      {/* HERO */}
      <div className="dashboard-hero">
        <div>
          <h1>
            FoodBridge Dashboard 📊
          </h1>
          <p>
            Monitor donations, impact, volunteers, and food rescue activities.
          </p>
        </div>
      <button
        onClick={() => {
          throw new Error("FoodBridge test error");
        }}
      >
        Test FoodBridge Error
      </button>
        <button
          className="dashboard-btn"
          onClick={() => navigate("/donate")}
        >
          + Add Donation
        </button>
      </div>

      {/* STATS */}
      <div className="stats-grid">

        <div className="stat-card">
          <h2>1200+</h2>
          <p>Meals Saved 🍱</p>
        </div>

        <div className="stat-card">
          <h2>85+</h2>
          <p>Restaurants Joined 🏪</p>
        </div>

        <div className="stat-card">
          <h2>430+</h2>
          <p>Families Helped ❤️</p>
        </div>

        <div className="stat-card">
          <h2>24</h2>
          <p>Active Volunteers 🌍</p>
        </div>

      </div>

      {/* RECENT ACTIVITY */}
      <div className="activity-section">
        <h2>Recent Activities</h2>

        <div className="activity-card">
          🍲 Restaurant donated 50 meal boxes
        </div>

        <div className="activity-card">
          🚚 Food delivery completed successfully
        </div>

        <div className="activity-card">
          ❤️ 20 families received fresh meals
        </div>

        <div className="activity-card">
          🥗 Grocery store donated vegetables
        </div>
      </div>

      {/* QUICK ACTIONS */}
      <div className="quick-section">
        <h2>Quick Actions</h2>

        <div className="quick-grid">

          <button
            className="quick-card"
            onClick={() => navigate("/donate")}
          >
            ➕ Add Donation
          </button>

          <button className="quick-card">
            📦 Track Delivery
          </button>

          <button
          className="quick-card"
          onClick={() => navigate("/volunteers")}
          >
          👥 Manage Volunteers
          </button>

          <button className="quick-card">
            📈 View Reports
          </button>

        </div>
      </div>

    </div>
  );
}

export default Dashboard;