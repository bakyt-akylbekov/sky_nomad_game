import React, {useEffect, useState} from 'react';
import upArrow from "../../assets/images/up-arrow.svg";

import './style.css'

const UpArrow = ({showBelow}) => {

    const [show, setShow] = useState(showBelow ? false : true);

    const handleScroll = () => {
        if (window.pageYOffset > showBelow) {
            if (!show) setShow(true)
        } else {
            if (show) setShow(false)
        }
    };

    const handleClick = () => {
        window[`scrollTo`]({top: 0, behavior: `smooth`})
    };

    useEffect(() => {
        if (showBelow) {
            window.addEventListener('scroll', handleScroll);
            return () => window.removeEventListener('scroll', handleScroll)
        }
    });

    return (
        <div>
            {
                show &&
                <div className="up-arrow">
                    <button onClick={handleClick} className='up-arrow__btn'>
                        <img src={upArrow} className="up-arrow__img" alt="up-arrow"/>
                    </button>
                </div>
            }
        </div>
    );
};

export default UpArrow;