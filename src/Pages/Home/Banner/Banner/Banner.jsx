import React from 'react';
import img1 from '../../../../asset/images/banner/car-banner1.jpg';
import img2 from '../../../../asset/images/banner/car-banner2.jpg';
import img3 from '../../../../asset/images/banner/car-banner3.jpg';
import img4 from '../../../../asset/images/banner/car-banner4.jpg';
import Carousel from '../Carousel/Carousel';

const Banner = () => {
    const bannerData = [
        {
            id: 1,
            prev: 4,
            next: 2,
            image: img1
        },
        {
            id: 2,
            prev: 1,
            next: 3,
            image: img2
        },
        {
            id: 3,
            prev: 2,
            next: 4,
            image: img3
        },
        {
            id: 4,
            prev: 3,
            next: 1,
            image: img4
        }
    ]
    return (
        <div className="carousel w-full">
            {
                bannerData.map(slide => <Carousel
                    key={slide.id}
                    slide={slide}
                />)
            }
        </div>
    );
};

export default Banner;