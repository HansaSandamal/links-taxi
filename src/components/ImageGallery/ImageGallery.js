// ImageGallery.js
import React from 'react';
import './ImageGallery.css';

const ImageGallery = ({ images }) => {
  return (
    <div className="image-gallery">
      {images.map((image, index) => (
        <div key={index} className="image-item">
          <img src={image.url} alt={image.alt} />
        </div>
      ))}
    </div>
  );
};

export default ImageGallery;
