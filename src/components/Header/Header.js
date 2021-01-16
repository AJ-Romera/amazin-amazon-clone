import React from 'react';
import './Header.css';

/* Icons */
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
                <div className='header__searchNav'>
                    <form className='header__searchNavBar'>
                        <div className='header__searchNavBarLeft'>
                            <div className='header__searchNavDropdown'>
                                <div className='header__searchNavScope'>
                                    <div className='header__searchNavFacade'>
                                        <span className='header__searchNavLabel'>
                                            All
                                        </span>
                                        <i className='header__searchNavIcon'></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='header__searchNavBarCenter'>
                            <div className='header__searchNavField'>
                                <input
                                    className='header__searchInputText'
                                    type='text'
                                    autoComplete='off'
                                />
                            </div>
                        </div>
                        <div className='header__searchNavBarRight'>
                            <div className='header__searchNavSubmit'>
                                <span className='header__searchNavSubmitText'>
                                    <input
                                        className='header__searchInputSubmit'
                                        type='submit'
                                    />
                                </span>
                            </div>
                        </div>
                    </form>
                </div>
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
                        className='header__shoppingCartIcon'
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
