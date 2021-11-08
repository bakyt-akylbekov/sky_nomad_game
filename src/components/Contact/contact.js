import React, {useEffect, useState} from 'react';
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
import leftCircle from '../../assets/images/Contact/left-circle.png'
import rightCircle from '../../assets/images/Contact/right-circle.png'

import './style.css'

const Contact = () => {

    const [email, setEmail] = useState('');
    const [emailDirty, setEmailDirty] = useState('');
    const [emailError, setEmailError] = useState('Заполните поле почты !!!');
    const [formValid, setFormValid] = useState(false);

    useEffect(()=> {
        if (emailError){
            setFormValid(false)
        } else{
            setFormValid(true)
        }
    }, [emailError]);

    const emailHandler = (event) => {
        setEmail(event.target.value);
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (!re.test(String(event.target.value).toLowerCase())){
            setEmailError('Введите правильно почту !!!')
        } else {
            setEmailError('');
        }
    };

    const blurHandler = (event) => {
        if (event.target.name === 'email'){
            setEmailDirty(true)
        }
    };

    return (
        <section className='contact' id='contact'>
            <h2 className="contact__title">
                Успейте записаться,
                пока есть <br/> места на курсе
            </h2>
            <div className="contact__block">
                <form className="contact__form">
                    <h4 className="contact__subtitle">Оставьте заявку</h4>
                    <div className="contact__item">
                        <input type="text" className="contact__input" placeholder='Ваше имя'/>
                        <img src={bottomLine} alt="bottomLine"  className='contact__bottom-line'/>
                    </div>
                    <div className="contact__item">
                        {
                            (emailDirty && emailError) && <div className='contact__error'>{emailError}</div>
                        }
                        <input type="email"
                               className="contact__input"
                               placeholder='example@mail.com'
                               onChange={e => emailHandler(e)}
                               onBlur={e => blurHandler(e)}
                               value={email}
                               name='email'
                        />
                        <img src={bottomLine} alt="bottomLine"  className='contact__bottom-line'/>
                    </div>
                    <div className="contact__item">
                        <input type="tel" className="contact__input" placeholder='+996 000 000 000'/>
                        <img src={bottomLine} alt="bottomLine"  className='contact__bottom-line'/>
                    </div>
                    <div className="contact__item">
                        <input type="text" className="contact__input" placeholder='Комментарий'/>
                        <img src={bottomLine} alt="bottomLine"  className='contact__bottom-line'/>
                    </div>
                    <button type='submit'
                            disabled={!formValid}
                            className="contact__btn">
                        Записаться
                        <img src={btnTop} alt="btn-top" className='contact__btn-top'/>
                        <img src={btnBottom} alt="btn-bottom" className='contact__btn-bottom'/>
                    </button>
                </form>
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
            <img src={leftCircle} alt="" className="contact__left-circle"/>
            <img src={rightCircle} alt="" className="contact__right-circle"/>
        </section>
    );
};

export default Contact;