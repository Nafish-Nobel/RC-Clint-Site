import React from "react";
import { Col, Row } from 'react-bootstrap';
import img from './img.png' ;
import img1 from './img1.png' ;
import './footer.css';
/*  footer. */
const Footer = () => {
  return (
    <Row className='futter-section'>
    <Col>
  <h1 className="text-success fw-bold text-center">Our Services </h1>
  <br />
  <p className="text-center">Nafish Nobel is a World class Racer. He Host Us </p>
  <img className="img-fluid rounded h-50" src={img1} alt=""/>
  
    </Col>
    <Col>

      <h3 className="text-danger fw-bold text-center">Helpline</h3>
      <br />
      <p className="btn btn-warning rounded text-success fw-bold m-1">Services 24</p>
      <p className="btn btn-danger rounded text-warning fw-bold m-1">Emergency Service</p>
      <p className="btn btn-warning rounded text-success fw-bold m-1">Bike Toure Plan </p>
      <img className="img-fluid rounded" src={img} alt=""/>
      
      
    </Col>
    <Col>
     <h2 className="text-success p-1 fw-bold text-center">Opening Hours</h2>
     <br />
     <p>Mon-Tues: <span>              6:00-10:00</span></p>
     <hr />
     <p>Wed-Thurs: 6:00-10:00</p>
     <hr />
     <p>Sat-Sun: 6:00-10:00</p>
     <hr />
     <p>Friday: Closed</p>
     <hr />
    </Col>
</Row>
  );
};

export default Footer;
