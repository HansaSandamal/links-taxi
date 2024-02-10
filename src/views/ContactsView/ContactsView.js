import React from "react";
import { Row, Col } from "react-bootstrap";
import facebook from "../../assets/images/facebook.png";
import twitter from "../../assets/images/twitter.png";
import whatsapp from "../../assets/images/whatsapp.png";
import { configs } from "../../utils/config";
import "./_ContactsView.css";
import Map from "../../components/Map/Map";
import ownerImage from "../../assets/images/ownerImage.jpg";
import "../../assets/styles/common.css";

const SocialButton = ({ image, url, title, margin }) => {
  return (
    <div className={margin} title={title}>
      <a href={url} target="_blank" rel="noreferrer noopener">
        <img
          src={image}
          className="icon"
          height={40}
          alt={title}
          title={title}
        />
      </a>
    </div>
  );
};

function ContactsView() {
  return (
    <div className="contacts-view">
      <Row>
        <Col xs={12} md={6}>
          <Map />
        </Col>
        <Col xs={12} md={6}>
          <div className="owner-card">
            <div className="owner-info p-1">
              <h3 className="owner-name">🚖 Welcome to Links Taxi! 🚖</h3>
              <p className="owner-bio">
                Meet our experienced driver with over 22 years of expertise in
                the transportation industry! At Links Taxi, we're proud to offer
                you the skilled services of a seasoned driver who knows the
                roads like the back of their hand.
              </p>
              <img src={ownerImage} alt="Owner" className="owner-image" />
              <p>Email: linkstourssrilanka@gmail.com</p>
              <p>Contact: +94 777598021, +94 713366180</p>
            </div>
          </div>
        </Col>
      </Row>
      <span className="share-text">Share this link via</span>
      <div className="social-buttons">
        <SocialButton
          image={facebook}
          url={`https://www.facebook.com/sharer/sharer.php?u=${configs.siteLink}`}
          title="facebook"
          margin="m-2"
        />
        <SocialButton
          image={twitter}
          url={`https://twitter.com/intent/tweet?url=${configs.siteLink}&text=cu-day-tours&via=`}
          title="twitter"
          margin="m-2"
        />
        <SocialButton
          image={whatsapp}
          url={`https://api.whatsapp.com/send?text=${configs.siteLink}`}
          title="whatsapp"
          margin="m-2"
        />
      </div>
    </div>
  );
}

export default ContactsView;
