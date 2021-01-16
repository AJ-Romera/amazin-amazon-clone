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
                                        <i className='header__navIcon'></i>
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

            <div className='header__right'>
                <div className='header__navTools header__navLayoutToolbar'>
                    <a
                        href='example'
                        className='header__navFlyout header__navA header__navA2 header__LinkStyle'
                    >
                        <span className='header__navLinkInner'>
                            <span className='header__navLine1'></span>
                            <span className='header__navLine2'>
                                <span className='header__navFlag header__navFlagUS'></span>
                                <span className='header__navIcon2 header__navArrow'></span>
                            </span>
                        </span>
                    </a>
                    <a
                        href='example'
                        className='header__signIn header__navA header__navA2 header__navProgressiveAttribute'
                    >
                        <div className='header__navLine1Container'>
                            <span className='header__navLinkAccountList header__navLine1 header__navProgressiveContent'>
                                Hello, Sign in
                            </span>
                        </div>
                        <span className='header__navLine2 header__navLongWidth'>
                            Account & Lists
                            <span className='header__navIcon header__navArrow'></span>
                        </span>
                    </a>
                    <a
                        href='example'
                        className='header__orders header__navA header__navA2 header__navProgressiveAttribute'
                    >
                        <span className='header__navLine1'>Returns</span>
                        <span className='header__navLine2'>& Orders</span>
                    </a>
                    <a
                        href='example'
                        className='header__cart header__navA header__navA2 header__navProgressiveAttribute'
                    >
                        <div className='header__navCartCountContainer'>
                            <span className='header__navCartCount header__nav-cart-count header__nav-cart-0 header__nav-progressive-attribute header__nav-progressive-content'></span>
                            <span className='header__navCartIcon'></span>
                        </div>
                        <div className='header__navCartTextContainer header__navProgressiveAttribute'>
                            <span className='header__navLine1'></span>
                            <span className='header__navLine2'>
                                Cart
                                <span className='header__navIcon header__navArrow'></span>
                            </span>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Header;
