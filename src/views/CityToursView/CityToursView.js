// CityToursView.js
import React from "react";
import PackageTable from "../../components/PackageTable/PackageTable";
import ImageGallery from "../../components/ImageGallery/ImageGallery";
import "../../assets/styles/common.css";
import image from "../../assets/images/city/img21.jpg";
import image1 from "../../assets/images/city/img22.jpeg";
import image2 from "../../assets/images/city/img23.jpeg";
import image3 from "../../assets/images/city/img24.jpeg";

const CityToursView = () => {
  const packagesData = [
    {
      name: "Galle Tour",
      description:
        "Visit Galle Fort, Jungle Beach, Fruit and Fish Market, Monsteme Mine, Seafood Restaurants",
    },
    {
      name: "Colombo Tour",
      description:
        "Explore Independence Square, Red Mosque, Gangarama Temple, Galle Face, One Galle Face Shopping Mall, Lotus Tower, Colombo Bayar Visit, Sri Ponnambalam Vanesar Kovil",
    },
    // Add more city tours as needed
  ];

  const images = [
    { url: image, alt: "Image 1" },
    { url: image1, alt: "Image 2" },
    { url: image2, alt: "Image 3" },
    { url: image3, alt: "Image 4" },
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
