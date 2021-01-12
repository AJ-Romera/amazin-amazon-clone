import React from 'react';
import './FooterColumns.css';

function FooterColumns({
    footerTitle,
    aHref1,
    aHref2,
    aHref3,
    aHref4,
    aHref5,
    aHref6,
    aHref7,
    aHref8,
    aText1,
    aText2,
    aText3,
    aText4,
    aText5,
    aText6,
    aText7,
    aText8,
}) {
    return (
        <div className='footerColumns'>
            <div className='footer__navFooterVerticalColumn'>
                <div className='footer__header'>{footerTitle}</div>
                <ul>
                    <li>
                        <a href={aHref1}>{aText1}</a>
                    </li>
                    <li>
                        <a href={aHref2}>{aText2}</a>
                    </li>
                    <li>
                        <a href={aHref3}>{aText3}</a>
                    </li>
                    <li>
                        <a href={aHref4}>{aText4}</a>
                    </li>
                    <li>
                        <a href={aHref5}>{aText5}</a>
                    </li>
                    <li>
                        <a href={aHref6}>{aText6}</a>
                    </li>
                    <li>
                        <a href={aHref7}>{aText7}</a>
                    </li>
                    <li>
                        <a href={aHref8}>{aText8}</a>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default FooterColumns;
