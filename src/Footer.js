import React from 'react';
import './Footer.css';

/* Components */
import FooterColumns from './FooterColumns';
import FooterGrid from './FooterGrid';

function Footer() {
    return (
        <div className='footer'>
            <div className='footer__navFooter'>
                <a href='#nav-top' className='footer__navBackToTop'>
                    <span className='footer__navBackToTopText'>
                        Back to top
                    </span>
                </a>

                <div className='footer__row'>
                    <FooterColumns
                        footerTitle='Get to Know Us'
                        aHref1='#'
                        aHref2='#'
                        aHref3='#'
                        aHref4='#'
                        aHref5='#'
                        aHref6='#'
                        aHref7=''
                        aHref8=''
                        aText1='Careers'
                        aText2='Blog'
                        aText3='About Amazin'
                        aText4='Investor Relations'
                        aText5='Amazin Devices'
                        aText6='Amazin Tours'
                        aText7=''
                        aText8=''
                    />
                    <FooterColumns
                        footerTitle='Make Money with Us'
                        aHref1='#'
                        aHref2='#'
                        aHref3='#'
                        aHref4='#'
                        aHref5='#'
                        aHref6='#'
                        aHref7='#'
                        aHref8=''
                        aText1='Sell products on Amazin'
                        aText2='Sell apps on Amazin'
                        aText3='Become an Affiliate'
                        aText4='Advertise Your Products'
                        aText5='Self-Publish with Us'
                        aText6='Host an Amazin Hub'
                        aText7='› See More Make Money with Us'
                        aText8=''
                    />
                    <FooterColumns
                        footerTitle='Amazin Payment Products'
                        aHref1='#'
                        aHref2='#'
                        aHref3='#'
                        aHref4='#'
                        aHref5=''
                        aHref6=''
                        aHref7=''
                        aHref8=''
                        aText1='Amazin Business Card'
                        aText2='Shop with Points'
                        aText3='Reload Your Balance'
                        aText4='Amazin Currency Converter'
                        aText5=''
                        aText6=''
                        aText7=''
                        aText8=''
                    />
                    <FooterColumns
                        footerTitle='Let Us Help You'
                        aHref1='#'
                        aHref2='#'
                        aHref3='#'
                        aHref4='#'
                        aHref5='#'
                        aHref6='#'
                        aHref7='#'
                        aHref8='#'
                        aText1='Amazin and COVID-19'
                        aText2='Your Account'
                        aText3='Your Orders'
                        aText4='Shipping Rates & Policies'
                        aText5='Returns & Replacements'
                        aText6='Manage Your Content and Devices'
                        aText7='Amazin Assistant'
                        aText8='Help'
                    />
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

                <div className='footer__moreOnAmazin'>
                    <div className='footer__moreOnAmaizinContainer'>
                        <FooterGrid
                            aHref='#'
                            title='Amazin Music'
                            desc='Stream millions of songs'
                        />
                        <FooterGrid
                            aHref='#'
                            title='Amazin Advertising'
                            desc='Find, attract, and engage customers'
                        />
                        <FooterGrid
                            aHref='#'
                            title='Amazin Drive'
                            desc='Cloud storage from Amazin'
                        />
                        <FooterGrid
                            aHref='#'
                            title='6pm'
                            desc='Score deals on fashion brands'
                        />
                        <FooterGrid
                            aHref='#'
                            title='AbeBooks'
                            desc='Books, art & collectibles'
                        />
                        <FooterGrid
                            aHref='#'
                            title='ACX'
                            desc='Audiobook Publishing Made Easy'
                        />
                        <FooterGrid
                            aHref='#'
                            title='Alexo'
                            desc='Actionable Analytics for the Web'
                        />
                        <FooterGrid
                            aHref='#'
                            title='Sell on Amazin'
                            desc='Start a Selling Account'
                        />
                        <FooterGrid
                            aHref='#'
                            title='Amazin Business'
                            desc='Everything For Your Business'
                        />
                        <FooterGrid
                            aHref='#'
                            title='AmazinGlobal'
                            desc='Ship Orders Internationally'
                        />
                        <FooterGrid
                            aHref='#'
                            title='Home Services'
                            desc='Experienced Pros Happiness Guarantee'
                        />
                        <FooterGrid
                            aHref='#'
                            title='Amazin Ignite'
                            desc='Sell your original Digital Educational Resources'
                        />
                        <FooterGrid
                            aHref='#'
                            title='Amazin Rapids'
                            desc='Fun stories for kids on the go'
                        />
                        <FooterGrid
                            aHref='#'
                            title='Amazin Web Services'
                            desc='Scalable Cloud Computing Services'
                        />
                        <FooterGrid
                            aHref='#'
                            title='Audible'
                            desc='Listen to Books & Original Audio Performances'
                        />
                        <FooterGrid
                            aHref='#'
                            title='Book Depository'
                            desc='Books With Free Delivery Worldwide'
                        />
                        <FooterGrid
                            aHref='#'
                            title='Box Office Mojo'
                            desc='Find Movie Box Office Data'
                        />
                        <FooterGrid
                            aHref='#'
                            title='ComiXology'
                            desc='Thousands of Digital Comics'
                        />
                        <FooterGrid
                            aHref='#'
                            title='DPReview'
                            desc='Digital Photography'
                        />
                        <FooterGrid
                            aHref='#'
                            title='East Dane'
                            desc='Designer Men´s Fashion'
                        />
                        <FooterGrid
                            aHref='#'
                            title='Fabric'
                            desc='Sewing, Quilting & Knitting'
                        />
                        <FooterGrid
                            aHref='#'
                            title='Goodreads'
                            desc='Book reviews & recommendations'
                        />
                        <FooterGrid
                            aHref='#'
                            title='IMDb'
                            desc='Movies, TV & Celebrities'
                        />
                        <FooterGrid
                            aHref='#'
                            title='IMDbPro'
                            desc='Get Info Entertainment Professionals Need'
                        />
                        <FooterGrid
                            aHref='#'
                            title='Kindle Direct Publishing'
                            desc='Indie Digital & Print Publishing Made Easy'
                        />
                        <FooterGrid
                            aHref='#'
                            title='Prime Video Direct'
                            desc='Video Distribution Made Easy'
                        />
                        <FooterGrid
                            aHref='#'
                            title='Shopbop'
                            desc='Designer Fashion Brands'
                        />
                        <FooterGrid
                            aHref='#'
                            title='Woot!'
                            desc='Deals and Shenanigans'
                        />
                        <FooterGrid
                            aHref='#'
                            title='Zappos'
                            desc='Shoes & Clothing'
                        />
                        <FooterGrid
                            aHref='#'
                            title='Ring'
                            desc='Smart Home Security Systems'
                        />
                        <FooterGrid
                            aHref='#'
                            title='eero WiFi'
                            desc='Stream 4K Video in Every Room'
                        />
                        <FooterGrid
                            aHref='#'
                            title='Neighbors App'
                            desc='Real-Time Crime & Safety Alerts'
                        />
                        <FooterGrid
                            aHref='#'
                            title='Amazin Subscription Boxes'
                            desc='Top subscription boxes – right to your door'
                        />
                        <FooterGrid
                            aHref='#'
                            title='PillPack'
                            desc='Pharmacy Simplified'
                        />
                        <FooterGrid
                            aHref='#'
                            title='Amazin Second Chance'
                            desc='Pass it on, trade it in, give it a second life'
                        />
                    </div>
                </div>

                <div className='footer__navFooterCopyright'>
                    <ul>
                        <li>
                            <a href='#'>Conditions of Use</a>
                        </li>
                        <li>
                            <a href='#'>Privacy Notice</a>
                        </li>
                        <li>
                            <a href='#'>Interest-Based Ads</a>
                        </li>
                        <li className='footer__navLast'>
                            © 2020-2021, Amazin, Inc. or its affiliates
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Footer;
