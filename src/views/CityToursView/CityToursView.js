// CityToursView.js
import React from "react";
import PackageTable from "../../components/PackageTable/PackageTable";
import ImageGallery from "../../components/ImageGallery/ImageGallery";
import "../../assets/styles/common.css";

const CityToursView = () => {
  const packagesData = [
    {
      name: "Standard",
      price: "$50",
      description: "Standard transfer service",
    },
    { name: "Premium", price: "$100", description: "Premium transfer service" },
    // Add more packages as needed
  ];

  const images = [
    { url: "https://via.placeholder.com/200", alt: "Image 1" },
    { url: "https://via.placeholder.com/200", alt: "Image 2" },
    { url: "https://via.placeholder.com/200", alt: "Image 3" },
    // Add more images as needed
  ];

  return (
    <div>
      <div className="title">
        <h2>City Tours Packages</h2>
      </div>

      <PackageTable packages={packagesData} />

      <div className="image-gallery-container p-5">
        <ImageGallery images={images} />
      </div>
    </div>
  );
};

export default CityToursView;
