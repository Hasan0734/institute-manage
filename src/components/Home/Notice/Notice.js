import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Notice.css'
const notices = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const Notice = () => {
    return (
        <div className="notice">

            {notices.map((notice, i) => <div key={i} className="pb-4 border-bottom px-4">
                <div className="card-body">
                    <h4 className="card-title notice-title text-justify">
                        <a href="/#">সম্মানিত শিক্ষক, কর্মকর্তা ও কর্মচারীদের ভ্যাকসিন সার্টিফিকেট,ভ্যাকসিন গ্রহণের প্রমাণপত্র প্রদান প্রসঙ্গে</a>
                    </h4>
                    <p>Published: 30 Aug, 2021</p>
                    <button className="btn btn-outline-dark btn-border-round"><FontAwesomeIcon icon={faPlus} /> Read More</button>
                </div>
            </div>)}

        </div>
    );
};

export default Notice;