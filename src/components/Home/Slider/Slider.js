import React from "react";
import slider1 from '../../../image/slider-1.jpg';
import slider2 from '../../../image/slider-2.jpg';
import slider3 from '../../../image/slider-3.jpg';
import './Slider.css';

const Slider = () => {
  return (
    <div>
      <div
        id="carouselExampleControls"
        className="carousel slide carousel-slider"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item carusel-dark active" style={{backgroundImage: `url(${slider1})`}}>
            {/* <img src={slider1} className="d-block w-100 image-fluid" alt="..." /> */}
          </div>
          <div className="carousel-item carusel-dark" style={{backgroundImage: `url(${slider2})`}}>
            {/* <img src={slider2} className="d-block w-100 image-fluid" alt="..." /> */}
          </div>
          <div className="carousel-item carusel-dark" style={{backgroundImage: `url(${slider3})`}}>
            {/* <img src={slider3} className="d-block w-100 image-fluid" alt="..." /> */}
          </div>
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
