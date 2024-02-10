// SafariView.js
import React from "react";
import PackageTable from "../../components/PackageTable/PackageTable";
import ImageGallery from "../../components/ImageGallery/ImageGallery";
import "../../assets/styles/common.css";
import image from "../../assets/images/safari/img34.jpeg";
import image1 from "../../assets/images/safari/img35.jpeg";
import image2 from "../../assets/images/safari/img36.jpeg";
import image3 from "../../assets/images/safari/img37.jpeg";
import image4 from "../../assets/images/safari/img38.jpeg";
import image5 from "../../assets/images/safari/img39.jpeg";
import image6 from "../../assets/images/safari/img40.jpeg";
import image7 from "../../assets/images/safari/img41.jpeg";
import image8 from "../../assets/images/safari/img42.jpeg";
import image9 from "../../assets/images/safari/img43.jpeg";
import image10 from "../../assets/images/safari/img44.jpeg";
import image11 from "../../assets/images/safari/img45.jpeg";
import image12 from "../../assets/images/safari/img46.jpeg";

const SevenDayToursView = () => {
  const images = [
    { url: image, alt: "Image 0" },
    { url: image1, alt: "Image 1" },
    { url: image2, alt: "Image 2" },
    { url: image3, alt: "Image 3" },
    { url: image4, alt: "Image 4" },
    { url: image5, alt: "Image 5" },
    { url: image6, alt: "Image 6" },
    { url: image7, alt: "Image 7" },
    { url: image8, alt: "Image 8" },
    { url: image9, alt: "Image 9" },
    { url: image10, alt: "Image 10" },
    { url: image11, alt: "Image 11" },
    { url: image12, alt: "Image 12" },
    // Add more images as needed
  ];

  const packagesData = [
    {
      name: "1st Package:",
      description:
        "Start from the airport, visit Sigiriya, Polonnaruwa, Kandy, Nuwara Eliya, Ella, Yala, Galle, and return to the airport.",
    },
    {
      name: "2nd Package:",
      description:
        "Start from the airport, visit Sigiriya, Kandy, Nuwara Eliya, Ella, Tangalle, Bentota, and return to the airport.",
    },
    {
      name: "3rd Package:",
      description:
        "Start from the airport, visit Pinnawala, Sigiriya, Kandy, Nuwara Eliya, Beruwala, and return to the airport.",
    },
    // Add more Seven Day Tours as needed
  ];
  return (
    <div>
      <div className="title">
        <h2>Seven Day Tours Packages</h2>
      </div>

      <PackageTable packages={packagesData} />

      <div className="image-gallery-container p-5">
        <ImageGallery images={images} />
      </div>
    </div>
  );
};

export default SevenDayToursView;
