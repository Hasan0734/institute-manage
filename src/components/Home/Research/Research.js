import React from 'react';
import ResearchCarousel from '../ResearchCarousel/ResearchCarousel';

const Research = () => {
    return (
        <section className="py-5" style={{ background: '#f7f7f7' }}>
            <div className="container">
                <div className="section-heading">
                    <h2 className="text-center bottom-bg">Research Activities</h2>
                </div>
                <ResearchCarousel></ResearchCarousel>
            </div>
        </section>
    );
};

export default Research;