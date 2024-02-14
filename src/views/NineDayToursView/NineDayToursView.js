// AirportTransfers.js
import React from "react";
// import ImageGallery from "../../components/ImageGallery/ImageGallery";
import PackageTable from "../../components/PackageTable/PackageTable";
import "../../assets/styles/common.css";
// import image from "../../assets/images/airport.jpg";

const NineDayToursView = () => {
  // const images = [
  //   { url: image, alt: "Image 1" },
  //   { url: image, alt: "Image 2" },
  //   { url: image, alt: "Image 3" },
  //   // Add more images as needed
  // ];

  const packagesData = [
    {
      name: "1st Package:",
      description:
        "Travel from the airport to Anuradhapura. Visit Polonnaruwa and Sigiriya. Proceed to Kandy, Nuwara Eliya, Ella, Yala, Udawalawa, Mirissa, Bentota, and return to the airport.",
    },
    {
      name: "2nd Package:",
      description:
        "Travel from the airport to Anuradhapura, Trincomalee. Visit Polonnaruwa and Sigiriya. Proceed to Kandy, Nuwara Eliya, Ella, Yala/Udawalawa, Tangalle, Mirissa/Galle/Bentota, Colombo, and return to the airport.",
    },
    // Add more Nine Day Tours as needed
  ];
  return (
    <div>
      <div className="title">
        <h2>Nine Day Tours Packages</h2>
      </div>
      {/* Package Table */}
      <PackageTable packages={packagesData} />

      <div className="image-gallery-container p-5">
        {/* <ImageGallery images={images} /> */}
      </div>
    </div>
  );
};

export default NineDayToursView;
