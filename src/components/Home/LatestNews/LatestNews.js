import React from 'react';
import LatestNewsCarousel from '../LatestNewsCarousel/LatestNewsCarousel';
import './LatestNews.css'


const LatestNews = () => {
    return (
        <section className="news-section">
            <div className="container">
                <div className="section-heading">
                    <h2 className="text-center bottom-bg">Latest News</h2>
                </div>

                <div >
                    <LatestNewsCarousel />
                </div>
            </div>
        </section>
    );
};

export default LatestNews;