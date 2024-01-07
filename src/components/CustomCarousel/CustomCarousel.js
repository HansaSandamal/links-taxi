import React from "react";
import { Carousel } from "react-bootstrap";
import image1 from "../../assets/images/city-tours.jpg";
import image2 from "../../assets/images/long-distance.jpg";
import image3 from "../../assets/images/day-tours.jpg";

const CustomCarousel = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <img className="d-block w-100" src={image1} alt="First slide" />
        <Carousel.Caption>
          <h3>Discover Beautiful Destinations</h3>
          <p>Plan your next adventure with Links Taxi.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={image2} alt="Second slide" />
        <Carousel.Caption>
          <h3>Reliable Transportation Services</h3>
          <p>Experience comfort and safety with Links Taxi.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={image3} alt="Third slide" />
        <Carousel.Caption>
          <h3>Explore Exciting Day Tours</h3>
          <p>Unforgettable moments await you with Links Taxi.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default CustomCarousel;
