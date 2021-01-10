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
                <div className='footer__navFooterColumns'>
                    <div className='footer__navFooterVerticalColumn'>
                        <div className='footer__header'>Get to Know Us</div>
                        <ul>
                            <li>Careers</li>
                            <li>Blog</li>
                            <li>About Amazin</li>
                            <li>Investor Relations</li>
                            <li>Amazin Devices</li>
                            <li>Amazin Tours</li>
                        </ul>
                    </div>
                    <div className='footer__navFooterVerticalColumn'>
                        <div className='footer__header'>Get to Know Us</div>
                        <ul>
                            <li>Careers</li>
                            <li>Blog</li>
                            <li>About Amazin</li>
                            <li>Investor Relations</li>
                            <li>Amazin Devices</li>
                            <li>Amazin Tours</li>
                        </ul>
                    </div>
                    <div className='footer__navFooterVerticalColumn'>
                        <div className='footer__header'>Get to Know Us</div>
                        <ul>
                            <li>Careers</li>
                            <li>Blog</li>
                            <li>About Amazin</li>
                            <li>Investor Relations</li>
                            <li>Amazin Devices</li>
                            <li>Amazin Tours</li>
                        </ul>
                    </div>
                    <div className='footer__navFooterVerticalColumn'>
                        <div className='footer__header'>Get to Know Us</div>
                        <ul>
                            <li>Careers</li>
                            <li>Blog</li>
                            <li>About Amazin</li>
                            <li>Investor Relations</li>
                            <li>Amazin Devices</li>
                            <li>Amazin Tours</li>
                        </ul>
                    </div>
                </div>
                <div className='footer__navFooterEmptySpaceLine'></div>
                <div className='footer__langCurrencyAndCountry'>
                    <span>
                        <a href='/ref=footer_logo'>
                            <div className='footer__navFooterLogo'></div>
                        </a>
                    </span>
                    <span>
                        <div className='footer__optionsContainer'>
                            <a href='#'>
                                <div className='footer__globeIcon'></div>
                                <span>English</span>
                                <span className='footer__upDownArrow'></span>
                            </a>
                            <a href='#'>
                                <span className='footer__currencySymbol'>
                                    $
                                </span>
                                <span>USD - U.S. Dollar</span>
                            </a>
                            <a href='#'>
                                <span className='footer__flag'></span>
                                <span>United States</span>
                            </a>
                        </div>
                    </span>
                </div>
                <div className='footer__moreOnAmazin'>Something</div>
                <div className='footer__navFooterCopyright'>Something</div>
            </div>
        </div>
    );
}

export default Footer;
