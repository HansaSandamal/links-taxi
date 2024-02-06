// LongDistanceView.js
import React from "react";
import PackageTable from "../../components/PackageTable/PackageTable";
import ImageGallery from "../../components/ImageGallery/ImageGallery";
import "../../assets/styles/common.css";
import image from "../../assets/images/long/img25.jpeg";
import image1 from "../../assets/images/long/img26.jpeg";
import image2 from "../../assets/images/long/img27.jpeg";
import image3 from "../../assets/images/long/img28.jpeg";
import image4 from "../../assets/images/long/img29.jpeg";
import image5 from "../../assets/images/long/img30.jpeg";
import image6 from "../../assets/images/long/img31.jpeg";
import image7 from "../../assets/images/long/img32.jpeg";
import image8 from "../../assets/images/long/img33.jpeg";

const LongDistanceView = () => {
  const images = [
    { url: image, alt: "Image 0" },
    { url: image1, alt: "Image 1" },
    { url: image2, alt: "Image 2" },
    { url: image3, alt: "Image 3" },
    { url: image4, alt: "Image 4" },
    { url: image5, alt: "Image 5" },
    { url: image6, alt: "Image 6" },
    { url: image7, alt: "Image 7" },
    { url: image8, alt: "Image 8" }
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
        <h2>Long Distance Packages</h2>
      </div>

      <PackageTable packages={packagesData} />

      <div className="image-gallery-container p-5">
        <ImageGallery images={images} />
      </div>
    </div>
  );
};

export default LongDistanceView;
