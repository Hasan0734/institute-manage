import React from "react";
import SliderImage from "../SliderImage/SliderImage";
import './Slider.css';

const Slider = () => {
  return (
    <div>
      <div
        id="carouselExampleControls"
        className="carousel slide carousel-slider"
        data-bs-side="carousel"
      >
        <div className="carousel-inner">
          <SliderImage />
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default Slider;
