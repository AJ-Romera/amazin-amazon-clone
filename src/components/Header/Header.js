import React from 'react';
import './Header.css';

/* Icons */
import SearchIcon from '@material-ui/icons/Search';
import FlagIcon from '@material-ui/icons/Flag';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

function Header() {
    return (
        <div className='header'>
            <div className='header__left'>
                <div className='header__logo'>
                    <a href='#' className='header__logoLink'>
                        <span className='header__logoImg'></span>
                    </a>
                </div>
                <div className='header__deliveryAddress'>
                    <span className='header__deliveryAddressModal'>
                        <a className='header__deliveryAddressPopoverLink'>
                            <div className='header__locationIcon'></div>
                            <div className='header__location'>
                                <span className='header__locationLineOne'>
                                    Deliver to
                                </span>
                                <span className='header__locationLineTwo'>
                                    EEUU
                                </span>
                            </div>
                        </a>
                    </span>
                </div>
            </div>

            <div className='header__search'>
                <input className='header__searchInput' type='text' />
                <SearchIcon className='header__searchIcon' />
            </div>

            <div className='header__nav'>
                <div className='header__option'>
                    <FlagIcon className='header__flagIcon' />
                </div>

                <div className='header__option'>
                    <span className='header__optionLineOne'>
                        Hello, Sign In
                    </span>
                    <span className='header__optionLineTwo'>
                        Account & Lists
                    </span>
                </div>

                <div className='header__option'>
                    <span className='header__optionLineOne'>Returns</span>
                    <span className='header__optionLineTwo'>& Orders</span>
                </div>

                <div className='header__optionCart'>
                    <ShoppingCartIcon
                        className='header__ShoppingCartIcon'
                        fontSize='large'
                    />
                    <span className='header__optionLineOne header__cartCount'>
                        0
                    </span>
                    <span className='header__optionLineTwo'>Cart</span>
                </div>
            </div>
        </div>
    );
}

export default Header;
