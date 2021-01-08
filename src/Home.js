import React from 'react';
import './Home.css';

/* Components */
import CardUiFat from './CardUiFat';
import CardUiQuad from './CardUiQuad';
import CardUiPair from './CardUiPair';
import ProductSlider from './ProductSlider';
import PersonalizedRecommendations from './PersonalizedRecommendations';

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

                <div className='home__row'>
                    <ProductSlider
                        title='Must have Wireless products'
                        titleLinkUrl='#'
                        titleLinkText='Shop now'
                        img1='https://m.media-amazon.com/images/I/41PYkNWSrAL._AC_SY200_.jpg'
                        img2='https://m.media-amazon.com/images/I/41TEawIMRfL._AC_SY200_.jpg'
                        img3='https://m.media-amazon.com/images/I/310bMKQjT5L._AC_SY200_.jpg'
                        img4='https://m.media-amazon.com/images/I/31R4prWMk0L._AC_SY200_.jpg'
                        img5='https://m.media-amazon.com/images/I/41WOalZ1N5L._AC_SY200_.jpg'
                        img6='https://m.media-amazon.com/images/I/51EXcNKQgoL._AC_SY200_.jpg'
                        img7='https://m.media-amazon.com/images/I/413BYCci6NL._AC_SY200_.jpg'
                        img8='https://m.media-amazon.com/images/I/31QZt3z85mL._AC_SY200_.jpg'
                        img9='https://m.media-amazon.com/images/I/4178UF1W9NL._AC_SY200_.jpg'
                        img10='https://m.media-amazon.com/images/I/31YGiracCNL._AC_SY200_.jpg'
                        img11='https://m.media-amazon.com/images/I/41RzUZ7NUWL._AC_SY200_.jpg'
                        img12='https://m.media-amazon.com/images/I/41Lv8P3IcVL._AC_SY200_.jpg'
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
                        title='Stuffed Animals & Toys under $10'
                        titleLinkUrl='#'
                        titleLinkText='Shop now'
                        img1='https://m.media-amazon.com/images/I/512wF3yP3FL._AC_SY200_.jpg'
                        img2='https://m.media-amazon.com/images/I/41-7l-po+EL._AC_SY200_.jpg'
                        img3='https://m.media-amazon.com/images/I/41XCql8cjsL._AC_SY200_.jpg'
                        img4='https://m.media-amazon.com/images/I/41IrQCmYA+L._AC_SY200_.jpg'
                        img5='https://m.media-amazon.com/images/I/41+7ZmvKlUL._AC_SY200_.jpg'
                        img6='https://m.media-amazon.com/images/I/51wO0e5gXXL._AC_SY200_.jpg'
                        img7='https://m.media-amazon.com/images/I/41VFhVMh8uL._AC_SY200_.jpg'
                        img8='https://m.media-amazon.com/images/I/31y8TMTwRIL._AC_SY200_.jpg'
                        img9='https://m.media-amazon.com/images/I/410IWzsZhvL._AC_SY200_.jpg'
                        img10='https://m.media-amazon.com/images/I/51AaJPOD4qL._AC_SY200_.jpg'
                        img11='https://m.media-amazon.com/images/I/41j+wOpGjEL._AC_SY200_.jpg'
                        img12='https://m.media-amazon.com/images/I/41ZmuuKMtmL._AC_SY200_.jpg'
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
                        title='Best Sellers in Baby'
                        titleLinkUrl='#'
                        titleLinkText='Shop now'
                        img1='https://m.media-amazon.com/images/I/41RGrXACv8L._AC_SY200_.jpg'
                        img2='https://m.media-amazon.com/images/I/41+tceVy64L._AC_SY200_.jpg'
                        img3='https://m.media-amazon.com/images/I/31WLusUnqkL._AC_SY200_.jpg'
                        img4='https://m.media-amazon.com/images/I/31BrpSyGV3L._AC_SY200_.jpg'
                        img5='https://m.media-amazon.com/images/I/51G6gwpEvdL._AC_SY200_.jpg'
                        img6='https://m.media-amazon.com/images/I/51roA9wBHJL._AC_SY200_.jpg'
                        img7='https://m.media-amazon.com/images/I/41b5I86kihL._AC_SY200_.jpg'
                        img8='https://m.media-amazon.com/images/I/51mNDKg0DeL._AC_SY200_.jpg'
                        img9='https://m.media-amazon.com/images/I/41bEkkjIKOL._AC_SY200_.jpg'
                        img10='https://m.media-amazon.com/images/I/41g-gVqoCaL._AC_SY200_.jpg'
                        img11='https://m.media-amazon.com/images/I/31NlEBHSgoL._AC_SY200_.jpg'
                        img12='https://m.media-amazon.com/images/I/310cWWGXoBL._AC_SY200_.jpg'
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
                        title='Our favorite Toys'
                        titleLinkUrl='#'
                        titleLinkText='Shop now'
                        img1='https://m.media-amazon.com/images/I/51d5cqa2fVL._AC_SY200_.jpg'
                        img2='https://m.media-amazon.com/images/I/51-wsV9iCqL._AC_SY200_.jpg'
                        img3='https://m.media-amazon.com/images/I/51aIDYrc84L._AC_SY200_.jpg'
                        img4='https://m.media-amazon.com/images/I/51LmVkH0CkL._AC_SY200_.jpg'
                        img5='https://m.media-amazon.com/images/I/519cveTryBL._AC_SY200_.jpg'
                        img6='https://m.media-amazon.com/images/I/51g0tsYZE-L._AC_SY200_.jpg'
                        img7='https://m.media-amazon.com/images/I/41-UBiLdXbL._AC_SY200_.jpg'
                        img8='https://m.media-amazon.com/images/I/51HNS6E0kLL._AC_SY200_.jpg'
                        img9='https://m.media-amazon.com/images/I/41ruvOU1PcL._AC_SY200_.jpg'
                        img10='https://m.media-amazon.com/images/I/41MYebOo+lL._AC_SY200_.jpg'
                        img11='https://m.media-amazon.com/images/I/515i-dyW3rL._AC_SY200_.jpg'
                        img12='https://m.media-amazon.com/images/I/41vcxpLL8aL._AC_SY200_.jpg'
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
                        title='Popular Gifts in Baby'
                        titleLinkUrl='#'
                        titleLinkText='Shop now'
                        img1='https://m.media-amazon.com/images/I/31ECX6SZ+QL._AC_SY200_.jpg'
                        img2='https://m.media-amazon.com/images/I/41kuRv+XpwL._AC_SY200_.jpg'
                        img3='https://m.media-amazon.com/images/I/51P-3iHitqL._AC_SY200_.jpg'
                        img4='https://m.media-amazon.com/images/I/41n8-bcx+6L._AC_SY200_.jpg'
                        img5='https://m.media-amazon.com/images/I/41Iuq75ia9L._AC_SY200_.jpg'
                        img6='https://m.media-amazon.com/images/I/513-9LXlH4L._AC_SY200_.jpg'
                        img7='https://m.media-amazon.com/images/I/51hVJgJa24L._AC_SY200_.jpg'
                        img8='https://m.media-amazon.com/images/I/51H-kibj7KL._AC_SY200_.jpg'
                        img9='https://m.media-amazon.com/images/I/41ZM6bpZ5ZL._AC_SY200_.jpg'
                        img10='https://m.media-amazon.com/images/I/51EZAyLQUjL._AC_SY200_.jpg'
                        img11='https://m.media-amazon.com/images/I/51YRDvObbCL._AC_SY200_.jpg'
                        img12='https://m.media-amazon.com/images/I/51GpPB2cvHL._AC_SY200_.jpg'
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

                <div className='home__row home__fullWidthRow'>
                    <PersonalizedRecommendations
                        title='Inspired by your browsing history'
                        buttonLinkUrl='#'
                        buttonLinkText='Sign in to se personalized recommendations'
                        img1='https://images-na.ssl-images-amazon.com/images/I/71DPRgRVKLL._AC_SY220_.jpg'
                        img2='https://images-na.ssl-images-amazon.com/images/I/61Q%2B2i8UM5L._AC_SY220_.jpg'
                        img3='https://images-na.ssl-images-amazon.com/images/I/71iNwni9TsL._AC_SY220_.jpg'
                        img4='https://images-na.ssl-images-amazon.com/images/I/81vf4znYbaL._AC_SY220_.jpg'
                        img5='https://images-na.ssl-images-amazon.com/images/I/71vvXGmdKWL._AC_SY220_.jpg'
                        img6='https://images-na.ssl-images-amazon.com/images/I/51e2N3YuvWL._AC_SY220_.jpg'
                        img7='https://images-na.ssl-images-amazon.com/images/I/71s1LRpaprL._AC_SY220_.jpg'
                        img8='https://images-na.ssl-images-amazon.com/images/I/81sKYT9%2Bf3L._AC_SY220_.jpg'
                        img9='https://images-na.ssl-images-amazon.com/images/I/61Ebwh4O4fL._AC_SY220_.jpg'
                        img10='https://images-na.ssl-images-amazon.com/images/I/614GFJl2i5L._AC_SY220_.jpg'
                        img11='https://images-na.ssl-images-amazon.com/images/I/81AbJXWCxXL._AC_SY220_.jpg'
                        img12='https://images-na.ssl-images-amazon.com/images/I/81fstJkUlaL._AC_SY220_.jpg'
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
            </div>
        </div>
    );
}

export default Home;
