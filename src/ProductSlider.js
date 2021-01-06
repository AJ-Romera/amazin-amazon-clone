import React from 'react';
import Carousel from 'react-elastic-carousel';
import Item from './Item';
import './ProductSlider.css';

/* const breakPoints = [
    { width: 1, itemsToShow: 1, itemsToScroll: 1 },
    { width: 550, itemsToShow: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 4 },
]; */

function ProductSlider({
    title,
    titleLinkUrl,
    titleLinkText,
    img1,
    img2,
    img3,
    img4,
    img5,
    img6,
    img7,
    img8,
    img9,
    img10,
    img11,
    img12,
    link1,
    link2,
    link3,
    link4,
    link5,
    link6,
    link7,
    link8,
    link9,
    link10,
    link11,
    link12,
}) {
    return (
        <div className='productSlider'>
            <div className='productSlider__container'>
                <div className='productSlider__titleSection'>
                    <h2>{title}</h2>
                    <span>
                        <a href={titleLinkUrl}>{titleLinkText}</a>
                    </span>
                </div>
                <div className='productSlider__carouselSection'>
                    <Carousel
                        itemsToScroll={6}
                        itemsToShow={6}
                        /* breakPoints={breakPoints} */
                        pagination={false}
                        showArrows={true}
                        enableSwipe={true}
                        enableMouseSwipe={false}
                    >
                        <Item>
                            <a href={link1}>
                                <img src={img1} alt='Item 1' />
                            </a>
                        </Item>
                        <Item>
                            <a href={link2}>
                                <img src={img2} alt='Item 2' />
                            </a>
                        </Item>
                        <Item>
                            <a href={link3}>
                                <img src={img3} alt='Item 3' />
                            </a>
                        </Item>
                        <Item>
                            <a href={link4}>
                                <img src={img4} alt='Item 4' />
                            </a>
                        </Item>
                        <Item>
                            <a href={link5}>
                                <img src={img5} alt='Item 5' />
                            </a>
                        </Item>
                        <Item>
                            <a href={link6}>
                                <img src={img6} alt='Item 6' />
                            </a>
                        </Item>
                        <Item>
                            <a href={link7}>
                                <img src={img7} alt='Item 7' />
                            </a>
                        </Item>
                        <Item>
                            <a href={link8}>
                                <img src={img8} alt='Item 8' />
                            </a>
                        </Item>
                        <Item>
                            <a href={link9}>
                                <img src={img9} alt='Item 9' />
                            </a>
                        </Item>
                        <Item>
                            <a href={link10}>
                                <img src={img10} alt='Item 10' />
                            </a>
                        </Item>
                        <Item>
                            <a href={link11}>
                                <img src={img11} alt='Item 11' />
                            </a>
                        </Item>
                        <Item>
                            <a href={link12}>
                                <img src={img12} alt='Item 12' />
                            </a>
                        </Item>
                    </Carousel>
                </div>
            </div>
        </div>
    );
}

export default ProductSlider;
