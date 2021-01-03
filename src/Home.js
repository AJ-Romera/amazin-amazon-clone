import React from 'react';
import './Home.css';

/* Components */
import CardUiFat from './CardUiFat';
import CardUiQuad from './CardUiQuad';
import CardUiPair from './CardUiPair';
import ProductSliderWithScroll from './ProductSliderWithScroll';

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
                    <CardUiFat
                        title='Amazin Basics'
                        image='https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2019/July/amazonbasics_520x520._SY304_CB442725065_.jpg'
                        footerLink='https://www.google.es'
                        footerText='See more'
                    />
                    <CardUiFat
                        title='Electronics'
                        image='https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_Electronics_1x._SY304_CB432774322_.jpg'
                        footerLink='https://www.google.es'
                        footerText='See more'
                    />
                    <CardUiPair image='https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/October/Fuji_D2_45M_en_US_1x._CB418309979_.jpg' />
                </div>

                <div className='home__row'>
                    <CardUiFat
                        title='Shop top categories'
                        image='https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2020/PrimeDay/Fuji_Dash_PD_Nonprime__1x._SY304_CB403084762_.jpg'
                        footerLink='https://www.google.es'
                        footerText='See more'
                    />
                    <CardUiFat
                        title='Computers & Accessories'
                        image='https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_PC_1x._SY304_CB431800965_.jpg'
                        footerLink='https://www.google.es'
                        footerText='Shop now'
                    />
                    <CardUiFat
                        title='Beauty picks'
                        image='https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_Beauty_1x._SY304_CB432774351_.jpg'
                        footerLink='https://www.google.es'
                        footerText='Shop now'
                    />
                    <CardUiFat
                        title='Deals & Promotions'
                        image='https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_Deals_1x._SY304_CB430401028_.jpg'
                        footerLink='https://www.google.es'
                        footerText='Shop now'
                    />
                </div>

                <div className='home__row'>
                    <ProductSliderWithScroll />
                </div>

                {/* <div className='home__row'>
                    <ProductSliderWithScroll />
                </div>

                <div className='home__row'>
                    <ProductSliderWithScroll />
                </div> */}

                <div className='home__row'>
                    <CardUiQuad
                        title='Comfy styles for her'
                        tlImg='https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_WomenFashion_Sweatshirt_Quad_Cat_1x._SY116_CB418609101_.jpg'
                        trImg='https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_WomenFashion_Joggers_Quad_Cat_1x._SY116_CB418608748_.jpg'
                        blImg='https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_WomenFashion_Cardigans_Quad_Cat_1x._SY116_CB418608722_.jpg'
                        brImg='https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_WomenFashion_Tees_Quad_Cat_1x._SY116_CB418608878_.jpg'
                        tlSubTitle='Sweatshirts'
                        trSubTitle='Joggers'
                        blSubTitle='Cardigans'
                        brSubTitle='Easy tees'
                        footerLink='https://www.google.es'
                        footerText='See more'
                    />
                    <CardUiFat
                        title='Shop Laptops & Tablets'
                        image='https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_Laptops_379x304_1X_en_US._SY304_CB418608471_.jpg'
                        footerLink='https://www.google.es'
                        footerText='See more'
                    />
                    <CardUiFat
                        title='Explore home bedding'
                        image='https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_HomeBedding_Single_Cat_1x._SY304_CB418596953_.jpg'
                        footerLink='https://www.google.es'
                        footerText='See more'
                    />
                    <CardUiFat
                        title='Create with strip lights'
                        image='https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_StripLighting_379x304_1X_en_US._SY304_CB418597476_.jpg'
                        footerLink='https://www.google.es'
                        footerText='Shop now'
                    />
                </div>

                {/* <div className='home__row'>
                    <ProductSliderWithScroll />
                </div>

                <div className='home__row'>
                    <ProductSliderWithScroll />
                </div>

                <div className='home__row'>
                    <ProductSliderWithScroll />
                </div>

                <div className='home__row'>
                    <ProductSliderWithScroll />
                </div>

                <div className='home__row'>
                    <ProductSliderWithScroll />
                </div> */}

                <div className='home__row'>
                    {/* PersonalizedRecomendations */}
                </div>
            </div>
        </div>
    );
}

export default Home;
