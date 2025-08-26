import React from "react";
import "./AccountSettings.css";

function AccountSettings() {
  return (
    <div className="mobile-screen">
      <div className="account-container">
        {/* Header */}
        <div className="header">
          <h3>Account Settings</h3>
        </div>

        {/* Profile Section */}
        <div className="profile-card">
          <img
            src="https://tse3.mm.bing.net/th/id/OIP.DxpcKmgZZtv0kMLJpaTJLgHaHa?r=0&rs=1&pid=ImgDetMain&o=7&rm=3"
            alt="Profile"
            className="profile-img"
          />
          <div className="profile-info">
            <h4>Marry Doe</h4>
            <p className="email">Marry@gmail.com</p>
          </div>
          <span className="edit-icon">✎</span>
        </div>

        {/* Description */}
        <div className="description-box">
          <p>
            Lorem ipsum dolor sit amet, consectetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam.
          </p>
        </div>
      </div>
    </div>
  );
}

export default AccountSettings;
