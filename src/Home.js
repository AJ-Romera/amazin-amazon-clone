import React from 'react';
import './Home.css';

/* Components */
import CardUiFat from './CardUiFat';
import CardUiQuad from './CardUiQuad';

function Home() {
    return (
        <div className='home'>
            <div className='home__container'>
                {/* CARROUSEL / IMG SLIDER */}
                <img
                    className='home__image'
                    src='https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg'
                    alt='Home Background'
                />

                <div className='home__row'>
                    <CardUiQuad />
                    <CardUiFat />
                    <CardUiFat />
                    <CardUiFat />
                    {/* Here CardUiDouble */}
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
