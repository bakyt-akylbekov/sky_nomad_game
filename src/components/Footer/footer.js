import React from 'react';
import logo from '../.././assets/images/Header/Logo.png'
import instagram from '../.././assets/images/Footer/Icon awesome-instagram.svg'
import facebook from '../.././assets/images/Footer/Icon awesome-facebook-f.svg'
import telegram from '../.././assets/images/Footer/Icon awesome-telegram-plane.svg'
import whatsapp from '../.././assets/images/Footer/Icon awesome-whatsapp.svg'
import tiktok from '../.././assets/images/Footer/Icon simple-tiktok.svg'

import './style.css'

const Footer = () => {
    return (
        <footer className='footer'>
            <div className="container">
                <div className="row">
                    <div className="col-3">
                        <div className="footer__item">
                            <a href="#about">
                                <img src={logo} alt="logo" className='footer__logo'/>
                            </a>
                        </div>
                    </div>
                    <div className="col-3">
                        <div className="footer__item">

                            <a href="tel:0550 60 20 10" className='footer__tel'>
                                0550 60 20 10
                            </a>
                            <a href="tel:0505 60 20 10" className='footer__tel'>
                                0505 60 20 10
                            </a>
                            <a href="tel:0777 60 20 10" className='footer__tel'>
                                0777 60 20 10
                            </a>
                        </div>
                    </div>
                    <div className="col-3">
                        <div className="footer__item">
                            <a href="mailto:Sky.nomad.academy@gmail.com" className="footer__email">
                                Sky.nomad.academy@gmail.com
                            </a>
                        </div>
                    </div>
                    <div className="col-3">
                        <div className="footer__item footer__item-4">
                            <ul className="footer__icons">
                                <li className="footer__icon">
                                    <a href="https://www.instagram.com/sky.nomad.academy/?hl=ru" className="footer__link" target='_blank' rel="noreferrer">
                                        <img src={instagram} alt="instagram" className='footer__instagram'/>
                                    </a>
                                </li>
                                <li className="footer__icon">
                                    <a href="https://www.facebook.com/" className="footer__link" target='_blank'  rel="noreferrer">
                                        <img src={facebook} alt="facebook" className='footer__facebook'/>
                                    </a>
                                </li>
                                <li className="footer__icon">
                                    <a href="https://teleg.one/Skynomadacademy" className="footer__link" target='_blank'  rel="noreferrer">
                                        <img src={telegram} alt="telegram" className='footer__telegram'/>
                                    </a>
                                </li>
                                <li className="footer__icon">
                                    <a href="https://wa.me/996550602010" className="footer__link" target='_blank'  rel="noreferrer">
                                        <img src={whatsapp} alt="whatsapp" className='footer__whatsapp'/>
                                    </a>
                                </li>
                                <li className="footer__icon">
                                    <a href="https://www.tiktok.com/@sky.nomad.academy?lang=en" className="footer__link" target='_blank'  rel="noreferrer">
                                        <img src={tiktok} alt="tiktok" className='footer__tiktok'/>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;