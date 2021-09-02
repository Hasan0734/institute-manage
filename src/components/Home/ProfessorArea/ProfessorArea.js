import React from 'react';
import Aktaruzzaman from '../../../image/professor/aktaruzzaman.jpg';
import './ProfessorArea.css';
const ProfessorArea = () => {
    return (
        <section className="feature-area">
            <div className="container">
           
                <div className="row">
                    <div className="col-md-3">
                        <div className="feature-img">
                        <img src={Aktaruzzaman} alt="" />
                        </div>
                    </div>
                    <div className="col-md-9">
                        <div>
                            <h4>Message from the Vice Chancellor</h4>
                            <p>Welcome to the University of Dhaka’s website, featuring the oldest, largest and the premier multidisciplinary university of Bangladesh!&nbsp;
                            Founded in 1921, The University of Dhaka has always had the mission of uplifting the educational standards of the people of the region. It was initially meant to provide tertiary education to people who didn’t have access to higher studies till then. Subsequently, it has contributed significantly to the socio-cultural and political development of what was once East Bengal and then East Pakistan, and is now Bangladesh.Since its establishment, the university has been fulfilling the hopes and aspirations  ... 
                         </p>
                        </div>
                    </div>
                </div>
                </div>
        </section>
    );
};

export default ProfessorArea;