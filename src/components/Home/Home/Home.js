import React from 'react';
import EventWithNotice from '../EventsWithNotice/EventWithNotice';
import FeaturedAchivments from '../FeaturedAchivments/FeaturedAchivments';
import FooterSection from '../FooterSection/FooterSection';
import Header from '../Header/Header';
import LatestNews from '../LatestNews/LatestNews';
import OurCampas from '../OurCampas/OurCampus';
import ProfessorSection from '../ProfessorSection/ProfessorSection';
import Research from '../Research/Research';
import Slider from '../Slider/Slider';
import UniversityNumbers from '../UniversityNumbers/UniversityNumbers';
import ViceChancellor from '../ViceChancellor/ViceChancellor';
import ViedeoSection from '../VideoSection/ViedeoSection';
import WelcomeSection from '../WelcomeSection/WelcomeSection';

const Home = () => {
    return (
        <div>
            <Header />
            <Slider />
            <ViceChancellor />
            <ProfessorSection />
            <UniversityNumbers />
            <WelcomeSection />
            <LatestNews />
            <EventWithNotice />
            <Research />
            <OurCampas />
            <FeaturedAchivments />
            <ViedeoSection />
            <FooterSection />
        </div>
    );
};

export default Home;