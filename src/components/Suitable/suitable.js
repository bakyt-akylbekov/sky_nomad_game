import React from 'react';

import emoji from '../.././assets/images/Suitable/Emoji2.png'
import checkMark from '../.././assets/images/Suitable/checkMark.png'
import leftCircle from '../.././assets/images/Suitable/left-circle.png'
import rightTopCircle from '../.././assets/images/Suitable/right-top-circle.png'
import rightBottomCircle from '../.././assets/images/Suitable/right-bottom-circle.png'
import icon1 from '../.././assets/images/Suitable/icon1.png'
import icon2 from '../.././assets/images/Suitable/icon2.png'
import icon3 from '../.././assets/images/Suitable/icon3.png'
import icon4 from '../.././assets/images/Suitable/icon4.png'
import icon5 from '../.././assets/images/Suitable/icon5.png'
import icon6 from '../.././assets/images/Suitable/icon6.png'
import ellipse from '../.././assets/images/Suitable/Эллипс 23.png'

import './style.css'

const Suitable = () => {
    return (
        <section className='suitable'>
            <div className='container'>
                <div className='row'>
                    <div className='col-6'>
                        <div className='suitable__item'>
                            <div className="suitable__box">
                                <img src={emoji} alt="emoji" className='suitable__emoji'/>
                            </div>
                        </div>
                    </div>
                    <div className='col-6'>
                        <div className='suitable__item'>
                           <div className="suitable__box">
                               <h2 className="suitable__title">
                                   Кому подойдёт курс
                               </h2>
                               <div className='suitable__block'>
                                   <p className="suitable__text">
                                       Ребятам, которые хотят научиться <br/>программировать
                                   </p>
                                   <img src={checkMark} alt="" className="suitable__icon"/>
                               </div>
                               <div className='suitable__block'>
                                   <p className="suitable__text">
                                       Тем, кто любит играть в компьютерные игры и готов создать свою
                                   </p>
                                   <img src={checkMark} alt="" className="suitable__icon"/>
                               </div>
                               <div className='suitable__block'>
                                   <p className="suitable__text">
                                       Всем, кто хочет творить и создавать новое
                                   </p>
                                   <img src={checkMark} alt="" className="suitable__icon"/>
                               </div>
                           </div>
                        </div>
                    </div>
                </div>
            </div>
            <img src={leftCircle} alt="" className="suitable__left-circle"/>
            <img src={rightTopCircle} alt="" className="suitable__right-top-circle"/>
            <img src={rightBottomCircle} alt="" className="suitable__right-bottom-circle"/>
            <img src={icon1} alt="" className="suitable__icon-1"/>
            <img src={icon2} alt="" className="suitable__icon-2"/>
            <img src={icon3} alt="" className="suitable__icon-3"/>
            <img src={icon4} alt="" className="suitable__icon-4"/>
            <img src={icon5} alt="" className="suitable__icon-5"/>
            <img src={icon6} alt="" className="suitable__icon-6"/>
            <img src={icon6} alt="" className="suitable__icon-6"/>
            <img src={ellipse} alt="" className="suitable__ellipse"/>
        </section>
    );
};

export default Suitable;