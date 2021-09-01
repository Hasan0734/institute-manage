import React from "react";
import SliderData from "../SliderData/SliderData";
import './SliderImage.css';
const SliderImage = () => {

  return (
    <>
      {SliderData.map((slider, index) => (
        <div
          className={` ${
            index - 1 === 0
              ? "carousel-item carusel-dark active"
              : "carousel-item carusel-dark  "
          }`}
          style={{ backgroundImage: `url(${slider.image})` }}
        >
            <div className="container">
                <div className="row">
                    <div className="col-md-6 text-white">
                    <h1>{slider.title}</h1>
                    <p>{slider.text}</p>
                    </div>
                    <div className="col-md-6 text-white">
                        <h2>{slider.info1}</h2>
                        <h2>{slider.info1}</h2>
                        <h2>{slider.info1}</h2>
                    </div>
                </div>
            </div>
        </div>
      ))}
    </>
  );
};

export default SliderImage;
