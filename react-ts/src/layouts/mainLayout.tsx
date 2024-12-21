import React from 'react';
import Header from '../components/header';
import Footer from '../components/footer'
import PostFooterSection from '../components/postFooter'
import CopyWrite from '../components/copyWrite'
import ScrollToTopButton from '../components/scrollToTop'
import { Outlet } from 'react-router-dom';

const MainLayout: React.FC = () => {
    return (
        <div>
            <Header />
            <main>
                <Outlet />
            </main>
            <Footer />
            <PostFooterSection />
            <CopyWrite />
            <ScrollToTopButton />
        </div>
    );
};

export default MainLayout;
