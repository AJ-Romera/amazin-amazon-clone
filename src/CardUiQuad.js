import React from 'react';
import './CardUiQuad.css';

function CardUiQuad() {
    return (
        <div className='cardUiQuad'>
            <div className='cardUiQuad__header'>
                <h2>Shop by Category</h2>
            </div>

            <div className='cardUiQuad__body'>
                <div className='cardUiQuad__row1'>
                    <div className='cardUiQuad__portion cardUiQuad__portionMarginRight'>
                        <div className='cardUiQuad__imageContainer'>
                            <img
                                className='cardUiQuad__image'
                                src='https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2019/February/Dashboard/computer120x._SY85_CB468850970_.jpg'
                                alt='Computers & Accessories'
                            />
                        </div>
                        <div className='cardUiQuad__textContainer'>
                            <span className='cardUiQuad__text'>
                                Computers & Accessories
                            </span>
                        </div>
                        {/* <a href='http://www.google.es'>
                            Temporal
                        </a> */}
                    </div>

                    <div className='cardUiQuad__portion'>
                        <div className='cardUiQuad__imageContainer'>
                            <img
                                className='cardUiQuad__image'
                                src='https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2019/August/DashboardCard/PS4_120X._SY85_CB438749318_.jpg'
                                alt='Video Games'
                            />
                        </div>
                        <div className='cardUiQuad__textContainer'>
                            <span className='cardUiQuad__text'>
                                Video Games
                            </span>
                        </div>
                        {/* <a href='http://www.todoeldivpadreesunlink.es'>
                            Temporal
                        </a> */}
                    </div>
                </div>

                <div className='cardUiQuad__row2'>
                    <div className='cardUiQuad__portion cardUiQuad__portionMarginRight'>
                        <div className='cardUiQuad__imageContainer'>
                            <img
                                className='cardUiQuad__image'
                                src='https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2019/February/Dashboard/Baby120X._SY85_CB468850882_.jpg'
                                alt='Baby'
                            />
                        </div>
                        <div className='cardUiQuad__textContainer'>
                            <span className='cardUiQuad__text'>Baby</span>
                        </div>
                        {/* <a href='http://www.todoeldivpadreesunlink.es'>
                            Temporal
                        </a> */}
                    </div>

                    <div className='cardUiQuad__portion'>
                        <div className='cardUiQuad__imageContainer'>
                            <img
                                className='cardUiQuad__image'
                                src='https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2019/February/Dashboard/Toys120X._SY85_CB468851693_.jpg'
                                alt='Toys & Games'
                            />
                        </div>
                        <div className='cardUiQuad__textContainer'>
                            <span className='cardUiQuad__text'>
                                Toys & Games
                            </span>
                        </div>
                        {/* <a href='http://www.todoeldivpadreesunlink.es'>
                            Temporal
                        </a> */}
                    </div>
                </div>
            </div>

            <div className='cardUiQuad__footer'>
                <a href='https://www.google.es'>Shop now</a>
            </div>
        </div>
    );
}

export default CardUiQuad;
