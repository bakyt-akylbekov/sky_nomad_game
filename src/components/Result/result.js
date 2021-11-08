import React from 'react';
import hat from '../.././assets/images/Result/hat.png'
import ellipse1 from '../.././assets/images/Result/ellipse1.png'
import ellipse2 from '../.././assets/images/Result/ellipse2.png'
import ellipse3 from '../.././assets/images/Result/ellipse3.png'
import icon1 from '../.././assets/images/Result/icon1.png'
import icon2 from '../.././assets/images/Result/icon2.png'
import icon3 from '../.././assets/images/Result/icon3.png'
import icon4 from '../.././assets/images/Result/icon4.png'
import leftLine from '../.././assets/images/Result/left-line.png'
import rightLine from '../.././assets/images/Result/right-line.png'
import centerLine from '../.././assets/images/Result/center-line.png'
import joystick from '../.././assets/images/Result/Joystick.png'
import trophy from '../.././assets/images/Result/Trophy.png'

import './style.css'

const Result = () => {
    return (
        <section className='result'>
           <div className="container">
               <h2 className="result__title">
                   Что получит ученик
               </h2>
               <div className='result__logo'>
                   <img src={hat} alt="hat"/>
               </div>
               <div className='result__content'>
                   <div className='result__row'>
                       <div className='result__col'>
                           <div className='result__item'>
                               <h3 className="result__subtitle">
                                   Программа обучения
                               </h3>
                           </div>
                       </div>
                       <div className='result__col'>
                           <div className='result__item'>
                               <p className="result__text">
                                   На 3-6 месяцев, познакомить с основами программирования, а также создание 2D и 3D - игр при помощи среды Unity и языка C#.
                               </p>
                           </div>
                       </div>
                       <div className='result__col'>
                           <div className='result__item'>
                               <h3 className="result__subtitle">
                                   Помощь к подготовке
                               </h3>
                           </div>
                       </div>
                       <div className='result__col'>
                           <div className='result__item'>
                               <p className="result__text">
                                   Наша команда подготовит Вас к собеседованию на трудоустроиство.
                               </p>
                           </div>
                       </div>
                       <div className='result__col'>
                           <div className='result__item'>
                               <h3 className="result__subtitle">
                                   Реальные проекты
                               </h3>
                           </div>
                       </div>
                       <div className='result__col'>
                           <div className='result__item'>
                               <p className="result__text">
                                   Готовые 2-4 проекта будут у Вас в портфолио.
                               </p>
                           </div>
                       </div>
                   </div>
               </div>
           </div>

            <img src={centerLine} alt="" className="result__center-line"/>
            <img src={leftLine} alt="" className="result__left-line"/>
            <img src={rightLine} alt="" className="result__right-line"/>
            <img src={ellipse1} alt="" className='result__ellipse-1'/>
            <img src={ellipse2} alt="" className='result__ellipse-2'/>
            <img src={ellipse3} alt="" className='result__ellipse-3'/>
            <img src={joystick} alt="" className='result__joystick'/>
            <img src={trophy} alt="" className='result__trophy'/>
            <img src={icon1} alt="" className='result__icon-1'/>
            <img src={icon2} alt="" className='result__icon-2'/>
            <img src={icon3} alt="" className='result__icon-3'/>
            <img src={icon4} alt="" className='result__icon-4'/>

        </section>
    );
};

export default Result;