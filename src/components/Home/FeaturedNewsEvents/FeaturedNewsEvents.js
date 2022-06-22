import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const array = [1, 2]
const FeaturedNewsEvents = () => {
    return (
        <div className="row">
            {array.map((arr, i) => <div key={i} className="col-md-6">
                <div className="card" data-aos="fade-up" data-aos-duration={3000}>
                    <img className="img-fluid card-img-top" src={`https://picsum.photos/200/30${arr}`} style={{ height: '262px', width: '100%' }} alt="..." />
                    <div className="card-body p-4">
                        <div style={{ height: '150px' }}>
                            <h5 className="card-title text-justify event-title ps-0"><a className="text-decoration-none" href="#">ঢাবি’র শতবর্ষপূর্তিতে ভার্চুয়াল সভা অনুষ্ঠিত। ঢাকা বিশ্ববিদ্যালয় সর্বক্ষেত্রে নেতৃত্ব তৈরিতে গুরুত্বপূর্ণ ভূমিকা পালন করে আসছে --উপাচার্য</a></h5>
                        </div>
                        <div className="card-footer mt-4 pt-4 px-0" style={{ background: 'none' }}>
                            <button className="btn btn-warning read-more-button"><span>READ MORE...</span> <FontAwesomeIcon className="float-end btn-icon" icon={faCheckCircle} /></button>
                        </div>
                    </div>
                </div>

            </div>)}
        </div>
    );
};

export default FeaturedNewsEvents;