import React, { useState } from 'react';
import './MainCarousel.css';
import CarouselImg from './CarouselImg';

function MainCarousel() {
    const [x, setX] = useState(0);
    let carouselArr = [
        <CarouselImg src='https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_Computers_1x._CB432469755_.jpg' />,
        <CarouselImg src='https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_Toys_en_US_1x._CB431858161_.jpg' />,
        <CarouselImg src='https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_Home_v2_en_US_1x._CB429090084_.jpg' />,
        <CarouselImg src='https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_Beauty_v2_en_US_1x._CB429089975_.jpg' />,
        <CarouselImg src='https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_45M_v2_1x._CB432458380_.jpg' />,
    ];
    const goLeft = () => {
        x === 0 ? setX(-100 * (carouselArr.length - 1)) : setX(x + 100);
    };
    const goRight = () => {
        x === -100 * (carouselArr.length - 1) ? setX(0) : setX(x - 100);
    };

    return (
        <div className='mainCarousel'>
            {carouselArr.map((item, index) => {
                return (
                    <div
                        key={index}
                        className='slide'
                        style={{ transform: `translateX(${x}%)` }}
                    >
                        {item}
                    </div>
                );
            })}
            <button id='goLeft' onClick={goLeft}>
                Left
            </button>
            <button id='goRight' onClick={goRight}>
                Right
            </button>
        </div>
    );
}

export default MainCarousel;
