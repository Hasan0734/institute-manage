import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Events.css'

const events = [1, 2]
const Events = () => {
    return (
        <div className="row">
            {events.map((arr, i) => <div key={i} className="col-md-6">
                <div className="card event-card-area mb-5"   data-aos="zoom-in-up" data-aos-duration="2000">
                    <img className="img-fluid" src={`https://picsum.photos/200/30${arr}`} style={{ height: '240px', width: '100%' }} alt="..." />
                    <div className="card-body d-flex event-card">
                        <div className="event-date">
                            <h2><strong>10</strong></h2>
                            <p>Sep, 2021 </p>
                        </div>
                        <div className="event-title card-title ">
                            <h4 className="text-justify"><a href="#event">আগামী ১০ সেপ্টেম্বর ২০২১ইং তারিখ বিশ্ব আত্নহত্যা প্রতিরোধ দিবস উপলক্ষ্যে একটি ওয়েবিনার অনুষ্ঠিত হবে</a></h4>
                            <button className="btn btn-outline-dark btn-border-round mt-4 px-3"><FontAwesomeIcon icon={faPlus} /> Read More</button>
                        </div>
                    </div>
                </div>
            </div>)}
        </div>


    );
};

export default Events;