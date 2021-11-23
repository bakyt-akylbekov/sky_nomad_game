import React from 'react';
import map from '../.././assets/images/Address/map.png'
import chair from '../.././assets/images/Address/chair.png'
import hall from '../.././assets/images/Address/hall.png'
import facade from '../.././assets/images/Address/facade.png'
import icon1 from '../.././assets/images/Address/icon1.png'
import icon2 from '../.././assets/images/Address/icon2.png'
import icon3 from '../.././assets/images/Address/icon3.png'
//import line from '../.././assets/images/Address/line.png'

import './style.css'

const Address = () => {
    return (
        <section className='address' id='address'>
            <div className="container">
                <div className="row">
                    <div className="col-6">
                        <div className="address__item">
                            <h2 className="address__title">
                                Обучайтесь в комфорте
                            </h2>
                            <p className="address__text">
                                Бизнес центр "79" премиум класса с гармоничным сочетанием исключительного стиля,
                                современной технологией, удобным размещением и  максимально комфортным
                                условием для  эффективной работы
                            </p>
                            <img src={map} alt="map" className="address__map"/>
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="address__item address__images">
                            <img src={chair} alt="chair" className='address__chair'/>
                            <img src={hall} alt="hall" className='address__hall'/>
                            <img src={facade} alt="facade" className='address__facade'/>
                        </div>
                    </div>
                </div>
            </div>

            <img src={icon1} alt="" className="address__icon-1"/>
            <img src={icon2} alt="" className="address__icon-2"/>
            <img src={icon3} alt="" className="address__icon-3"/>
            <img src={icon1} alt="" className="address__icon-4"/>
            {/*<img src={line} alt="" className="address__line"/>*/}
        </section>
    );
};

export default Address;