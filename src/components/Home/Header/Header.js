import React from 'react';
import HeaderTop from '../HeaderTop/HeaderTop';
import Navigation from '../Navigation/Navigation';
import Slider from '../Slider/Slider';

const Header = () => {
    return (
        <>
          <HeaderTop></HeaderTop>
            <Navigation></Navigation>
            <Slider></Slider>
        </>
    );
};

export default Header;