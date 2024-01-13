import React from "react";
import "./_Footer.css";

function Footer() {
  return (
    <footer className="bg-dark text-white py-4">
      <div className="container">
        <div className="row">
          <div className="col-md-6 text-center text-md-left">
            <p>&copy; 2024 Links Taxi. All rights reserved.</p>
          </div>
          <div className="col-md-6 text-center text-md-right">
            <p>
              Contact: +94 777598000, +94 713366180 | Email:
              linkstourssrilanka@gmail.com
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
