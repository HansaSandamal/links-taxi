import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./_ServicesView.css";
import airportImage from "../../assets/images/airport.jpg";
import longDistanceImage from "../../assets/images/long-distance.jpg";
import dayToursImage from "../../assets/images/day-tours.jpg";
import cityToursImage from "../../assets/images/city-tours.jpg";
import safariImage from "../../assets/images/safari.jpg";

const Services = () => {
  return (
    <Container className="mt-5">
      <h2 className="text-center mb-4">Our Services</h2>
      <Row className="mb-5">
        {services.map((service, index) => (
          <Col key={index} md={4} className="mb-4">
            {/* Use Link to navigate to a specific route when clicking on the card */}
            <Link to={`/service/${encodeURIComponent(service.title.toLowerCase())}`}>
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
    title: "Airport Transfers",
    image: airportImage,
  },
  {
    title: "Long Distance",
    image: longDistanceImage,
  },
  {
    title: "Day Tours",
    image: dayToursImage,
  },
  {
    title: "City Tours",
    image: cityToursImage,
  },
  {
    title: "Yala Udawalawa Safari",
    image: safariImage,
  },
];

export default Services;
