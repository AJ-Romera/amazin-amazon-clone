import React from 'react';
import './FooterGrid.css';

function FooterGrid() {
    return (
        <div className='footerGrid'>
            <div className='footer__cell'>
                <a href='#' className='footer__aTitle'>
                    Amazin Music
                    <br />
                    <span className='footer__aDescText'>
                        Stream millions
                        <br />
                        of songs
                    </span>
                </a>
            </div>
        </div>
    );
}

export default FooterGrid;
