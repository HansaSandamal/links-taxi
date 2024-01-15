// AirportTransfers.js
import React from "react";
import { useNavigate } from "react-router-dom";
import "./_AirportTransfersView.css"

const AirportTransfersView = () => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <div>
      <h2>Airport Transfers</h2>
      {/* Add content and details specific to Airport Transfers */}

      {/* Back Button */}
      <button onClick={handleGoBack} className="backButton">
        Back
      </button>
    </div>
  );
};

export default AirportTransfersView;
