import React from 'react';
import Carousel from 'react-elastic-carousel';
import Item from './Item';
import './ProductSliderWithScroll.css';

/* const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 4 },
]; */

function ProductSliderWithScroll() {
    return (
        <div className='productSliderWithScroll'>
            <div className='productSliderWithScroll__container'>
                <div className='productSliderWithScroll__titleSection'>
                    <h2>Discover Amazin</h2>
                    <span>
                        <a href='https://www.amazon.com/b?ie=UTF8&node=20338496011&ref=aistrustseemore&pf_rd_r=5ZR5B7Z486Y7VYY66PWF&pf_rd_p=8a5d31b2-ba07-4fea-99e1-c8469768d109'>
                            Click to learn more
                        </a>
                    </span>
                </div>
                <div className='productSliderWithScroll__carouselSection'>
                    <Carousel
                        itemsToScroll={6}
                        itemsToShow={6}
                        /* breakPoints={breakPoints} */
                        pagination={false}
                        showArrows={false}
                    >
                        <Item>
                            <img
                                src='https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Projects/HelpPage/BubbleShoveler/English/Fuji_Bubble_8Languages_en_US_updated_1x._CB445837675_.png'
                                alt='Item 1'
                            />
                        </Item>
                        <Item>
                            <img
                                src='https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2019/October/BubbleShoveler/AIS_Bubble_Currency_en_US_1X._CB451228332_.jpg'
                                alt='Item 2'
                            />
                        </Item>
                        <Item>
                            <img
                                src='https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2019/October/BubbleShoveler/AIS_Bubble_SecurePayment_en_US_1X._CB451228335_.jpg'
                                alt='Item 3'
                            />
                        </Item>
                        <Item>
                            <img
                                src='https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2019/October/BubbleShoveler/AIS_Bubble_ImportFees_en_US_1X._CB451228332_.jpg'
                                alt='Item 4'
                            />
                        </Item>
                        <Item>
                            <img
                                src='https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2019/October/BubbleShoveler/AIS_Bubble_TrackPackage_en_US_1X._CB451228335_.jpg'
                                alt='Item 5'
                            />
                        </Item>
                        <Item>
                            <img
                                src='https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2019/October/BubbleShoveler/AIS_Bubble_247CS_en_US_1X._CB451228332_.jpg'
                                alt='Item 6'
                            />
                        </Item>
                        <Item>
                            <img
                                src='https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2019/October/BubbleShoveler/AIS_Bubble_247CS_en_US_1X._CB451228332_.jpg'
                                alt='Item 6'
                            />
                        </Item>
                        <Item>
                            <img
                                src='https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2019/October/BubbleShoveler/AIS_Bubble_247CS_en_US_1X._CB451228332_.jpg'
                                alt='Item 6'
                            />
                        </Item>
                        <Item>
                            <img
                                src='https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2019/October/BubbleShoveler/AIS_Bubble_247CS_en_US_1X._CB451228332_.jpg'
                                alt='Item 6'
                            />
                        </Item>
                        <Item>
                            <img
                                src='https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2019/October/BubbleShoveler/AIS_Bubble_247CS_en_US_1X._CB451228332_.jpg'
                                alt='Item 6'
                            />
                        </Item>
                        <Item>
                            <img
                                src='https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2019/October/BubbleShoveler/AIS_Bubble_247CS_en_US_1X._CB451228332_.jpg'
                                alt='Item 6'
                            />
                        </Item>
                        <Item>
                            <img
                                src='https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2019/October/BubbleShoveler/AIS_Bubble_247CS_en_US_1X._CB451228332_.jpg'
                                alt='Item 6'
                            />
                        </Item>
                        <Item>
                            <img
                                src='https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2019/October/BubbleShoveler/AIS_Bubble_247CS_en_US_1X._CB451228332_.jpg'
                                alt='Item 6'
                            />
                        </Item>
                        <Item>
                            <img
                                src='https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2019/October/BubbleShoveler/AIS_Bubble_247CS_en_US_1X._CB451228332_.jpg'
                                alt='Item 6'
                            />
                        </Item>
                    </Carousel>
                </div>
            </div>
        </div>
    );
}

export default ProductSliderWithScroll;
