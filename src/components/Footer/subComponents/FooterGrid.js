import React from 'react';
import './FooterGrid.css';

function FooterGrid({ aHref, title, desc }) {
    return (
        <div className='footerGrid'>
            <div className='footer__cell'>
                <a href={aHref} className='footer__aTitle'>
                    {title}
                    <br />
                    <span className='footer__aDescText'>{desc}</span>
                </a>
            </div>
        </div>
    );
}

export default FooterGrid;
