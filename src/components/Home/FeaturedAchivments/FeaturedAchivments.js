import { faAngleDoubleRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import FeaturedNewsEvents from '../FeaturedNewsEvents/FeaturedNewsEvents';
import StudentAchievment from '../StudentAchievment/StudentAchievment';
import './FeaturedAchivments.css'
const FeaturedAchivments = () => {
    return (
        <section className="py-5 ">
            <div className="container mt-4">
                <div className="row">
                    <div className="col-md-8">
                        <div className="featured-heading border border-1 p-3 mb-5">
                            <h4 className="text-uppercase fs-5"><span>Featured- </span>
                                <strong>News & Events</strong>
                                <span>
                                    <a className="float-end text-decoration-none text-dark" href="#home">View All <FontAwesomeIcon icon={faAngleDoubleRight} /> </a>
                                </span>
                            </h4>
                        </div>
                        <FeaturedNewsEvents />
                    </div>
                    <div className="col-md-4">
                       
                            <h4 className="border std-achievment fs-5">Student Achievments</h4>
                            <StudentAchievment/>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FeaturedAchivments;