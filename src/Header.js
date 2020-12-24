import React from 'react';
import './Header.css';

/* Icons */
import SearchIcon from '@material-ui/icons/Search';
import FlagIcon from '@material-ui/icons/Flag';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

function Header() {
    return (
        <div className='header'>
            <div className='header__left'>
                <img
                    className='header__logo'
                    src='http://pngimg.com/uploads/amazon/amazon_PNG11.png'
                    alt='Amazon Logo'
                />
                <div className='header__deliveryAddress'>
                    <LocationOnIcon className='header__locationOnIcon' />
                    <div className='header__location'>
                        <span className='header__locationLineOne'>
                            Deliver to
                        </span>
                        <span className='header__locationLineTwo'>EEUU</span>
                    </div>
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
