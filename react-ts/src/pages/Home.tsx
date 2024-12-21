import React from 'react';
import Announcements from '../components/announcements'
import Carousel from '../components/carousel'
import NewsAndSidebar from '../components/newsSidebar'
import PromotionalBanners from '../components/promotionalBanners'

const Home: React.FC = () => {
    return (
        <>
            <Announcements />
            <Carousel />
            <NewsAndSidebar />
            <PromotionalBanners />
        </>
    );
};

export default Home;
