import React from 'react';
import './CardUiFat.css';

function CardUiFat() {
    return (
        <div className='cardUiFat'>
            <div className='cardUiFat__header'>
                <h2>Shop by Category</h2>
            </div>

            <div className='cardUiFat__body'>
                <a className='cardUiFat__link' href='http://www.google.es'>
                    <div className='cardUiFat__imageContainer'>
                        <img
                            className='cardUiFat__image'
                            src='https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2019/July/amazonbasics_520x520._SY304_CB442725065_.jpg'
                            alt='Amazin Basics Products'
                        />
                    </div>
                </a>
            </div>

            <div className='cardUiFat__footer'>
                <a href='https://www.google.es'>Shop now</a>
            </div>
        </div>
    );
}

export default CardUiFat;
