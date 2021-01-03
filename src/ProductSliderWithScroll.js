import React from 'react';
import './ProductSliderWithScroll.css';

function ProductSliderWithScroll() {
    return (
        <div className='ProductSliderWithScroll'>
            <ul id='autoWidth' className='cs-hidden'>
                {/* Item 1 */}
                <li className='item-a'>
                    <div className='ProductSliderWithScroll__box'>
                        <div className='ProductSliderWithScroll__slideImg'>
                            <a href='http://www.google.es'>
                                <img
                                    src='https://m.media-amazon.com/images/I/51NV8Uil7wL._AC_SY200_.jpg'
                                    alt='Product 1'
                                />
                            </a>
                        </div>
                    </div>
                </li>
                {/* Item 2 */}
                <li className='item-b'>
                    <div className='ProductSliderWithScroll__box'>
                        <div className='ProductSliderWithScroll__slideImg'>
                            <a href='http://www.google.es'>
                                <img
                                    src='https://m.media-amazon.com/images/I/41QztBTooxL._AC_SY200_.jpg'
                                    alt='Product 2'
                                />
                            </a>
                        </div>
                    </div>
                </li>
                {/* Item 3 */}
                <li className='item-c'>
                    <div className='ProductSliderWithScroll__box'>
                        <div className='ProductSliderWithScroll__slideImg'>
                            <a href='http://www.google.es'>
                                <img
                                    src='https://m.media-amazon.com/images/I/41BP6N0cDVL._AC_SY200_.jpg'
                                    alt='Product 3'
                                />
                            </a>
                        </div>
                    </div>
                </li>
                {/* Item 4 */}
                <li className='item-d'>
                    <div className='ProductSliderWithScroll__box'>
                        <div className='ProductSliderWithScroll__slideImg'>
                            <a href='http://www.google.es'>
                                <img
                                    src='https://m.media-amazon.com/images/I/51HzG7dwAHL._AC_SY200_.jpg'
                                    alt='Product 4'
                                />
                            </a>
                        </div>
                    </div>
                </li>
                {/* Item 5 */}
                <li className='item-e'>
                    <div className='ProductSliderWithScroll__box'>
                        <div className='ProductSliderWithScroll__slideImg'>
                            <a href='http://www.google.es'>
                                <img
                                    src='https://m.media-amazon.com/images/I/319KAiGobEL._AC_SY200_.jpg'
                                    alt='Product 5'
                                />
                            </a>
                        </div>
                    </div>
                </li>
                {/* Item 6 */}
                <li className='item-f'>
                    <div className='ProductSliderWithScroll__box'>
                        <div className='ProductSliderWithScroll__slideImg'>
                            <a href='http://www.google.es'>
                                <img
                                    src='https://m.media-amazon.com/images/I/41Ww3zikowL._AC_SY200_.jpg'
                                    alt='Product 6'
                                />
                            </a>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    );
}

export default ProductSliderWithScroll;
