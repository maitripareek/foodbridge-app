import React from "react";
import "../styles/ManageVolunteers.css";

function ManageVolunteers() {
  return (
    <div className="volunteer-page">
      <h1>Manage Volunteers 👥</h1>
      <p>Track volunteers, delivery tasks, and availability.</p>

      <div className="volunteer-grid">
        <div className="volunteer-card">
          <h2>Rahul Sharma</h2>
          <p>Status: Available ✅</p>
          <p>Deliveries Completed: 18</p>
          <button>Assign Delivery</button>
        </div>

        <div className="volunteer-card">
          <h2>Anjali Verma</h2>
          <p>Status: On Delivery 🚚</p>
          <p>Deliveries Completed: 25</p>
          <button>View Details</button>
        </div>

        <div className="volunteer-card">
          <h2>Aman Khan</h2>
          <p>Status: Available ✅</p>
          <p>Deliveries Completed: 12</p>
          <button>Assign Delivery</button>
        </div>
      </div>
    </div>
  );
}

export default ManageVolunteers;