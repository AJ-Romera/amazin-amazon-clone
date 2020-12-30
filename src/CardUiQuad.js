import React from 'react';
import './CardUiQuad.css';

function CardUiQuad({
    title,
    tlImg,
    trImg,
    blImg,
    brImg,
    tlSubTitle,
    trSubTitle,
    blSubTitle,
    brSubTitle,
    footerLink,
    footerText,
}) {
    return (
        <div className='cardUiQuad'>
            <div className='cardUiQuad__header'>
                <h2>{title}</h2>
            </div>

            <div className='cardUiQuad__body'>
                <div className='cardUiQuad__row1'>
                    <a className='cardUiQuad__link' href='http://www.google.es'>
                        <div className='cardUiQuad__portion cardUiQuad__portionMarginRight'>
                            <div className='cardUiQuad__imageContainer'>
                                <img
                                    className='cardUiQuad__image'
                                    src={tlImg}
                                    alt='Computers & Accessories'
                                />
                            </div>
                            <div className='cardUiQuad__textContainer'>
                                <span className='cardUiQuad__text'>
                                    {tlSubTitle}
                                </span>
                            </div>
                        </div>
                    </a>

                    <a className='cardUiQuad__link' href='http://www.google.es'>
                        <div className='cardUiQuad__portion'>
                            <div className='cardUiQuad__imageContainer'>
                                <img
                                    className='cardUiQuad__image'
                                    src={trImg}
                                    alt='Video Games'
                                />
                            </div>
                            <div className='cardUiQuad__textContainer'>
                                <span className='cardUiQuad__text'>
                                    {trSubTitle}
                                </span>
                            </div>
                        </div>
                    </a>
                </div>

                <div className='cardUiQuad__row2'>
                    <a className='cardUiQuad__link' href='http://www.google.es'>
                        <div className='cardUiQuad__portion cardUiQuad__portionMarginRight'>
                            <div className='cardUiQuad__imageContainer'>
                                <img
                                    className='cardUiQuad__image'
                                    src={blImg}
                                    alt='Baby'
                                />
                            </div>
                            <div className='cardUiQuad__textContainer'>
                                <span className='cardUiQuad__text'>
                                    {blSubTitle}
                                </span>
                            </div>
                        </div>
                    </a>

                    <a className='cardUiQuad__link' href='http://www.google.es'>
                        <div className='cardUiQuad__portion'>
                            <div className='cardUiQuad__imageContainer'>
                                <img
                                    className='cardUiQuad__image'
                                    src={brImg}
                                    alt='Toys & Games'
                                />
                            </div>
                            <div className='cardUiQuad__textContainer'>
                                <span className='cardUiQuad__text'>
                                    {brSubTitle}
                                </span>
                            </div>
                        </div>
                    </a>
                </div>
            </div>

            <div className='cardUiQuad__footer'>
                <a href={footerLink}>{footerText}</a>
            </div>
        </div>
    );
}

export default CardUiQuad;
