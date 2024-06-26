import React from 'react';
import './Header.css'; // Ensure you have this CSS file in the same directory
import logo from '../logo.png';

const Header = () => {
    return (
        <div className="header">
            {/* Replace the src attribute with the path to your actual logo */}
            <img src={logo} alt="SaveAPlate Logo" className="logo" />
            <h1>SaveAPlate</h1>
        </div>
    );
};

export default Header;