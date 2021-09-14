import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import SliderData from "../SliderData/SliderData";
import './SliderImage.css';
import { Animated } from "react-animated-css";

const SliderImage = () => {


  return (
    <div>
      {SliderData.map((slider, index) => (
        <div
          className={` ${index - 1 === 0
            ? "carousel-item carusel-dark active"
            : "carousel-item carusel-dark"
            }`}
          style={{ backgroundImage: `url(${slider.image})` }}
        >

          <div className="container carusel-content d-flex align-items-center">
            <div className="row">
              <div className="col-md-7 text-white">
                <div className="pe-5">
                  <Animated animationIn="bounceInDown" isVisible={true}>
                    <h3>{slider.title}</h3>
                  </Animated>
                  <p>{slider.text}</p>

                  <Animated animationIn="bounceInUp" isVisible={true}> <button className="btn btn-warning">Read more...</button>
                  </Animated>

                </div>
              </div>
              <div className="col-md-5 text-white">
                {slider.info.map(info => <h3><FontAwesomeIcon className="text-warning" icon={info.icon} /> {info.text}</h3>)}
              </div>
            </div>
          </div>

        </div>
      ))}
    </div>
  );
};

export default SliderImage;
