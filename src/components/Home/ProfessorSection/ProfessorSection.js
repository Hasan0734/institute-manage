import React from 'react';
import kamal from '../../../image/professor/kamal.jpg';
import mamtaz from '../../../image/professor/mamtaz.jpg';
import samad from '../../../image/professor/samad.jpg';
const professors = [
    {
        name: "Professor Dr. Muhammad Samad",
        position: "Pro Vice Chancellor (Administration)",
        img: samad,
    },
    {
        name: "Professor Dr. A. S. M. Maksud Kamal",
        position: "Pro Vice Chancellor (Academic)",
        img: kamal,
    },
    {
        name: "Professor Mamtaz Uddin Ahmed",
        position: "Treasurer",
        img: mamtaz,
    },
]

const ProfessorSection = () => {
    return (
        <section className="py-4">
            <div className="container">
                <div className="row" data-aos="fade-left" data-aos-duration="1000" >
                    {
                        professors.map(professor => <div className="col-md-4">

                            <div className="card">
                                <a href="#professor" className="area-box text-decoration-none text-dark">
                                    <div style={{ height: '220px' }}>
                                        <p className="d-flex justify-content-center mb-0"><img src={professor.img} height="180" width="200" alt="" /></p>
                                        <p className="prof-name text-center mb-0">{professor.name}</p>
                                        <h6 className="prof-position text-center">{professor.position}</h6>
                                    </div>
                                </a>
                            </div>
                        </div>
                        )
                    }

                </div>
            </div>
        </section>
    );
};

export default ProfessorSection;