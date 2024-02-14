// AirportTransfers.js
import React from "react";
import "./_TwoDayToursView.css";
import PackageTable from "../../components/PackageTable/PackageTable";
import "../../assets/styles/common.css";
import image from "../../assets/images/airport.jpg";

const AirportTransfersView = () => {
  const images = [
    {
      url: "https://links-taxi.netlify.app/static/media/airport.jpg",
      alt: "Image 1",
    },
    { url: image, alt: "Image 2" },
    { url: image, alt: "Image 3" },
    // Add more images as needed
  ];

  const packagesData = [
    {
      name: "Ella Tour",
      description:
        "Experience the beauty of Ella with visits to Ravana Falls, the iconic Nine Arch Bridge, Little Adams Peak, Flying Ravana, and indulge in Ella Spice Garden cooking lessons.",
    },
    {
      name: "Nuwara Eliya Tour",
      description:
        "Embark on a journey through Nuwara Eliya with stops at a Tea Factory, Tea Lounge, and Ramboda Falls. Explore Hakgala Garden, Seetha Amman Temple, Gregory Lake, and enjoy a night stay in Nuwara Eliya.",
    },
    {
      name: "Kandy Tour",
      description:
        "Discover the cultural heart of Sri Lanka with a visit to the Temple of the Tooth in Kandy, and explore the charming streets of Kandy town.",
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
