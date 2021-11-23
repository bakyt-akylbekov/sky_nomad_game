import React, {useState} from 'react';
import Slider from "react-slick";

import box from '../.././assets/images/Reason/box.png'
import ellipse1 from '../.././assets/images/Reason/ellipse1.png'
import ellipse2 from '../.././assets/images/Reason/ellipse2.png'
import icon1 from '../.././assets/images/Reason/icon1.png'
import icon2 from '../.././assets/images/Reason/icon2.png'
import icon3 from '../.././assets/images/Reason/icon3.png'
//import horizontalLine from '../.././assets/images/Reason/horizont-line.png'
import arrowIcon from '../.././assets/images/Reason/Icon ionic-ios-arrow-down.png'

import './style.css'

const Reason = () => {

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

    };

    return (
        <section className='reason'>
            <div className="container reason__1">
                <h2 className="reason__title">
                    Три причины пройти курс по <br/> разработке <span>игр</span> на Unity
                </h2>
                <div className="reason__row">
                    <div className="reason__left-block">
                        <div className="reason__subtitle-item">
                            <div className="reason__circle">
                                <span>1</span>
                            </div>
                            <h4 className="reason__subtitle">
                                <span>Перспективы</span>
                            </h4>
                        </div>
                    </div>
                    <div className="reason__right-block">
                        <p className="reason__text">
                            Unity - это ведущая платформа разработки <br/> интерактивного контента с 2D- и 3D-графикой,
                            50% <br/>
                            всех игр созданы на ней. Больше половины игр из <br/> 1000 самых кассовых тоже разработали
                            на
                            Unity, а <br/> значит ученики начнут осваивать востребованную <br/> и высокооплачиваемую
                            технологию.
                        </p>
                    </div>
                    <div className="reason__left-block">
                        <div className="reason__subtitle-item">
                            <div className="reason__circle reason__lines">
                                <span>2</span>
                            </div>
                            <h4 className="reason__subtitle">
                                <span>Постоянное развитие</span>
                            </h4>
                        </div>
                    </div>
                    <div className="reason__right-block">
                        <p className="reason__text">
                            Обучение всесторонне развивает ребенка: помогает <br/>правильно ставить цели,
                            концентрироваться и работать <br/> на результат. А еще тренерует креативность,
                            логику, <br/> умение общаться с другими ребятами и взрослыми,<br/> целеустремленность.
                        </p>
                    </div>
                    <div className="reason__left-block">
                        <div className="reason__subtitle-item">
                            <div className="reason__circle">
                                <span>3</span>
                            </div>
                            <h4 className="reason__subtitle">
                                <span>Весёлый досуг</span>
                            </h4>
                        </div>
                    </div>
                    <div className="reason__right-block">
                        <p className="reason__text reason__text-3">
                            Ученики знакомятся, в команде решают задания и вместе <br/> обсуждают варианты. А сам
                            процесс создания игры - <br/> очень увлекательный и интересный.
                        </p>
                    </div>
                </div>
            </div>


            <div className="reason__container">
                <div className="reason__title">
                    Три причины пройти курс по разработке игр на Unity
                </div>
                <div className="reason__row">
                    <Slider {...settings} style={{width: '100%'}}>
                        <div className="col-4" style={{width: 255}}>
                            <div className="reason__item">
                                <h4 className="reason__subtitle">
                                    Перспективы
                                </h4>
                                <p className={block1 ? 'text-open' : 'reason__text'}>
                                    Unity - это ведущая платформа разработки интерактивного контента с 2D- и
                                    3D-графикой,
                                    50%
                                    всех игр созданы на ней. Больше половины игр из 1000 самых кассовых тоже разработали
                                    на
                                    Unity, а значит ученики начнут осваивать востребованную и высокооплачиваемую
                                    технологию.
                                    <div className="reason__toggle"></div>
                                </p>
                                <span onClick={() => setBlock1(!block1)}
                                      className="reason__toggle-btn"
                                >
                                <img src={arrowIcon}
                                     className={block1 ? 'reason__arrow-up' : ''}
                                     alt="arrowIcon"
                                />
                            </span>

                            </div>
                        </div>
                        <div className="col-4">
                            <div className="reason__item reason__item-2">
                                <h4 className="reason__subtitle">
                                    Постоянное развитие
                                </h4>
                                <p className={block2 ? 'text-open' : 'reason__text'}>
                                    Обучение всесторонне развивает ребенка: помогает правильно ставить цели,
                                    концентрироваться и работать на результат. А еще тренерует креативность,
                                    логику, умение общаться с другими ребятами и взрослыми, целеустремленность.
                                    <div className="reason__toggle"></div>
                                </p>
                                <span onClick={() => setBlock2(!block2)}
                                      className="reason__toggle-btn"
                                >
                                <img src={arrowIcon}
                                     className={block2 ? 'reason__arrow-up' : ''}
                                     alt="arrowIcon"
                                />
                            </span>

                            </div>
                        </div>
                        <div className="col-4">
                            <div className="reason__item reason__item-3">
                                <h4 className="reason__subtitle">
                                    Весёлый досуг
                                </h4>
                                <p className={block3 ? 'text-open' : 'reason__text'}>
                                    Ученики знакомятся, в команде решают задания и вместе обсуждают варианты. А сам
                                    процесс создания игры - очень увлекательный и интересный.
                                    <div className="reason__toggle"></div>
                                </p>
                                <span onClick={() => setBlock3(!block3)}
                                      className="reason__toggle-btn"
                                >
                                <img
                                    src={arrowIcon}
                                    className={block3 ? 'reason__arrow-up' : ''}
                                    alt="arrowIcon"
                                />
                            </span>

                            </div>
                        </div>
                    </Slider>
                </div>

            </div>


            <img src={box} alt="" className="reason__box"/>
            <img src={ellipse1} alt="" className="reason__ellipse-1"/>
            <img src={ellipse2} alt="" className="reason__ellipse-2"/>
            <img src={icon1} alt="" className="reason__icon-1"/>
            <img src={icon2} alt="" className="reason__icon-2"/>
            <img src={icon3} alt="" className="reason__icon-3"/>
            {/*<img src={horizontalLine} alt="" className="reason__horizontal-line"/>*/}

        </section>
    );
};

export default Reason;