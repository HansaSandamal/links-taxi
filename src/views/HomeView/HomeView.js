import React from "react";
import CustomCarousel from "../../components/CustomCarousel/CustomCarousel";
import Services from "../ServicesView/ServicesView";
import "./_HomeView.css";

const HomeView = () => {
  return (
    <React.Fragment>
      <div className="home-view">
        <h1 className="welcome-text">Welcome to Links Taxi</h1>
        <CustomCarousel />
        <Services />
      </div>
    </React.Fragment>
  );
};

export default HomeView;
