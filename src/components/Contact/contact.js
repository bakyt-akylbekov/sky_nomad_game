import React, {useState} from 'react';
import axios from "axios";

import bottomLine from '../../assets/images/Contact/bottom-line.png'
import btnTop from '../../assets/images/Contact/btn-top.png'
import btnBottom from '../../assets/images/Contact/btn-bottom.png'
import joystick1 from '../../assets/images/Contact/joystick1.png'
import joystick2 from '../../assets/images/Contact/joystick2.png'
import icon1 from '../../assets/images/Contact/icon1.png'
import icon2 from '../../assets/images/Contact/icon2.png'
import icon3 from '../../assets/images/Contact/icon3.png'
import icon4 from '../../assets/images/Contact/icon4.png'
import ellipse1 from '../../assets/images/Contact/ellipse1.png'
import ellipse2 from '../../assets/images/Contact/ellipse2.png'
import redCircle from '../../assets/images/Contact/img.png'
import logo from "../../assets/images/Header/Logo.png";
import instagram from "../../assets/images/Footer/Icon awesome-instagram.svg";
import facebook from "../../assets/images/Footer/Icon awesome-facebook-f.svg";
import telegram from "../../assets/images/Footer/Icon awesome-telegram-plane.svg";
import whatsapp from "../../assets/images/Footer/Icon awesome-whatsapp.svg";
import tiktok from "../../assets/images/Footer/Icon simple-tiktok.svg";

import './style.css'

const Contact = () => {
    const [email, setEmail] = useState('');
    const [tel, setTel] = useState('');
    const [resultType, setResultType] = useState(null);
    const [notification, setNotification] = useState(false);


    const sendFormHandler = () => {
        const params = new URLSearchParams();
        params.append('email', email);
        params.append('tel', tel);
        const config = {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        };
        axios.post('https://send-master.herokuapp.com/send', params, config)
            .then((result) => {
                console.log(result);
                console.log(result.status);
                if (result.status === 200) {
                    console.log("???????? ???????????? ??????????????!");
                    setResultType('success');
                    setNotification(true);
                    setTimeout(() => {
                        setNotification(false);
                    }, 7000)
                } else {
                    console.log("???????????????????? ?????? ??????!");
                }
            })
            .catch((err) => {
                console.log(err);
            });
        setEmail('');
        setTel('');
    };


    const sendForm = () => {
        if(email.length === 0 && tel.length === 0){
            setEmail('?????????????? ??????????, ????????????????????!');
            setTel('?????????????? ?????????? ????????????????, ????????????????????!');
            setTimeout(() => {
                setEmail('');
                setTel('')
            }, 5000)
        } else {
            sendFormHandler();
        }
    };

    return (
        <section className='contact' id='contact'>
            {notification &&
            <div className={resultType === 'success' ? 'contact__success' : 'contact__error'}>
                {resultType === "success" && <p>???????? ???????????? ??????????????!</p>}
                {resultType !== "success" && <p>????????????????????, ???????????????????? ?????? ??????!</p>}
            </div>
            }
            <h2 className="contact__title">
                ?????????????? ????????????????????
            </h2>
            <div className="contact__block">
                <div className="contact__form">
                    <h4 className="contact__subtitle">???????????????? ????????????</h4>
                    <div className="contact__item">
                        <input type="email"
                               className="contact__input"
                               placeholder='example@mail.com'
                               name='email'
                               value={email}
                               onChange={(e) => setEmail(e.target.value)}
                               required
                        />
                        <img src={bottomLine} alt="bottomLine" className='contact__bottom-line'/>
                    </div>
                    <div className="contact__or">
                        <p>??????</p>
                    </div>
                    <div className="contact__item">
                        <input type="tel"
                               className="contact__input"
                               placeholder='+996 000 000 000'
                               value={tel}
                               onChange={(e) => setTel(e.target.value)}
                               required
                        />
                        <img src={bottomLine} alt="bottomLine" className='contact__bottom-line'/>
                    </div>
                    <button type='submit'
                            onClick={sendForm}
                            className="contact__btn"
                    >
                        ????????????????????
                        <img src={btnTop} alt="btn-top" className='contact__btn-top'/>
                        <img src={btnBottom} alt="btn-bottom" className='contact__btn-bottom'/>
                    </button>
                </div>
            </div>

            <div className="container container__contact">
                <div className="row">
                    <div className="col-3">
                        <div className="footer__item">
                            <a href="#about">
                                <img src={logo} alt="logo" className='footer__logo'/>
                            </a>
                        </div>
                    </div>
                    <div className="col-3">
                        <div className="footer__item footer__item-2">
                            <a href="tel:+996 505 60 20 10" className='footer__tel'>
                                +996 505 60 20 10
                            </a>
                        </div>
                    </div>
                    <div className="col-3">
                        <div className="footer__item footer__item-3">
                            <a href="mailto:sky.nomad.academy@gmail.com" className="footer__email">
                                sky.nomad.academy@gmail.com
                            </a>
                        </div>
                    </div>
                    <div className="col-3">
                        <div className="footer__item footer__item-4">
                            <ul className="footer__icons">
                                <li className="footer__icon">
                                    <a href="https://www.instagram.com/sky.nomad.academy/?hl=ru"
                                       className="footer__link" target='_blank' rel="noreferrer">
                                        <img src={instagram} alt="instagram" className='footer__instagram'/>
                                    </a>
                                </li>
                                <li className="footer__icon">
                                    <a href="https://www.facebook.com/" className="footer__link" target='_blank'
                                       rel="noreferrer">
                                        <img src={facebook} alt="facebook" className='footer__facebook'/>
                                    </a>
                                </li>
                                <li className="footer__icon">
                                    <a href="https://teleg.one/Skynomadacademy" className="footer__link" target='_blank'
                                       rel="noreferrer">
                                        <img src={telegram} alt="telegram" className='footer__telegram'/>
                                    </a>
                                </li>
                                <li className="footer__icon">
                                    <a href="https://wa.me/996550602010" className="footer__link" target='_blank'
                                       rel="noreferrer">
                                        <img src={whatsapp} alt="whatsapp" className='footer__whatsapp'/>
                                    </a>
                                </li>
                                <li className="footer__icon">
                                    <a href="https://www.tiktok.com/@sky.nomad.academy?lang=en" className="footer__link"
                                       target='_blank' rel="noreferrer">
                                        <img src={tiktok} alt="tiktok" className='footer__tiktok'/>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container contact__mob-container">
                <div className="row">
                    <div className="contact__mob-col">
                        <div className="contact__mob-item contact__mob-item-1">
                            <a href="mailto:sky.nomad.academy@gmail.com" className="footer__email">
                                sky.nomad.academy@gmail.com
                            </a>
                        </div>
                    </div>
                    <div className="contact__mob-col">
                        <div className="contact__mob-item contact__mob-item-2">
                            <a href="tel:+996 505 60 20 10" className='footer__tel'>
                                +996 505 60 20 10
                            </a>
                        </div>
                    </div>
                    <div className="contact__mob-col contact__mob-col-3">
                        <div className="contact__mob-item">
                            <ul className="footer__icons">
                                <li className="footer__icon">
                                    <a href="https://www.instagram.com/sky.nomad.academy/?hl=ru"
                                       className="footer__link" target='_blank' rel="noreferrer">
                                        <img src={instagram} alt="instagram" className='footer__instagram'/>
                                    </a>
                                </li>
                                <li className="footer__icon">
                                    <a href="https://www.facebook.com/sky.nomad.academy" className="footer__link"
                                       target='_blank'
                                       rel="noreferrer">
                                        <img src={facebook} alt="facebook" className='footer__facebook'/>
                                    </a>
                                </li>
                                <li className="footer__icon">
                                    <a href="https://teleg.one/Skynomadacademy" className="footer__link" target='_blank'
                                       rel="noreferrer">
                                        <img src={telegram} alt="telegram" className='footer__telegram'/>
                                    </a>
                                </li>
                                <li className="footer__icon">
                                    <a href="https://wa.me/996550602010" className="footer__link" target='_blank'
                                       rel="noreferrer">
                                        <img src={whatsapp} alt="whatsapp" className='footer__whatsapp'/>
                                    </a>
                                </li>
                                <li className="footer__icon">
                                    <a href="https://www.tiktok.com/@sky.nomad.academy?lang=en" className="footer__link"
                                       target='_blank' rel="noreferrer">
                                        <img src={tiktok} alt="tiktok" className='footer__tiktok'/>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>


            <img src={joystick1} alt="" className="contact__joystick-1"/>
            <img src={joystick2} alt="" className="contact__joystick-2"/>
            <img src={icon1} alt="" className="contact__icon-1"/>
            <img src={icon2} alt="" className="contact__icon-2"/>
            <img src={icon3} alt="" className="contact__icon-3"/>
            <img src={icon4} alt="" className="contact__icon-4"/>
            <img src={icon1} alt="" className="contact__icon-5"/>
            <img src={ellipse1} alt="" className="contact__ellipse-1"/>
            <img src={ellipse2} alt="" className="contact__ellipse-2"/>
            <img src={redCircle} alt="" className="contact__red-circle"/>
        </section>
    );
};

export default Contact;