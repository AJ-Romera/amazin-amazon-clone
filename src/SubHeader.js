import React from 'react';
import './SubHeader.css';

/* Icons */
import MenuRoundedIcon from '@material-ui/icons/MenuRounded';

function SubHeader() {
    return (
        <div className='subHeader'>
            <div className='subHeader__left'>
                <div className='subHeader__menu'>
                    <MenuRoundedIcon className='subHeader__menuIcon' />
                    <span className='subHeader__all'>All</span>
                </div>

                <div className='subHeader__nav'>
                    <span className='subHeader__option'>Today's Deals</span>
                    <span className='subHeader__option'>Customer Service</span>
                    <span className='subHeader__option'>Gift Cards</span>
                    <span className='subHeader__option'>Sell</span>
                    <span className='subHeader__option'>Registry</span>
                </div>
            </div>

            <div className='subHeader__navMsg'>
                <span className='subHeader__msg'>
                    Amazin's response to COVID-19
                </span>
            </div>
        </div>
    );
}

export default SubHeader;
