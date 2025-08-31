

import React from "react";
import { Link } from "react-router-dom";
import "../App.css";

function FirstPage() {
  return (
    <div className="first-page">
      <h1>Welcome to Personal Expense Tracker</h1>
      <p>Manage your expenses, track your budget, and save more.</p>
      <div>
        <Link to="/login" className="btn">Login</Link>
        <Link to="/signup" className="btn">Signup</Link>
      </div>
    </div>
  );
}

export default FirstPage;
