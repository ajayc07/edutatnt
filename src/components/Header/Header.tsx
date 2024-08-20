import React from 'react';
import './Header.scss';
import Button from '../Buttons/Button';

interface HeaderProps {
}

const Header: React.FC<HeaderProps> = ({ }) => {
    return (
        <header>
            <div className="header-item title">EDUTANTR</div>
            <div className="header-item">Courses</div>
            <div className="header-item">About Us</div>
            <div className="header-item search-box">
                <input type="search" placeholder='Search'/>
            </div>
            <div className="header-item">Login</div>
            <div className="header-item join-for-free">
                <Button displayText='Join for Free'/>
            </div>
        </header>
    );
};

export default Header;
