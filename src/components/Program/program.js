import React from 'react';
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
import rightLine from '../.././assets/images/Program/right-line.png'

import './style.css'

const Program = () => {
    return (
        <section className='program' id='program'>
            <div className="container">
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
                                    Вы сможете реализовать свою идею или мы <br/>поможем вам с выбором. Моделеры и художники <br/>
                                    выберут подходящий визуал. Проект в дальнейшем <br/> пойдет к вам в портфлио
                                </p>
                            </div>
                            <div className="program__left-item">
                                <h4 className="program__subtitle program__subtitle-2">
                                    Работа в команде
                                </h4>
                                <p className="program__text program__text-2">
                                    Работа с ментором проходит 5 ра зв неделю,<br/> длительностью 3 - 4 часа. За это время вы <br/> разберете задачи и сможете задать интересующие <br/> вопросы.
                                </p>
                            </div>
                            <div className="program__right-item program__right-item-2">
                                <h4 className="program__subtitle">
                                    Поддержка
                                </h4>
                                <p className="program__text">
                                    Мы с издателем протестируем вашу идею, <br/>разберем и исправим ошибки. Вас поддерживают <br/> кураторы - специалисты, которые всегда на связи,<br/> следят за посещением и помогают с решением <br/> организационных вопросов.
                                </p>
                            </div>

                        </div>

                    </div>
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
            <img src={rightLine} alt="" className="program__right-line"/>

        </section>
    );
};

export default Program;