import { faPlay } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import wlimg from '../../../image/wl-img.jpg'
import './WelcomeSection.css'
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
const WelcomeSection = () => {
    const [openFirst, setOpenFirst] = React.useState(false);
    const [openSecond, setOpenSecond] = React.useState(false);
    return (
        <section className="wl-section">
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <div className="ps-0 pe-3">
                            <h3>Welcome to University of Dhaka</h3>

                            <p className="text-justify content-text">On the first day of July 1921 the University of Dhaka opened its doors to students with Sir P.J. Hartog as the first Vice-Chancellor of the University. The University was set up in a picturesque part of the city known as Ramna on 600 acres of land.The University started its activities with 3 Faculties,12 Departments, 60 teachers, 877 students and 3 dormitories (Halls of Residence) for the students. At present the University consists of 13 Faculties, 83 Departments, 12 Institutes, 20 residential halls, 3 hostels and more than 56 Research Centres. The number of students and teachers has risen to about 37018 and 1992 respectively.The main purpose of the University was to create new areas of knowledge and disseminate this knowledge to the society through its students. Since its inception the University has a distinct character of having distinguished scholars as faculties who have enriched the global pool of knowledge by making notable contributions in the fields of teaching and research.</p>
                            <button className="btn btn-warning w-100">READ MORE...</button>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="ps-3 pe-0" style={{ position: 'relative' }}>
                            <img className="img-fluid" src={wlimg} alt="" />
                            <button className="video-play-button"  onClick={() => setOpenFirst(true)}><FontAwesomeIcon icon={faPlay} /></button>
                           <div style={{position: 'relative'}}>
                           <Modal open={openFirst} onClose={() => setOpenFirst(false)} center>
                            <iframe width="560" height="315" src="https://www.youtube.com/embed/3gYMR7ppHbw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                            </Modal>
                           </div>
                        </div>
                      
                    </div>


                </div>
            </div>
        </section>
    );
};

export default WelcomeSection;