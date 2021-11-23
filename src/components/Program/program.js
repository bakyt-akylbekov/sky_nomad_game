import React, {useState} from 'react';
import Slider from "react-slick";
import points from '../.././assets/images/Program/points.svg'
import student from '../.././assets/images/Program/student.png'
import net from '../.././assets/images/Program/net.png'
import ellipse1 from '../.././assets/images/Program/ellipse1.png'
import ellipse2 from '../.././assets/images/Program/ellipse2.png'
import icon1 from '../.././assets/images/Program/icon1.png'
import icon2 from '../.././assets/images/Program/icon2.png'
import icon3 from '../.././assets/images/Program/icon3.png'
import icon4 from '../.././assets/images/Program/icon4.png'
import icon5 from '../.././assets/images/Program/icon5.png'
import leftLine from '../.././assets/images/Program/left-line.png'
//import rightLine from '../.././assets/images/Program/right-line.png'
import arrowIcon from "../../assets/images/Reason/Icon ionic-ios-arrow-down.png";

import './style.css'

const Program = () => {

    const [block1, setBlock1] = useState(false);
    const [block2, setBlock2] = useState(false);
    const [block3, setBlock3] = useState(false);

    const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        variableWidth: true,
        arrows: false,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,

                },
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                },
            },
        ]
        // centerMode: true,
    };

    return (
        <section className='program' id='program'>
            <div className="container program__1">
                <div className="program__block">
                    <div className="program__content">
                        <h2 className="program__title">
                            Как проходит учёба
                        </h2>
                        <div className="program__items">
                            <img src={points} className='program__items-img' alt="points"/>
                            <div className="program__right-item program__right-item-1">
                                <h4 className="program__subtitle">
                                    Персональный проект
                                </h4>
                                <p className="program__text">
                                    Вы сможете реализовать свою идею или мы <br/>поможем вам с выбором. Моделеры и
                                    художники <br/>
                                    выберут подходящий визуал. Проект в дальнейшем <br/> пойдет к вам в портфлио
                                </p>
                            </div>
                            <div className="program__left-item">
                                <h4 className="program__subtitle program__subtitle-2">
                                    Работа в команде
                                </h4>
                                <p className="program__text program__text-2">
                                    Работа с ментором проходит 5 раз в неделю,<br/> длительностью 3 - 4 часа. За это
                                    время вы <br/> разберете задачи и сможете задать интересующие <br/> вопросы.
                                </p>
                            </div>
                            <div className="program__right-item program__right-item-2">
                                <h4 className="program__subtitle">
                                    Поддержка
                                </h4>
                                <p className="program__text">
                                    Мы с издателем протестируем вашу идею, <br/>разберем и исправим ошибки. Вас
                                    поддерживают <br/> кураторы - специалисты, которые всегда на связи,<br/> следят за
                                    посещением и помогают с решением <br/> организационных вопросов.
                                </p>
                            </div>

                        </div>

                    </div>
                </div>
            </div>

            <div className="program__container">
                <div className="program__title">
                    Как проходит <br/> учёба
                </div>
                <div className="program__row">
                    <Slider {...settings} style={{width: '100%'}}>
                        <div className="col-4">
                            <div className="program__item program__item-1">
                                <h4 className="program__subtitle program__subtitle-1">
                                    Персональный <br/> проект
                                </h4>
                                <p className={block1 ? 'program__text-open' : 'program__text'}>
                                    Вы сможете реализовать свою идею или мыпоможем вам с выбором. Моделеры и художники
                                    выберут подходящий визуал. Проект в дальнейшем пойдет к вам в портфлио
                                    <div className="program__toggle"></div>
                                </p>
                                <span onClick={() => setBlock1(!block1)}
                                      className="program__toggle-btn"
                                >
                                <img src={arrowIcon}
                                     className={block1 ? 'program__arrow-up' : ''}
                                     alt="arrowIcon"
                                />
                            </span>

                            </div>
                        </div>
                        <div className="col-4">
                            <div className="program__item program__item-2">
                                <h4 className="program__subtitle program__subtitle-2">
                                    Работа в <br/> команде
                                </h4>
                                <p className={block2 ? 'program__text-open' : 'program__text'}>
                                    Работа с ментором проходит 5 раз в неделю, длительностью 3 - 4 часа. За это время вы
                                    разберете задачи и сможете задать интересующие вопросы.
                                    <div className="program__toggle"></div>
                                </p>
                                <span onClick={() => setBlock2(!block2)}
                                      className="program__toggle-btn"
                                >
                                <img src={arrowIcon}
                                     className={block2 ? 'program__arrow-up' : ''}
                                     alt="arrowIcon"
                                />
                            </span>

                            </div>
                        </div>
                        <div className="col-4">
                            <div className="program__item program__item-3">
                                <h4 className="program__subtitle program__subtitle-3">
                                    Поддержка
                                </h4>
                                <p className={block3 ? 'program__text-open' : 'program__text'}>
                                    Мы с издателем протестируем вашу идею, разберем и исправим ошибки. Вас поддерживают
                                    кураторы - специалисты, которые всегда на связи, следят за посещением и помогают с
                                    решением организационных вопросов.
                                    <div className="program__toggle"></div>
                                </p>
                                <span onClick={() => setBlock3(!block3)}
                                      className="program__toggle-btn"
                                >
                                <img
                                    src={arrowIcon}
                                    className={block3 ? 'program__arrow-up' : ''}
                                    alt="arrowIcon"
                                />
                            </span>

                            </div>
                        </div>
                    </Slider>
                </div>
            </div>


            <img src={student} alt="" className="program__student"/>
            <img src={net} alt="" className="program__net"/>
            <img src={ellipse1} alt="" className="program__ellipse-1"/>
            <img src={ellipse2} alt="" className="program__ellipse-2"/>
            <img src={icon1} alt="" className="program__icon-1"/>
            <img src={icon2} alt="" className="program__icon-2"/>
            <img src={icon3} alt="" className="program__icon-3"/>
            <img src={icon4} alt="" className="program__icon-4"/>
            <img src={icon5} alt="" className="program__icon-5"/>
            <img src={leftLine} alt="" className="program__left-line"/>
            {/*<img src={rightLine} alt="" className="program__right-line"/>*/}

        </section>
    );
};

export default Program;