import React from 'react';
import './LatestNews.css'
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles




const LatestNews = () => {
    return (
        <section className="news-section">
            <div className="container site-heading"> 
                <h2 className="text-center bottom-bg">Latest News</h2>
                <div>
                <Swiper
      spaceBetween={50}
      slidesPerView={3}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide>Slide 1</SwiperSlide>
      <SwiperSlide>Slide 2</SwiperSlide>
      <SwiperSlide>Slide 3</SwiperSlide>
      <SwiperSlide>Slide 4</SwiperSlide>
      ...
    </Swiper>

                </div>
            </div>
        </section>
    );
};

export default LatestNews;