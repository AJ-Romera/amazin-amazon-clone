import React from 'react';
import './Footer.css';

function Footer() {
    return (
        <div className='footer'>
            <div className='footer__navFooter'>
                <a href='#nav-top' className='footer__navBackToTop'>
                    <span className='footer__navBackToTopText'>
                        Back to top
                    </span>
                </a>
                <div className='footer__navFooterVerticalColumn'>Something</div>
                <div className='footer__navFooterEmptySpaceLine'>Something</div>
                <div className='footer__langCurrencyAndCountry'>Something</div>
                <div className='footer__moreOnAmazin'>Something</div>
                <div className='footer__navFooterCopyright'>Something</div>
            </div>
        </div>
    );
}

export default Footer;
