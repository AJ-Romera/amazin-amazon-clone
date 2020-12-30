import React from 'react';
import './Home.css';

/* Components */
import CardUiFat from './CardUiFat';
import CardUiQuad from './CardUiQuad';
import CardUiPair from './CardUiPair';

function Home() {
    return (
        <div className='home'>
            <div className='home__container'>
                {/* CARROUSEL / IMG SLIDER */}
                <img
                    className='home__image'
                    src='https://images-eu.ssl-images-amazon.com/images/G/30/digital/video/gateway/placement/launch/ElCidS1/ECID_S1_GWBleedingHero_FT_COVIDUPDATE_XSite_1500X600_PV_es-ES._CB413915935_.jpg'
                    alt='Home Background'
                />

                <div className='home__row'>
                    <CardUiQuad
                        title='Shop by Category'
                        tlImg='https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2019/February/Dashboard/computer120x._SY85_CB468850970_.jpg'
                        trImg='https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2019/August/DashboardCard/PS4_120X._SY85_CB438749318_.jpg'
                        blImg='https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2019/February/Dashboard/Baby120X._SY85_CB468850882_.jpg'
                        brImg='https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2019/February/Dashboard/Toys120X._SY85_CB468851693_.jpg'
                        tlSubTitle='Computers & Accessories'
                        trSubTitle='Video Games'
                        blSubTitle='Baby'
                        brSubTitle='Toys & Games'
                        footerLink='https://www.google.es'
                        footerText='Shop Now'
                    />
                    <CardUiFat />
                    <CardUiFat />
                    <CardUiPair />
                </div>

                <div className='home__row'>
                    <CardUiFat />
                    <CardUiFat />
                    <CardUiFat />
                    <CardUiFat />
                </div>

                <div className='home__row'>
                    <h1>SLIDER TYPE 1 HERE</h1>
                    {/* SliderWithScrollType1 */}
                </div>

                <div className='home__row'>
                    <h1>SLIDER TYPE 2 HERE</h1>
                    {/* SliderWithScrollType2 */}
                </div>

                <div className='home__row'>
                    <h1>SLIDER TYPE 2 HERE</h1>
                    {/* SliderWithScrollType2 */}
                </div>

                <div className='home__row'>
                    <CardUiQuad />
                    <CardUiFat />
                    <CardUiFat />
                    <CardUiFat />
                </div>

                <div className='home__row'>
                    <h1>SLIDER TYPE 2 HERE</h1>
                    {/* SliderWithScrollType2 */}
                </div>

                <div className='home__row'>
                    <h1>SLIDER TYPE 2 HERE</h1>
                    {/* SliderWithScrollType2 */}
                </div>

                <div className='home__row'>
                    <h1>SLIDER TYPE 2 HERE</h1>
                    {/* SliderWithScrollType2 */}
                </div>

                <div className='home__row'>
                    <h1>SLIDER TYPE 2 HERE</h1>
                    {/* SliderWithScrollType2 */}
                </div>

                <div className='home__row'>
                    <h1>SLIDER TYPE 2 HERE</h1>
                    {/* SliderWithScrollType2 */}
                </div>
            </div>
        </div>
    );
}

export default Home;
