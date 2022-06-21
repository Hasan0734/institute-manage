import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import SliderData from "../SliderData/SliderData";
import './SliderImage.css';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import "animate.css"


const SliderImage = () => {

  
  return (
    <div className="overflow-hidden">
      <OwlCarousel
        className='owl-theme'
        dots={false}
        items={1}
        autoplay={true}
        autoplayTimeout={6000}
        autoplayDelay={5000}
        autoplayHoverPause={true}
        loop={true}
        mouseDrag={false}
        nav={true}
        navText = {["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"]}
        
      
      >
        {SliderData.map((slider) => (
         
          <div className="carousel-dark" style={{ backgroundImage: `url(${slider.image})`, }} >
            <div className="container carousel-content d-flex align-items-center">
              <div className="row">
                <div className="col-md-7 text-white">
                  <div className="pe-5">
                    <h3 className="slider-title" >{slider.title}</h3>
                    <p className="slider-text">{slider.text}</p>
                    <div>
                      <button className="btn btn-warning slider-btn">Read more...</button>
                    </div>
                  </div>
                </div>
                <div className="col-md-5 text-white">
                  {slider.info.map((info, index, array) => (
                    <h3 className={`fs-4 info-${array.length === 2 ? index + 5 : index}`}>
                      <FontAwesomeIcon className="text-warning" icon={info.icon} /> {info.text}</h3>))}
                </div>
              </div>
            </div>

          </div>
        ))}

      </OwlCarousel>
    </div >
  );
};

export default SliderImage;
