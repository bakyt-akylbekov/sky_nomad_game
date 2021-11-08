import React from 'react';

import './style.css'
import bottomLine from "../../assets/images/Contact/bottom-line.png";
import btnTop from "../../assets/images/Contact/btn-top.png";
import btnBottom from "../../assets/images/Contact/btn-bottom.png";

const Modal = ({active, setActive}) => {
    return (
        <div className={active ? "modal active" : "modal"} onClick={() => setActive(false)}>
            <div className={active ? "modal__content active" : "modal__content"} onClick={e => e.stopPropagation()}>
                <form className='modal__form'>
                    <h4 className="modal__title">Оставьте заявку</h4>
                    <div className="modal__block">
                        <input type="text" className='modal__input' placeholder='Ваше имя'/>
                    </div>
                    <div className="modal__block">
                        <input type="email" className='modal__input' placeholder='example@gmail.com'/>
                    </div>
                    <div className="modal__block">
                        <input type="tel" className='modal__input' placeholder='+996 000 000 000'/>
                    </div>
                    <div className="modal__block">
                        <input type="text" className='modal__input' placeholder='Комментарий'/>
                    </div>
                    <button className="modal__btn">Записаться</button>
                </form>
            </div>
        </div>
    );
};

export default Modal;