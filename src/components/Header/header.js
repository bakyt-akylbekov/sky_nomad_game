import React from 'react';
import Burger from "./Burger";
import logo from '../.././assets/images/Header/Logo.png'

import './style.css'


const Header = () => {
    return (
        <header className='header'>
            <div className='container'>
                <div className='header__block'>
                    <a href="#about" className='header__logo'>
                        <img src={logo} alt="logo"/>
                    </a>
                   <Burger/>
                </div>
            </div>

        </header>
    );
};

export default Header;