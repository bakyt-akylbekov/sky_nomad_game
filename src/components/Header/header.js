import React from 'react';
// import Burger from "./Burger";
import logo from '../.././assets/images/Header/Logo.png'

import './style.css'


const Header = () => {
    return (
        <header className='header'>
            <div className='container'>
                <div className='header__block'>
                    <a href="#about" className='header__logo'>
                        <img src={logo} className='header__img' alt="logo"/>
                    </a>
                    <div className="header__menu">
                        <a href='#about' className="header__link">О нас</a>
                        <a href='#program' className="header__link">Программы</a>
                        <a href='#address' className="header__link">Адрес</a>
                        <a href='#contact' className="header__link">Контакты</a>
                    </div>
                   {/*<Burger/>*/}
                </div>
            </div>

        </header>
    );
};

export default Header;