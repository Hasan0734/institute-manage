import React, { useEffect } from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './ResearchCarousel.css'


const data = [1, 2, 3, 4, 5, 6, 7, 8, 9]
const ResearchCarousel = () => {
  const responsivenes = {
    0:{
        items:1
    },
    600:{
        items:3
    },
    1000:{
        items:3
    }
}
  return (
    <div className="p-2">
      <OwlCarousel
        className='owl-theme'
        dots={true}
        autoplay={true}
        autoplayTimeout={3000}
        autoplayHoverPause={true}
        dotClass="carousel-dot owl-dot"
        dotsClass="carousel-dots owl-dots"
        responsive={responsivenes}
        loop margin={30}>
        {
          data.map((dt) => <div>
            <div class="card" data-aos="zoom-in" data-aos-duration="800"  data-aos-delay="300">
              <img className="img-fluid" src={`https://picsum.photos/200/30${dt}`} style={{ height: '240px', width: '100%' }} alt="..." />
              <div className="d-flex align-items-center justify-content-end p-3">
                <p className="m-0"> <FontAwesomeIcon className="text-warning" icon={faCalendarAlt} />  03 Sep, 2021</p>
              </div>
              <div className="card-body px-4 pb-4">
                <h5 className="card-title pb-5 border-bottom">Lorem ipsum dolor sit amet, consectetur adip</h5>

                <button className="btn btn-outline-dark btn-border-round px-3 mt-4">+ READ MORE</button>
              </div>
            </div>
          </div>)
        }
      </OwlCarousel>
      <div className="text-center">
        <button className='btn btn-warning px-4 py-2'><strong>View All Research Activites</strong></button>
      </div>
    </div>
  );
};

export default ResearchCarousel;