// AirportTransfers.js
import React from "react";
import "./_AirportTransfersView.css";
import ImageGallery from "../../components/ImageGallery/ImageGallery";
import PackageTable from "../../components/PackageTable/PackageTable";
import "../../assets/styles/common.css";
import image from "../../assets/images/airport.jpg";


const AirportTransfersView = () => {
  const images = [
    { url: image, alt: "Image 1" },
    { url: image, alt: "Image 2" },
    { url: image, alt: "Image 3" },
    // Add more images as needed
  ];

  // Sample package data
  const packagesData = [
    {
      name: "Standard",
      price: "$50",
      description: "Standard transfer service",
    },
    { name: "Premium", price: "$100", description: "Premium transfer service" },
    // Add more packages as needed
  ];
  return (
    <div>
      <div className="title">
        <h2>Airport Transfers</h2>
      </div>
      {/* Package Table */}
      <PackageTable packages={packagesData} />

      <div className="image-gallery-container p-5">
        <ImageGallery images={images} />
      </div>
    </div>
  );
};

export default AirportTransfersView;
