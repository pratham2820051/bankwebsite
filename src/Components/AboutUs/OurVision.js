
import React from 'react';
import './AboutUs.css'; 

function OurVision() {
  return (
    <div className="about-us-container">
      <h1 className="main-heading">OUR VISION AND OUR MISSION</h1>
      <div className="content">
        <div className="image">
          <img src="/assets/aboutus/vision.png" alt="Company Image" />
        </div>
        <div className="text">
        <h2>Our vision</h2>
          <p>
          "KVNL be a leading Nidhi Company in the MADHEPURA in BIHAR, supporting the development of small households and micro, small and medium borrower and financial inclusion of the population of MADHEPURA in BIHAR.
We keep our market position as a leading financial service provider for households and micro, small and medium borrower customers and We ensure a sustainable impact and financial return to the investors"
          </p>
        <h2>Our Mission</h2>
          <p>
          "The mission of KVNL is to contribute to the sustainable development of MADHEPURA in BIHAR by providing responsible financial services and solutions to households and micro, small and medium borrower as becoming recognized best Nidhi company practices. We are committed to delivering value for our members, shareholders, employees, and society at large. The mission is based on our social and environmental responsibility."
          </p>
        </div>
      </div>
    </div>
  );
}

export default OurVision;
