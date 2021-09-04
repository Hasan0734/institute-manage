import { faSchool, faUniversity, faUsers, faUserShield } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './UniversityNumbers.css';
import bg from '../../../image/bg.jpg'
const numbers = [
    {
        icon: faUniversity,
        number: 1921,
        name: "Founded",
        col: 2
    },
    {
        icon: faUserShield,
        number: 2000,
        memeberUp: true,
        name: "Faculty Members",
        col: 3
    },
    {
        icon: faUsers,
        number: 37000,
        memeberUp: true,
        name: "Regular Students",
        col: 3
    },
    {
        icon: faSchool,
        number: '134',
        name: "Constituent & Affiliated Colleges",
        col: 3
    },
]
const UniversityNumbers = () => {
    return (
        <section style={{ marginTop: '90px' }}>
            <div className="container">
                <div className="site-heading">
                    <h2 className="text-center ">University of Dhaka Numbers</h2>
                </div>
                </div>
                <div className="numbers-area background-shadow" style={{backgroundImage: `url(${bg})`}}>
                    <div className="container">
                    <div className="row">
                        {numbers.map(number => <div className={`col-md-${number.col}`}>
                            <div>
                                <div className="d-flex justify-content-center"> 
                                <div className="numbers-icon d-flex justify-content-center align-items-center">
                                    <FontAwesomeIcon icon={number.icon} />
                                </div>
                                </div>
                                <div className="numbers-data text-center text-white">
                                    <h2>{number.number}{number.memeberUp  && "+"}</h2>
                                    <h4>{number.name}</h4>
                                </div>
                            </div>
                        </div>)}
                    </div>
                    </div>
                </div>
            
        </section>
    );
};

export default UniversityNumbers;