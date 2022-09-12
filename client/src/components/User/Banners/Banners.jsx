import React from 'react';
import { Carousel } from '../../Basic';
import { Banner } from '../../Basic';
import { banners } from './data';

const Banners = () => {
    return (
        <Carousel show={1} infiniteLoop>
            {banners.map((banner) => (
                <Banner key={banner.id} banner={banner} />
            ))}
        </Carousel>
    );
};

export default Banners;
