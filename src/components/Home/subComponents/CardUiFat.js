import React from 'react';
import './CardUiFat.css';

function CardUiFat({ title, image, footerLink, footerText }) {
    return (
        <div className='cardUiFat'>
            <div className='cardUiFat__header'>
                <h2>{title}</h2>
            </div>

            <div className='cardUiFat__body'>
                <a className='cardUiFat__link' href='http://www.google.es'>
                    <div className='cardUiFat__imageContainer'>
                        <img
                            className='cardUiFat__image'
                            src={image}
                            alt='Amazin Basics Products'
                        />
                    </div>
                </a>
            </div>

            <div className='cardUiFat__footer'>
                <a href={footerLink}>{footerText}</a>
            </div>
        </div>
    );
}

export default CardUiFat;
