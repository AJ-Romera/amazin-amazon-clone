import React from 'react';
import './FooterColumns.css';

function FooterColumns() {
    return (
        <div className='footerColumns'>
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
    );
}

export default FooterColumns;
