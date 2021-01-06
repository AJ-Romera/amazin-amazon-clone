import React from 'react';
import './Home.css';

/* Components */
import CardUiFat from './CardUiFat';
import CardUiQuad from './CardUiQuad';
import CardUiPair from './CardUiPair';
import ProductSlider from './ProductSlider';

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
                    <ProductSlider
                        title='Discover Amazin'
                        titleLinkUrl='#'
                        titleLinkText='Click to learn more'
                        img1='https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Projects/HelpPage/BubbleShoveler/English/Fuji_Bubble_8Languages_en_US_updated_1x._CB445837675_.png'
                        img2='https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2019/October/BubbleShoveler/AIS_Bubble_Currency_en_US_1X._CB451228332_.jpg'
                        img3='https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2019/October/BubbleShoveler/AIS_Bubble_SecurePayment_en_US_1X._CB451228335_.jpg'
                        img4='https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2019/October/BubbleShoveler/AIS_Bubble_ImportFees_en_US_1X._CB451228332_.jpg'
                        img5='https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2019/October/BubbleShoveler/AIS_Bubble_TrackPackage_en_US_1X._CB451228335_.jpg'
                        img6='https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2019/October/BubbleShoveler/AIS_Bubble_247CS_en_US_1X._CB451228332_.jpg'
                        img7='https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Projects/HelpPage/BubbleShoveler/English/Fuji_Bubble_8Languages_en_US_updated_1x._CB445837675_.png'
                        img8='https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2019/October/BubbleShoveler/AIS_Bubble_Currency_en_US_1X._CB451228332_.jpg'
                        img9='https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2019/October/BubbleShoveler/AIS_Bubble_SecurePayment_en_US_1X._CB451228335_.jpg'
                        img10='https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2019/October/BubbleShoveler/AIS_Bubble_ImportFees_en_US_1X._CB451228332_.jpg'
                        img11='https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2019/October/BubbleShoveler/AIS_Bubble_TrackPackage_en_US_1X._CB451228335_.jpg'
                        img12='https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2019/October/BubbleShoveler/AIS_Bubble_247CS_en_US_1X._CB451228332_.jpg'
                        link1='#'
                        link2='#'
                        link3='#'
                        link4='#'
                        link5='#'
                        link6='#'
                        link7='#'
                        link8='#'
                        link9='#'
                        link10='#'
                        link11='#'
                        link12='#'
                    />
                </div>

                <div className='home__row'>
                    <ProductSlider
                        title='Amazin Top Sellers'
                        titleLinkUrl='#'
                        titleLinkText='Shop now'
                        img1='https://m.media-amazon.com/images/I/41ffko0T3kL._AC_SY200_.jpg'
                        img2='https://m.media-amazon.com/images/I/41KL+iXUXCL._AC_SY200_.jpg'
                        img3='https://m.media-amazon.com/images/I/51G8LfsNZzL._AC_SY200_.jpg'
                        img4='https://m.media-amazon.com/images/I/31i3tpuXxxL._AC_SY200_.jpg'
                        img5='https://m.media-amazon.com/images/I/41yavwjp-8L._AC_SY200_.jpg'
                        img6='https://m.media-amazon.com/images/I/41XlyY4EvQL._AC_SY200_.jpg'
                        img7='https://m.media-amazon.com/images/I/41W5-duvLkL._AC_SY200_.jpg'
                        img8='https://m.media-amazon.com/images/I/41g0C69FbvL._AC_SY200_.jpg'
                        img9='https://m.media-amazon.com/images/I/41tQ9dniedL._AC_SY200_.jpg'
                        img10='https://m.media-amazon.com/images/I/41bCxnHksnL._AC_SY200_.jpg'
                        img11='https://m.media-amazon.com/images/I/41GGPRqTZtL._AC_SY200_.jpg'
                        img12='https://m.media-amazon.com/images/I/41Pf-FgUROL._AC_SY200_.jpg'
                        link1='#'
                        link2='#'
                        link3='#'
                        link4='#'
                        link5='#'
                        link6='#'
                        link7='#'
                        link8='#'
                        link9='#'
                        link10='#'
                        link11='#'
                        link12='#'
                    />
                </div>

                <div className='home__row'>
                    <ProductSlider
                        title='Gifts in Video Games under $30'
                        titleLinkUrl='#'
                        titleLinkText='Shop now'
                        img1='https://m.media-amazon.com/images/I/51NV8Uil7wL._AC_SY200_.jpg'
                        img2='https://m.media-amazon.com/images/I/41QztBTooxL._AC_SY200_.jpg'
                        img3='https://m.media-amazon.com/images/I/41BP6N0cDVL._AC_SY200_.jpg'
                        img4='https://m.media-amazon.com/images/I/51HzG7dwAHL._AC_SY200_.jpg'
                        img5='https://m.media-amazon.com/images/I/319KAiGobEL._AC_SY200_.jpg'
                        img6='https://m.media-amazon.com/images/I/41Ww3zikowL._AC_SY200_.jpg'
                        img7='https://m.media-amazon.com/images/I/41sFQT0I4aL._AC_SY200_.jpg'
                        img8='https://m.media-amazon.com/images/I/51mZVG8qQZL._AC_SY200_.jpg'
                        img9='https://m.media-amazon.com/images/I/41VbT96pAWL._AC_SY200_.jpg'
                        img10='https://m.media-amazon.com/images/I/41PDAAtkyGL._AC_SY200_.jpg'
                        img11='https://m.media-amazon.com/images/I/51vOyKGea+L._AC_SY200_.jpg'
                        img12='https://m.media-amazon.com/images/I/31aYZs3ij5L._AC_SY200_.jpg'
                        link1='#'
                        link2='#'
                        link3='#'
                        link4='#'
                        link5='#'
                        link6='#'
                        link7='#'
                        link8='#'
                        link9='#'
                        link10='#'
                        link11='#'
                        link12='#'
                    />
                </div>

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
                    <ProductSlider />
                </div>

                <div className='home__row'>
                    <ProductSlider />
                </div>

                <div className='home__row'>
                    <ProductSlider />
                </div>

                <div className='home__row'>
                    <ProductSlider />
                </div>

                <div className='home__row'>
                    <ProductSlider />
                </div> */}

                <div className='home__row'>
                    {/* PersonalizedRecomendations */}
                </div>
            </div>
        </div>
    );
}

export default Home;
