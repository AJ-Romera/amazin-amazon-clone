import React from 'react';
import './Footer.css';

/* Components */
import FooterColumns from './subComponents/FooterColumns';
import FooterGrid from './subComponents/FooterGrid';

/* Icons */
import LanguageIcon from '@material-ui/icons/Language';
import UnfoldMoreIcon from '@material-ui/icons/UnfoldMore';

function Footer() {
    return (
        <div className='footer'>
            <div className='footer__navFooter'>
                <a href='/' className='footer__navBackToTop'>
                    <span className='footer__navBackToTopText'>
                        Back to top
                    </span>
                </a>

                <div className='footer__row'>
                    <FooterColumns
                        footerTitle='Get to Know Us'
                        aHref1='/test'
                        aHref2='/test'
                        aHref3='/test'
                        aHref4='/test'
                        aHref5='/test'
                        aHref6='/test'
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
                        aHref1='/test'
                        aHref2='/test'
                        aHref3='/test'
                        aHref4='/test'
                        aHref5='/test'
                        aHref6='/test'
                        aHref7='/test'
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
                        aHref1='/test'
                        aHref2='/test'
                        aHref3='/test'
                        aHref4='/test'
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
                        aHref1='/test'
                        aHref2='/test'
                        aHref3='/test'
                        aHref4='/test'
                        aHref5='/test'
                        aHref6='/test'
                        aHref7='/test'
                        aHref8='/test'
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
                        <a href='/test'>
                            <div className='footer__navFooterLogo'></div>
                        </a>
                    </span>
                    <span>
                        <div className='footer__optionsContainer'>
                            <a href='/test'>
                                <div className='footer__globeIcon'>
                                    <LanguageIcon style={{ fontSize: 19 }} />
                                </div>
                                <span>English</span>
                                <span className='footer__upDownArrow'>
                                    <UnfoldMoreIcon style={{ fontSize: 16 }} />
                                </span>
                            </a>
                            <a href='/test'>
                                <span className='footer__currencySymbol'>
                                    $
                                </span>
                                <span>USD - U.S. Dollar</span>
                            </a>
                            <a href='/test'>
                                <span className='footer__flag'></span>
                                <span>United States</span>
                            </a>
                        </div>
                    </span>
                </div>

                <div className='footer__moreOnAmazin'>
                    <div className='footer__moreOnAmaizinContainer'>
                        <FooterGrid
                            aHref='/test'
                            title='Amazin Music'
                            desc='Stream millions of songs'
                        />
                        <FooterGrid
                            aHref='/test'
                            title='Amazin Advertising'
                            desc='Find, attract, and engage customers'
                        />
                        <FooterGrid
                            aHref='/test'
                            title='Amazin Drive'
                            desc='Cloud storage from Amazin'
                        />
                        <FooterGrid
                            aHref='/test'
                            title='6pm'
                            desc='Score deals on fashion brands'
                        />
                        <FooterGrid
                            aHref='/test'
                            title='AbeBooks'
                            desc='Books, art & collectibles'
                        />
                        <FooterGrid
                            aHref='/test'
                            title='ACX'
                            desc='Audiobook Publishing Made Easy'
                        />
                        <FooterGrid
                            aHref='/test'
                            title='Alexo'
                            desc='Actionable Analytics for the Web'
                        />
                        <FooterGrid
                            aHref='/test'
                            title='Sell on Amazin'
                            desc='Start a Selling Account'
                        />
                        <FooterGrid
                            aHref='/test'
                            title='Amazin Business'
                            desc='Everything For Your Business'
                        />
                        <FooterGrid
                            aHref='/test'
                            title='AmazinGlobal'
                            desc='Ship Orders Internationally'
                        />
                        <FooterGrid
                            aHref='/test'
                            title='Home Services'
                            desc='Experienced Pros Happiness Guarantee'
                        />
                        <FooterGrid
                            aHref='/test'
                            title='Amazin Ignite'
                            desc='Sell your original Digital Educational Resources'
                        />
                        <FooterGrid
                            aHref='/test'
                            title='Amazin Rapids'
                            desc='Fun stories for kids on the go'
                        />
                        <FooterGrid
                            aHref='/test'
                            title='Amazin Web Services'
                            desc='Scalable Cloud Computing Services'
                        />
                        <FooterGrid
                            aHref='/test'
                            title='Audible'
                            desc='Listen to Books & Original Audio Performances'
                        />
                        <FooterGrid
                            aHref='/test'
                            title='Book Depository'
                            desc='Books With Free Delivery Worldwide'
                        />
                        <FooterGrid
                            aHref='/test'
                            title='Box Office Mojo'
                            desc='Find Movie Box Office Data'
                        />
                        <FooterGrid
                            aHref='/test'
                            title='ComiXology'
                            desc='Thousands of Digital Comics'
                        />
                        <FooterGrid
                            aHref='/test'
                            title='DPReview'
                            desc='Digital Photography'
                        />
                        <FooterGrid
                            aHref='/test'
                            title='East Dane'
                            desc='Designer Men´s Fashion'
                        />
                        <FooterGrid
                            aHref='/test'
                            title='Fabric'
                            desc='Sewing, Quilting & Knitting'
                        />
                        <FooterGrid
                            aHref='/test'
                            title='Goodreads'
                            desc='Book reviews & recommendations'
                        />
                        <FooterGrid
                            aHref='/test'
                            title='IMDb'
                            desc='Movies, TV & Celebrities'
                        />
                        <FooterGrid
                            aHref='/test'
                            title='IMDbPro'
                            desc='Get Info Entertainment Professionals Need'
                        />
                        <FooterGrid
                            aHref='/test'
                            title='Kindle Direct Publishing'
                            desc='Indie Digital & Print Publishing Made Easy'
                        />
                        <FooterGrid
                            aHref='/test'
                            title='Prime Video Direct'
                            desc='Video Distribution Made Easy'
                        />
                        <FooterGrid
                            aHref='/test'
                            title='Shopbop'
                            desc='Designer Fashion Brands'
                        />
                        <FooterGrid
                            aHref='/test'
                            title='Woot!'
                            desc='Deals and Shenanigans'
                        />
                        <FooterGrid
                            aHref='/test'
                            title='Zappos'
                            desc='Shoes & Clothing'
                        />
                        <FooterGrid
                            aHref='/test'
                            title='Ring'
                            desc='Smart Home Security Systems'
                        />
                        <FooterGrid
                            aHref='/test'
                            title='eero WiFi'
                            desc='Stream 4K Video in Every Room'
                        />
                        <FooterGrid
                            aHref='/test'
                            title='Neighbors App'
                            desc='Real-Time Crime & Safety Alerts'
                        />
                        <FooterGrid
                            aHref='/test'
                            title='Amazin Subscription Boxes'
                            desc='Top subscription boxes – right to your door'
                        />
                        <FooterGrid
                            aHref='/test'
                            title='PillPack'
                            desc='Pharmacy Simplified'
                        />
                        <FooterGrid
                            aHref='/test'
                            title='Amazin Second Chance'
                            desc='Pass it on, trade it in, give it a second life'
                        />
                    </div>
                </div>

                <div className='footer__navFooterCopyright'>
                    <ul>
                        <li>
                            <a href='/test'>Conditions of Use</a>
                        </li>
                        <li>
                            <a href='/test'>Privacy Notice</a>
                        </li>
                        <li>
                            <a href='/test'>Interest-Based Ads</a>
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
