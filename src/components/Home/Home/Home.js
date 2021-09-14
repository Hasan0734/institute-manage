import React from 'react';
import EventWithNotice from '../EventsWithNotice/EventWithNotice';
import Header from '../Header/Header';
import LatestNews from '../LatestNews/LatestNews';
import OurCampas from '../OurCampas/OurCampus';

import ProfessorSection from '../ProfessorSection/ProfessorSection';
import Research from '../Research/Research';
import Slider from '../Slider/Slider';
import UniversityNumbers from '../UniversityNumbers/UniversityNumbers';

import ViceChancellor from '../ViceChancellor/ViceChancellor';
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
            <h1>This is Home</h1>
            <h1>This is Home</h1>
            <h1>This is Home</h1>


        </div>
    );
};

export default Home;