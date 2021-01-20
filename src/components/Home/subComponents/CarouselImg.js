import React from 'react';
import './CarouselImg.css';

function CarouselImg({ src, link }) {
    return (
        <div>
            <a href={link}>
                <div className='carousel__link'></div>
            </a>
            <img src={src} alt='slide-img' className='carousel__img'></img>;
        </div>
    );
}

export default CarouselImg;
