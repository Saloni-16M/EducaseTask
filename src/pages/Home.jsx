import React from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";

function Home() {
  const navigate = useNavigate();

  return (
    <div className="mobile-screen">
      <div className="home-container">
        {/* Welcome section */}
        <div className="welcome-section">
          <h2>Welcome to PopX</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
          </p>

          {/* Buttons */}
          <button
            className="btn btn-primary"
            onClick={() => navigate("/create-account")}
          >
            Create Account
          </button>
          <button
            className="btn btn-secondary"
            onClick={() => navigate("/login")}
          >
            Already Registered? Login
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;
