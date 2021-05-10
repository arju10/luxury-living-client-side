import React from 'react';
import Navbar from './Navbar/Navbar';
import TopHeaderBanner from './TopHeaderBanner/TopHeaderBanner';


const Header = () => {
    return (
        <div className = "bg-light">
            <Navbar/>
          <TopHeaderBanner/>
        </div>
    );
};

export default Header;