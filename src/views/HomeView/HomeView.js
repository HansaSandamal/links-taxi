import React from "react";
import CustomCarousel from "../../components/CustomCarousel/CustomCarousel";
import Services from "../ServicesView/ServicesView";
import "./_HomeView.css";
import MessageButtons from "../../components/MessageButtons/MessageButtons";

const HomeView = () => {
  return (
    <React.Fragment>
      <div className="home-view">
        <h1 className="welcome-text">Welcome to Links Taxi</h1>
        <CustomCarousel />
        <MessageButtons phoneNumber="+94777598000" />
        <Services />
      </div>
    </React.Fragment>
  );
};

export default HomeView;
