import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import SliderData from "../SliderData/SliderData";
import './SliderImage.css';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";

const SliderImage = () => {
  const navs =[ '<FontAwesomeIcon icon={faAngleLeft}/>', '<FontAwesomeIcon icon={faAngleRight}/>']
  return (
    <div>
       <OwlCarousel
                    className='owl-theme'
                    dots={false}
                    items={1}
                    autoplay={true}
                    autoplayTimeout={3000}
                    autoplayHoverPause={true}
                    loop={true}
                    nav={true}
                    navText = {navs}
                    >
      {SliderData.map((slider) => (
        <div className="carousel-dark" style={{ backgroundImage: `url(${slider.image})`, }} >
          <div className="container carousel-content d-flex align-items-center">
            <div className="row">
              <div className="col-md-7 text-white">
                <div className="pe-5">

                  <h3>{slider.title}</h3>
                  <p>{slider.text}</p>
                  <button className="btn btn-warning">Read more...</button>
                </div>
              </div>
              <div className="col-md-5 text-white">
                {slider.info.map(info => <h3><FontAwesomeIcon className="text-warning" icon={info.icon} /> {info.text}</h3>)}
              </div>
            </div>
          </div>

        </div>
      ))}
     </OwlCarousel>
    </div>
  );
};

export default SliderImage;
