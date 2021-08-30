import React from "react";
import slider1 from '../../../image/slider-1.jpg';
import slider2 from '../../../image/slider-2.jpg';
import slider3 from '../../../image/slider-3.jpg';
import './Slider.css';

// const sliders = [
//     {img: slider1,
//     title: "Welcome to the University of Dhaka",
//     text: "On the first day of July 1921 the University of Dhaka opened its doors to students with Sir P.J. Hartog ..."
//     }  ,
//     {img: slider2,
//     title: "DU Students' Celebrating their Graduation Moment",
//     text: "The main purpose of the University was to create new areas of knowledge and disseminate such knowledge nationally as well"
//   }
    
// ]
const Slider = () => {

  return (
    <div>
      <div
        id="carouselExampleControls"
        className="carousel slide carousel-slider"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item carusel-dark active">
            <img src={slider1} className="d-block w-100 image-fluid" alt="..." />
          </div>
          <div className="carousel-item carusel-dark">
            <img src={slider2} className="d-block w-100 image-fluid" alt="..." />
          </div>
          <div className="carousel-item carusel-dark">
            <img src={slider3} className="d-block w-100 image-fluid" alt="..." />
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
