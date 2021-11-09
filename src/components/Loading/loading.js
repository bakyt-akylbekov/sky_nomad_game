import React from 'react';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";

import './style.css'

const Loading = () => {
    return (
        <div className='loading__block'>
            <Loader
                type="Circles"
                color="#ffc400"
                height={100}
                width={100}
                timeout={3000} //3 secs
            />
        </div>
    );
};

export default Loading;