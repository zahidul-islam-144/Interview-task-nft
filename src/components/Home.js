import React from 'react';
import Banner from './Banner';
import CollectionFeatured from './CollectionFeatured';
import CollectionOver from './CollectionOver';
import Footer from './Footer';
import Header from './Header';
import Transaction from './Transaction';
import DiscoverNFT from './DiscoverNFT';
import CreateSellNFT from './CreateSellNFT';

const Home = () => {
    return (
        <div className=''>
            <Header/>
            <Banner/>
            <Transaction/>
            <CollectionOver/> 
            <CollectionFeatured/>
            <CreateSellNFT/>
            <DiscoverNFT/>
            <Footer/>
        </div>
    );
};

export default Home;