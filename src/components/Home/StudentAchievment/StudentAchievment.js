import { faAngleDoubleRight, faBookOpen } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './StudentAchievment.css'
const achievment = [
    {
        title: 'P2P Facebook Global Digital Challenge',
        year: 2021,
        img: 'https://picsum.photos/200/350'
    },
    {
        title: 'P2P Facebook Global Digital Challenge',
        year: 2021,
        img: 'https://picsum.photos/200/350'
    },
    {
        title: 'P2P Facebook Global Digital Challenge',
        year: 2021,
        img: 'https://picsum.photos/200/350'
    },
]
const StudentAchievment = () => {
    return (
        <div className="achiev-box">
            {achievment.map((achiev, i) => <div key={i} data-aos="fade-up-left" data-aos-duration={3000} className="d-flex border-bottom pb-4 mb-4 ">

                <div className="achiev-img">
                    
                <a href="#"><img src={achiev.img} alt=".." /></a>
                </div>
                <div className="ps-3">
                    <h6><a className="text-decoration-none text-dark" href="#">{achiev.title}</a></h6>
                    <ul className="list-unstyled">
                        <li>{achiev.year}</li>
                        <li className="pt-2">
                            <a className="text-decoration-none text-dark" href="#"><FontAwesomeIcon className="text-warning" icon={faBookOpen} /> View Deatil</a>
                        </li>
                    </ul>
                </div>

            </div>)}
            <button className='btn achiev-view-btn float-end'>View All <FontAwesomeIcon icon={faAngleDoubleRight}/></button>

        </div>
    );
};

export default StudentAchievment;