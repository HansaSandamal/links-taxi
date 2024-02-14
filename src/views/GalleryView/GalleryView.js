import React from "react";
import ImageGallery from "../../components/ImageGallery/ImageGallery";
import image1 from "../../assets/images/gallery/oneday/1.jpeg";
import image2 from "../../assets/images/gallery/oneday/2.jpeg";
import image3 from "../../assets/images/gallery/oneday/3.jpeg";
import image5 from "../../assets/images/gallery/oneday/5.jpeg";
import image6 from "../../assets/images/gallery/oneday/6.jpeg";
import image7 from "../../assets/images/gallery/oneday/7.jpeg";
import image01 from "../../assets/images/gallery/twoday/1.jpeg";
import image02 from "../../assets/images/gallery/twoday/2.jpeg";
import image03 from "../../assets/images/gallery/twoday/3.jpeg";


const oneDayImages = [
  {
    url: image1,
    alt: "Image 1",
  },
  { url: image2, alt: "Image 2" },
  { url: image3, alt: "Image 3" },
  { url: image5, alt: "Image 5" },
  { url: image6, alt: "Image 6" },
  { url: image7, alt: "Image 7" },
];
const twoDayImages = [
  {
    url: image01,
    alt: "Image 1",
  },
  { url: image02, alt: "Image 2" },
  { url: image03, alt: "Image 3" },

];
const threeDayImages = [
  {
    url: image1,
    alt: "Image 1",
  },
  { url: image2, alt: "Image 2" },
  { url: image3, alt: "Image 3" },
  // { url: image4, alt: "Image 4" },
  { url: image5, alt: "Image 5" },
  { url: image6, alt: "Image 6" },
  { url: image7, alt: "Image 7" },
];
const sevenDayImages = [
  {
    url: image1,
    alt: "Image 1",
  },
  { url: image2, alt: "Image 2" },
  { url: image3, alt: "Image 3" },
  // { url: image4, alt: "Image 4" },
  { url: image5, alt: "Image 5" },
  { url: image6, alt: "Image 6" },
  { url: image7, alt: "Image 7" },
];
const nineDayImages = [
  {
    url: image1,
    alt: "Image 1",
  },
  { url: image2, alt: "Image 2" },
  { url: image3, alt: "Image 3" },
  // { url: image4, alt: "Image 4" },
  { url: image5, alt: "Image 5" },
  { url: image6, alt: "Image 6" },
  { url: image7, alt: "Image 7" },
];
const twelveDayImages = [
  {
    url: image1,
    alt: "Image 1",
  },
  { url: image2, alt: "Image 2" },
  { url: image3, alt: "Image 3" },
  // { url: image4, alt: "Image 4" },
  { url: image5, alt: "Image 5" },
  { url: image6, alt: "Image 6" },
  { url: image7, alt: "Image 7" },
];
const cityToursImages = [
  {
    url: image1,
    alt: "Image 1",
  },
  { url: image2, alt: "Image 2" },
  { url: image3, alt: "Image 3" },
  // { url: image4, alt: "Image 4" },
  { url: image5, alt: "Image 5" },
  { url: image6, alt: "Image 6" },
  { url: image7, alt: "Image 7" },
];
const GalleryView = () => {
  return (
    <>
      <h2 className="text-center mb-4">Day Tours</h2>
      <div className="image-gallery-container p-5">
        <ImageGallery images={oneDayImages} />
      </div>
      <h2 className="text-center mb-4">Two Day Tours</h2>
      <div className="image-gallery-container p-5">
        <ImageGallery images={twoDayImages} />
      </div>
      <h2 className="text-center mb-4">Three Day Tours</h2>
      <div className="image-gallery-container p-5">
        <ImageGallery images={threeDayImages} />
      </div>
      <h2 className="text-center mb-4">Seven Day Tours</h2>
      <div className="image-gallery-container p-5">
        <ImageGallery images={sevenDayImages} />
      </div>
      <h2 className="text-center mb-4">Nine Day Tours</h2>
      <div className="image-gallery-container p-5">
        <ImageGallery images={nineDayImages} />
      </div>
      <h2 className="text-center mb-4">Twelve Day Tours</h2>
      <div className="image-gallery-container p-5">
        <ImageGallery images={twelveDayImages} />
      </div>
      <h2 className="text-center mb-4">City Tours</h2>
      <div className="image-gallery-container p-5">
        <ImageGallery images={cityToursImages} />
      </div>
      
    </>
  );
};

export default GalleryView;
