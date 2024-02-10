import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./_ServicesView.css";
import dayToursImage from "../../assets/images/long/img25.jpeg";
import cityToursImage from "../../assets/images/city-tours.jpg";
import safariImage from "../../assets/images/safari.jpg";
import twoDayToursImage from "../../assets/images/day/img1.jpeg";
import sevenDayToursImage from "../../assets/images/safari/img34.jpeg";
import nineDayToursImage from "../../assets/images/day/img8.jpeg";
import twelveDayToursImage from "../../assets/images/long/img29.jpeg";




const Services = () => {
  return (
    <Container className="mt-5">
      <h2 className="text-center mb-4">Our Services</h2>
      <Row className="mb-5">
        {services.map((service, index) => (
          <Col key={index} md={4} className="mb-4">
            {/* Use Link to navigate to a specific route when clicking on the card */}
            <Link
              to={`/service/${encodeURIComponent(
                service.title.toLowerCase().replace(/\s+/g, "-")
              )}`}
            >
              <div className="service-card">
                <img
                  src={service.image}
                  alt={service.title}
                  className="img-fluid"
                />
                <div className="card-body">
                  <h4 className="mt-3">{service.title}</h4>
                </div>
              </div>
            </Link>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

const services = [
  {
    title: "Day Tours",
    image: safariImage,
  },
  {
    title: "Two Day Tours",
    image: twoDayToursImage,
  },
  {
    title: "Three Day Tours",
    image: dayToursImage,
  },
  {
    title: "Seven Day Tours",
    image: sevenDayToursImage,
  },
  {
    title: "Nine Day Tours",
    image: nineDayToursImage,
  },
  {
    title: "Twelve Day Tours",
    image: twelveDayToursImage,
  },
  {
    title: "City Tours",
    image: cityToursImage,
  }
];

export default Services;
