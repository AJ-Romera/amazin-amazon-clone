import React from 'react';
import './CarouselImg.css';

function CarouselImg({ src }) {
    return <img src={src} alt='slide-img' className='carrouselImg'></img>;
}

export default CarouselImg;
