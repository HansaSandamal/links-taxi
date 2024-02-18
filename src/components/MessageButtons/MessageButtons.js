import React from "react";
import "./MessageButtons.css"; // Import CSS file for styling

const MessageButtons = ({ phoneNumber }) => {
  const whatsappURL = `https://wa.me/${phoneNumber}`;
  const messengerURL = `https://m.me/${phoneNumber}`;
  const telegramURL = `https://t.me/${phoneNumber}`;

  return (
    <div className="message-buttons-wrapper">
      <h2 className="mt-2">
        Arrive & Explore: Seamless airport pickups for your Sri Lankan
        adventure!
      </h2>
      <h2 className="mt-2">Send Us Message Start your Ride!!!</h2>
      <div className="message-buttons-container">
        <a href={whatsappURL} target="_blank" rel="noopener noreferrer">
          <i className="fab fa-whatsapp"></i>
        </a>
        <a href={messengerURL} target="_blank" rel="noopener noreferrer">
          <i className="fab fa-facebook-messenger"></i>
        </a>
        <a href={telegramURL} target="_blank" rel="noopener noreferrer">
          <i className="fab fa-telegram-plane"></i>
        </a>
      </div>
    </div>
  );
};

export default MessageButtons;
