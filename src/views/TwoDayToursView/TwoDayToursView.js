// AirportTransfers.js
import React from "react";
import "./_TwoDayToursView.css";
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

  const packagesData = [
    {
      name: "Ella Tour",
      description:
        "Visit Ravana Falls, Nine Arch, Mini Adams Peak, Sitha Temple, Hakgala Garden, Gregory Lake in Ella.",
    },
    {
      name: "Nuwara Eliya Tour",
      description:
        "Explore Nuwara Eliya with visits to a Tea Factory, Tea Lounge, and Ramboda Falls.",
    },
    {
      name: "Kandy Tour",
      description: "Visit the Temple of the Tooth in Kandy.",
    },
    // Add more Two Day Tours as needed
  ];
  return (
    <div>
      <div className="title">
        <h2>Two Day Tours Packages</h2>
      </div>
      {/* Package Table */}
      <PackageTable packages={packagesData} />

      <div className="image-gallery-container p-5">
        {/* <ImageGallery images={images} /> */}
        <div className="image-gallery">
          {images.map((image, index) => (
            <div key={index} className="image-item">
              <img src={image.url} alt={image.alt} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AirportTransfersView;
