import React from 'react';
import './LatestNews.css'
import LatestNewsCarousel from './LatestNewsCarousel/LatestNewsCarousel';

const LatestNews = () => {
    return (
        <section className="news-section">
            <div className="container site-heading"> 
                <h2 className="text-center bottom-bg">Latest News</h2>
                <div>
                    <LatestNewsCarousel/>
                </div>
            </div>
        </section>
    );
};

export default LatestNews;