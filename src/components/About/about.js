import React, {useState} from 'react';
import Modal from "../Modal/modal";
import btnTop from "../../assets/images/Contact/btn-top.png";
import btnBottom from "../../assets/images/Contact/btn-bottom.png";
import instagram from "../../assets/images/Footer/Icon awesome-instagram.svg";
import facebook from "../../assets/images/Footer/Icon awesome-facebook-f.svg";
import telegram from "../../assets/images/Footer/Icon awesome-telegram-plane.svg";
import whatsapp from "../../assets/images/Footer/Icon awesome-whatsapp.svg";
import tiktok from "../../assets/images/Footer/Icon simple-tiktok.svg";
import leftCircle from "../../assets/images/About/left-circle.png";
import rightCircle from "../../assets/images/About/right-circle.png";
import joystick from "../../assets/images/About/joystick.png";
import img1 from "../../assets/images/About/img1.png";
import img2 from "../../assets/images/About/img2.png";
import img3 from "../../assets/images/About/img3.png";
import yellowLine from "../../assets/images/About/yellow-line.png";


import './style.css'

const About = () => {

    const [modalActive, setModalActive] = useState(true);

    return (
        <section className='about' id='about'>
            <div className='container'>
                <div className='about__block'>
                    <div className='about__content'>
                        <h1 className="about__title">
                            Разработка игр <br/> на <span>Unity</span>
                        </h1>
                        <p className="about__text">
                            Освойте разработку игр с нуля и получите всё для <br/> уверенного старта в геймдеве. Вы
                            научитесь писать на <br/> <span>С#</span>, работать с <span>Unity</span> и воплощать идей в
                            собственных <br/> играх
                        </p>
                        <button type='submit'
                                className="about__btn"
                                onClick={() => setModalActive(true)}
                        >
                            Записаться
                            <img src={btnTop} alt="btn-top" className='about__btn-top'/>
                            <img src={btnBottom} alt="btn-bottom" className='about__btn-bottom'/>
                        </button>
                        <Modal active={modalActive} setActive={setModalActive}>
                        </Modal>
                    </div>
                </div>
            </div>
            <img src={joystick} alt="" className="about__joystick"/>
            <ul className="about__icons">
                <li className="about__icon">
                    <a href="https://teleg.one/Skynomadacademy" className="about__link" target='_blank'
                       rel="noreferrer">
                        <img src={telegram} alt="telegram"/>
                    </a>
                </li>
                <li className="about__icon">
                    <a href="https://www.instagram.com/sky.nomad.academy/?hl=ru" className="about__link" target='_blank'
                       rel="noreferrer">
                        <img src={instagram} alt="instagram"/>
                    </a>
                </li>
                <li className="about__icon">
                    <a href="https://www.facebook.com/" className="about__link" target='_blank' rel="noreferrer">
                        <img src={facebook} alt="facebook"/>
                    </a>
                </li>
                <li className="about__icon">
                    <a href="https://wa.me/996550602010" className="about__link" target='_blank' rel="noreferrer">
                        <img src={whatsapp} alt="whatsapp"/>
                    </a>
                </li>
                <li className="about__icon">
                    <a href="https://www.tiktok.com/@sky.nomad.academy?lang=en" className="about__link" target='_blank'
                       rel="noreferrer">
                        <img src={tiktok} alt="tiktok"/>
                    </a>
                </li>
            </ul>
            <div className="about__images">
                <img src={img1} alt="" className="about__img-1"/>
                <img src={img2} alt="" className="about__img-2"/>
                <img src={img3} alt="" className="about__img-3"/>
            </div>
            <img src={leftCircle} className='about__left-circle' alt=""/>
            <img src={rightCircle} className='about__right-top-circle' alt=""/>
            <img src={rightCircle} className='about__right-bottom-circle' alt=""/>
            <img src={yellowLine} className='about__yellow-line' alt=""/>
        </section>
    );
};

export default About;