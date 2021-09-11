import React from 'react';
import Header from '../Header/Header';
import LatestNews from '../LatestNews/LatestNews';
import Slider from '../Slider/Slider';
import UniversityNumbers from '../UniversityNumbers/UniversityNumbers';
import ProfessorSection from '../ViceChancellor/ProfessorSection/ProfessorSection';
import ViceChancellor from '../ViceChancellor/ViceChancellor';
import WelcomeSection from '../WelcomeSection/WelcomeSection';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Slider></Slider>
            <ViceChancellor></ViceChancellor>
            <ProfessorSection></ProfessorSection>
            <UniversityNumbers></UniversityNumbers>
            <WelcomeSection></WelcomeSection>
            <LatestNews></LatestNews>
            <h1>This is Home</h1>
            <h1>This is Home</h1>
            <h1>This is Home</h1>
            <h1>This is Home</h1>
            <h1>This is Home</h1>
            <h1>This is Home</h1>

        </div>
    );
};

export default Home;