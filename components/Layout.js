import React from 'react';
import { useRouter } from 'next/dist/client/router';
import Head from 'next/head';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Showcase from '../components/Showcase';

const Layout = ({ title, keyword, description, children }) => {
    const router = useRouter();
    return (
        <div>
            <Head>
                <title>{title}</title>
                <meta name="description" content={description} />
                <meta name="keyword" content={keyword} />
            </Head>
            <Navbar />
            {router.pathname === '/' ? <Showcase /> : null}
            {children}
            <Footer />
        </div>
    );
}
Layout.defaultProps = {
    title: 'CRAFT_IT',
    description: 'Crochet gift items e-shop',
    keyword: 'gift,crochet,craft'
}
export default Layout;
