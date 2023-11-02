import Carousel from "react-material-ui-carousel";
import React from "react";
import "./heroSlider.css";
import { Button } from "@mui/material";
import { ArrowForwardIos } from "@mui/icons-material";

const HeroSlider = () => {
  const sliderData = [
    {
      title: "Fixed Deposite Scheme",
      desc: "Put your idle money in",
    },
    {
      title: "Daily Deposite Scheme",
      desc: "Daily Deposite Scheme",
    },
    {
      title: "Daily Deposite Scheme",
      desc: "Daily Deposite Scheme",
    },
    {
      title: "Gold Loan",
      desc: "Daily Deposite Scheme",
    },
  ];
  return (
    <div className="right">
      <Carousel>
        {sliderData.map((item) => (
          <div key={item.title} className="heroslider">
            <h1 className="slider-title">{item.title}</h1>
            <p className="slider-desc">{item.desc}</p>
            <Button
              variant="contained"
              endIcon={<ArrowForwardIos />}
              size="large"
            >
              read more
            </Button>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default HeroSlider;
