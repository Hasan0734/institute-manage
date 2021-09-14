import { faPlay } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './OurCampus.css'
const OurCampas = () => {
    return (
        <section className="campus-section pt-5">
            <div className="container">
                <div className="text-center campus-content" >
                    <h2 className='text-light'>OUR CAMPUS</h2>
                    <h4 className="text-warning">University of Dhaka</h4>
                   <div className=" campus-button">
                   <button className="video-play-button"><FontAwesomeIcon icon={faPlay} /></button>
                   </div>
                </div>
            </div>
        </section>
    );
};

export default OurCampas;