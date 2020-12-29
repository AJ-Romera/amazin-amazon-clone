import React from 'react';
import './CardUiPair.css';

function CardUiPair() {
    return (
        <div className='cardUiPair'>
            <div className='cardUiPair__sectionOne'>
                <div className='cardUiPair__containerOne'>
                    <div className='cardUiPair__header'>
                        <h2>Sign in for the best experience</h2>
                    </div>
                    <div className='cardUiPair__body'>
                        <a href='https://www.google.es'>
                            <button>Sign in securely</button>
                        </a>
                    </div>
                </div>
            </div>

            <div className='cardUiPair__sectionTwo'>
                <div className='cardUiPair__containerTwo'>
                    <a href='https://www.google.es'>
                        <img
                            src='https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/October/Fuji_D2_45M_en_US_1x._CB418309979_.jpg'
                            alt='We ship 45 million products around the world'
                        />
                    </a>
                </div>
            </div>
        </div>
    );
}

export default CardUiPair;
