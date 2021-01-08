import React from 'react';
import './Footer.css';

function Footer() {
    return (
        <div className='footer'>
            <div className='footer__navFooter'>
                <a href='#nav-top' className='footer__navBackToTop'>
                    Come here
                </a>
                <div className='footer__navFooterVerticalColumn'></div>
                <div className='footer__navFooterEmptySpaceLine'></div>
                <div className='footer__langCurrencyAndCountry'></div>
                <div className='footer__moreOnAmazin'></div>
                <div className='footer__navFooterCopyright'></div>
            </div>
        </div>
    );
}

export default Footer;
