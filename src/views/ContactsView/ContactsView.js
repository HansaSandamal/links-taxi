import React from "react";
import facebook from "../../assets/images/facebook.png";
import twitter from "../../assets/images/twitter.png";
import whatsapp from "../../assets/images/whatsapp.png";
import { configs } from "../../utils/config";
import "./_ContactsView.css";

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
