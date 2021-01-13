import React from 'react';
import './CardUiPair.css';

function CardUiPair({ image }) {
    return (
        <div className='cardUiPair'>
            <div className='cardUiPair__sectionOne'>
                <div className='cardUiPair__header'>
                    <h2>Sign in for the best experience</h2>
                </div>
                <div className='cardUiPair__body'>
                    <a href='https://www.google.es'>
                        <button>Sign in securely</button>
                    </a>
                </div>
            </div>

            <div className='cardUiPair__sectionTwo'>
                <div className='cardUiPair__container'>
                    <a href='https://www.google.es'>
                        <img
                            src={image}
                            alt='We ship 45 million products around the world'
                        />
                    </a>
                </div>
            </div>
        </div>
    );
}

export default CardUiPair;
