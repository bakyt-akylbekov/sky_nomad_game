import React, {useRef, useState} from 'react';
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
import mobJoystick from "../../assets/images/About/mobileJoy.png";
import img1 from "../../assets/images/About/img1.png";
import img2 from "../../assets/images/About/img2.png";
import img3 from "../../assets/images/About/img3.png";
import yellowLine from "../../assets/images/About/yellow-line.png";
import btnPlay from "../../assets/images/About/ButtonPlay.png";
import icon1 from "../../assets/images/Reason/icon1.png";
import icon2 from "../../assets/images/Program/icon2.png";
import video_mp4 from "../../assets/video/game-video.mp4";
import video_webm from "../../assets/video/game-video.webm";

import './style.css'

const About = () => {
    const [modal, setModal] = useState(false);
    const video = useRef(null);

    return (
        <section className='about' id='about'>
            <div className='container'>
                <div className='about__block'>
                    <div className='about__content'>
                        <h1 className="about__title">
                            Разработка игр <br/> на <span>Unity</span>
                        </h1>
                        <p className="about__text">
                            Освойте разработку игр с нуля и получите всё для
                            уверенного старта в геймдеве. Вы научитесь писать на <span>С#</span>, работать
                            с <span>Unity</span> и воплощать идеи в собственных
                            играх.
                        </p>
                        <a href="#contact">
                            <button type='submit'
                                    className="about__btn"
                            >
                                Записаться
                                <img src={btnTop} alt="btn-top" className='about__btn-top'/>
                                <img src={btnBottom} alt="btn-bottom" className='about__btn-bottom'/>
                            </button>
                        </a>
                    </div>
                </div>
            </div>
            <img src={joystick} alt="" className="about__joystick"/>
            <img src={mobJoystick} alt="" className="about__mob-joystick"/>
            <ul className="about__icons">
                <li className="about__icon">
                    <a href="https://teleg.one/Skynomadacademy" className="about__link" target='_blank'
                       rel="noreferrer">
                        <img src={telegram} alt="telegram" className='about__telegram'/>
                    </a>
                </li>
                <li className="about__icon">
                    <a href="https://www.instagram.com/sky.nomad.academy/?hl=ru" className="about__link" target='_blank'
                       rel="noreferrer">
                        <img src={instagram} alt="instagram" className='about__instagram'/>
                    </a>
                </li>
                <li className="about__icon">
                    <a href="https://www.facebook.com/sky.nomad.academy" className="about__link" target='_blank'
                       rel="noreferrer">
                        <img src={facebook} alt="facebook" className='about__facebook'/>
                    </a>
                </li>
                <li className="about__icon">
                    <a href="https://wa.me/996550602010" className="about__link" target='_blank' rel="noreferrer">
                        <img src={whatsapp} alt="whatsapp" className='about__whatsapp'/>
                    </a>
                </li>
                <li className="about__icon">
                    <a href="https://www.tiktok.com/@sky.nomad.academy?lang=en" className="about__link" target='_blank'
                       rel="noreferrer">
                        <img src={tiktok} alt="tiktok" className='about__tiktok'/>
                    </a>
                </li>
            </ul>
            <div className="about__images">
                <img src={img1} alt="" className="about__img-1"/>
                <img src={img2} alt="" className="about__img-2"/>
                <img src={img3} alt="" className="about__img-3"/>
                <div className="about__gallery-block">
                    {
                        modal && <Modal active={modal} setActive={setModal}>
                            <div className="video-wrapper">
                                <video
                                    ref={video}
                                    controls
                                    autoPlay
                                    loop
                                    id="video"
                                    className="player-wrapper"
                                    muted
                                >

                                    <source src={video_webm} type="video/webm"/>
                                    <source src={video_mp4} type="video/mp4"/>

                                    Ваш браузер не поддерживает встроенные видео :(
                                </video>
                            </div>
                        </Modal>
                    }
                    <span className='about__gallery-block-link' onClick={() => setModal(!modal)}>
                        <img src={btnPlay} alt="btnPlay"/>
                        <span className='about__gallery-title'>
                            Галерея <br/> <span>SkyNomadAcademy</span>
                        </span>
                    </span>
                </div>
            </div>
            <img src={leftCircle} className='about__left-circle' alt="about__left-circle"/>
            <img src={rightCircle} className='about__right-bottom-circle' alt="about__right-bottom-circle"/>
            <img src={yellowLine} className='about__yellow-line' alt="about__yellow-line"/>
            <img src={icon1} className='about__icon-1' alt="about__icon-1"/>
            <img src={icon2} className='about__icon-2' alt="about__icon-2"/>
        </section>
    );
};

export default About;