import React from "react";
import CustomCarousel from "../../components/CustomCarousel/CustomCarousel";
import Services from "../ServicesView/ServicesView";

const HomeView = () => {
  return (
    <React.Fragment>
      <div className="home-view">
        <h1>Welcome to Links Taxi</h1>
        <CustomCarousel />
        <Services />
      </div>
    </React.Fragment>
  );
};

export default HomeView;
