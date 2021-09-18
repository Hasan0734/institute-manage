import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';


const videos = [
    { link: 'https://www.youtube.com/embed/VGCThenneZs', title: "ঢাকা বিশ্ববিদ্যালয় কালো দিবস | Dhaka University Black Day" },
    { link: 'https://youtube.com/embed/1qXfobkeCbo', title: "ঢাকা বিশ্ববিদ্যালয়ের গৌরবময় শতবর্ষ | ঢাকা বিশ্ববিদ্যালয় দিবস ২০২১ | DU DAY" },
    { link: 'https://youtube.com/embed/bgKRMw3hDI8', title: "Bangabandhu's Birth Anniversary | Dhaka University" },
    { link: 'https://youtube.com/embed/eA66qLL2HNU', title: "National Poet Kazi Nazrul Islam's 45th Death Anniversary | Dhaka University" },
    { link: 'https://www.youtube.com/embed/lr_oM-onuMc', title: "Dhaka University Senate Session 2021" },
    { link: 'https://www.youtube.com/embed/3u4fPARSWgU', title: "National Mourning Day 2021 observed at Dhaka University" },
    { link: 'https://www.youtube.com/embed/ey8vCIR_GWg', title: "জুমআর খুতবা: ঢাকা বিশ্ববিদ্যালয়-১০০ বছর পূর্তি এবং বিশ্ববিদ্যালয় কেন্দ্রীয় মসজিদ" },
    { link: 'https://www.youtube.com/embed/bgKRMw3hDI8', title: "Bangabandhu's Birth Anniversary | Dhaka University" },

]
const ViedeoSection = () => {
    return (
        <section className="py-5">
            <div className="container mt-4">
                <OwlCarousel
                    className='owl-theme'
                    items={3}
                    dots={true}
                    autoplay={true}
                    autoplayTimeout={3000}
                    autoplayHoverPause={true}
                    loop margin={30}
                    data-aos="fade-up-right"
                    data-aos-delay={500}
                    data-aos-duration={1000}
                >

                    {videos.map(video => <div className="">

                        <iframe width="100%" height="240" src={video.link} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>
                        <h6 className="text-primary text-justify">{video.title}</h6>
                    </div>)}

                </OwlCarousel>
                <div className="text-center mt-3">
                    <button className="btn btn-warning px-5 py-2"><strong>View All</strong></button>
                </div>
            </div>
        </section>
    );
};

export default ViedeoSection;