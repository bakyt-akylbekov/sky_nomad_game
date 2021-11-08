import React from 'react';

import box from '../.././assets/images/Reason/box.png'
import ellipse1 from '../.././assets/images/Reason/ellipse1.png'
import ellipse2 from '../.././assets/images/Reason/ellipse2.png'
import icon1 from '../.././assets/images/Reason/icon1.png'
import icon2 from '../.././assets/images/Reason/icon2.png'
import icon3 from '../.././assets/images/Reason/icon3.png'
import horizontalLine from '../.././assets/images/Reason/horizont-line.png'

import './style.css'

const Reason = () => {
    return (
        <section className='reason'>
            <div className="container">
                <h2 className="reason__title">
                    Три причины пройти курс по <br/> разработке игр на Unity
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
                            Unity - это ведущая платформа разработки <br/> интерактивного контента с 2D- и 3D-графикой, 50% <br/>
                            всех игр созданы на ней. Больше половины игр из <br/> 1000 самых кассовых тоже разработали на
                            Unity, а <br/> значит ученики начнут осваивать востребованную <br/> и высокооплачиваемую технологию.
                        </p>
                    </div>
                    <div className="reason__left-block">
                        <div className="reason__subtitle-item">
                            <div className="reason__circle reason__lines">
                                <span>2</span>
                            </div>
                            <h4 className="reason__subtitle">
                                <span>Постоянное развите</span>
                            </h4>
                        </div>
                    </div>
                    <div className="reason__right-block">
                        <p className="reason__text">
                            Обучение всесторонне развивает ребенка: помогает <br/>правильно ставить цели, концентрироваться и работать <br/> на результат. А еще тренерует креативность, логику, <br/> умение общаться с другими ребятами и взрослыми,<br/> целеустремленность.
                        </p>
                    </div>
                    <div className="reason__left-block">
                        <div className="reason__subtitle-item">
                            <div className="reason__circle">
                                <span>3</span>
                            </div>
                            <h4 className="reason__subtitle">
                                <span>Веселый досуг</span>
                            </h4>
                        </div>
                    </div>
                    <div className="reason__right-block">
                        <p className="reason__text reason__text-3">
                            Ученики знакомятся, в команде решают задания и вместе <br/> обсуждают варианты. А сам процесс создания игры - <br/> очень увлекательный и интересный.
                        </p>
                    </div>
                </div>
            </div>

            <img src={box} alt="" className="reason__box"/>
            <img src={ellipse1} alt="" className="reason__ellipse-1"/>
            <img src={ellipse2} alt="" className="reason__ellipse-2"/>
            <img src={icon1} alt="" className="reason__icon-1"/>
            <img src={icon2} alt="" className="reason__icon-2"/>
            <img src={icon3} alt="" className="reason__icon-3"/>
            <img src={horizontalLine} alt="" className="reason__horizontal-line"/>

        </section>
    );
};

export default Reason;