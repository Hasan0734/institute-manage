import React from 'react';
import HeaderTop from '../HeaderTop/HeaderTop';
import MobileNavigation from '../Navigation/MobileNavigation/MobileNavigation';
import Navigation from '../Navigation/Navigation';

const Header = () => {
    return (
        <React.Fragment>
            <HeaderTop></HeaderTop>
            <Navigation></Navigation>
            <MobileNavigation />
        </React.Fragment>
    );
};

export default Header;