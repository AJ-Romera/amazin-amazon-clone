import React from 'react';
import { Link } from 'react-router-dom';
import './SubHeader.css';

function SubHeader() {
    return (
        <div className='subHeader'>
            <div className='subHeader__left'>
                <Link to='/test'>
                    <div className='subHeader__menu'>
                        <i className='subHeader__menuIcon'></i>
                        <span className='subHeader__all'>All</span>
                    </div>
                </Link>

                <div className='subHeader__nav'>
                    <Link to='/test'>
                        <span className='subHeader__option'>Today's Deals</span>
                    </Link>
                    <Link to='/test'>
                        <span className='subHeader__option'>
                            Customer Service
                        </span>
                    </Link>
                    <Link to='/test'>
                        <span className='subHeader__option'>Gift Cards</span>
                    </Link>
                    <Link to='/test'>
                        <span className='subHeader__option'>Sell</span>
                    </Link>
                    <Link to='/test'>
                        <span className='subHeader__option'>Registry</span>
                    </Link>
                </div>
            </div>

            <Link to='/test'>
                <div className='subHeader__navMsg'>
                    <span className='subHeader__msg'>
                        Amazin's response to COVID-19
                    </span>
                </div>
            </Link>
        </div>
    );
}

export default SubHeader;
