// DayToursView.js
import React from "react";
import PackageTable from "../../components/PackageTable/PackageTable";
import ImageGallery from "../../components/ImageGallery/ImageGallery";
import "../../assets/styles/common.css";
import image from "../../assets/images/day/img.jpeg";
import image1 from "../../assets/images/day/img1.jpeg";
import image2 from "../../assets/images/day/img2.jpeg";
import image3 from "../../assets/images/day/img3.jpeg";
import image4 from "../../assets/images/day/img4.jpeg";
import image5 from "../../assets/images/day/img5.jpeg";
import image6 from "../../assets/images/day/img6.jpeg";
import image7 from "../../assets/images/day/img7.jpeg";
import image8 from "../../assets/images/day/img8.jpeg";
import image9 from "../../assets/images/day/img9.jpeg";
import image10 from "../../assets/images/day/img10.jpeg";
import image11 from "../../assets/images/day/img11.jpeg";
import image12 from "../../assets/images/day/img12.jpeg";
import image14 from "../../assets/images/day/img14.jpeg";
import image15 from "../../assets/images/day/img15.jpeg";
import image16 from "../../assets/images/day/img16.jpeg";
import image17 from "../../assets/images/day/img17.jpeg";
import image18 from "../../assets/images/day/img18.jpeg";
import image19 from "../../assets/images/day/img19.jpeg";
import image20 from "../../assets/images/day/img20.jpeg";

const DayToursView = () => {
  const images = [
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
    { url: image, alt: "Image 13" },
    { url: image14, alt: "Image 14" },
    { url: image15, alt: "Image 15" },
    { url: image16, alt: "Image 16" },
    { url: image17, alt: "Image 17" },
    { url: image18, alt: "Image 18" },
    { url: image19, alt: "Image 19" },
    { url: image20, alt: "Image 20" },
    // Add more images as needed
  ];

  const packagesData = [
    {
      name: "Ella Tour",
      description:
        "Explore Ella including Nine Arch Bridge, Little Adam's Peak, Ravana Falls, Flying Ravana, Ravana Cave, and Ella Rock Trailhead.",
    },
    {
      name: "Sigiriya Tour",
      description:
        "Climb Sigiriya Lion Rock, Pidurangala Rock, visit Sigiriya ancient city, Herbal Garden, Sigiriya Village Tour, and Dambulla Cave Temple.",
    },
    {
      name: "Yala Safari",
      description:
        "Embark on an exciting safari adventure in Yala National Park.",
    },
    {
      name: "Udawalawe Safari",
      description:
        "Discover the wildlife of Udawalawe National Park on a thrilling safari.",
    },
    {
      name: "Pinnawala Tour",
      description:
        "Visit the Pinnawala Elephant Orphanage, witness Elephant Bath, and explore the nearby Village.",
    },
    {
      name: "Whale Watching Tour",
      description:
        "Experience Whale Watching, visit Turtle Hatchery, witness Stilt Fishing, explore Coconut Hill, and enjoy Sea Bathing.",
    },
    {
      name: "Madu River Boat Safari",
      description:
        "Enjoy a Boat Safari along Madu River, explore Monston Mine Village, visit Turtle Hatchery, and experience Kayak Boat Adventure.",
    },
  ];
  return (
    <div>
      <div className="title">
        <h2>Day Tours Packages</h2>
      </div>

      <PackageTable packages={packagesData} />

      <div className="image-gallery-container p-5">
        <ImageGallery images={images} />
      </div>
    </div>
  );
};

export default DayToursView;
