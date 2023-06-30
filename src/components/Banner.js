import React from 'react';
import Banner1 from '../assets/images/banner/banner-1.png';
import Artwork from '../assets/images/banner/artwork.png';
import Auction from '../assets/images/banner/auction.png';
import Artist from '../assets/images/banner/artist.png';
import pro1 from '../assets/images/banner/pro1.png'
import circle from '../assets/images/banner/circle.png'
 
import '../styles/Banner.css';

const Banner = () => {
    return (
        <div className='bannerSection'>
            <div className="row mt-5">
                <div className="bannerLeft col-lg-7 col-md-6 col-sm-12">
                    <h1 className='text-uppercase mt-4'>Discover, and collect digital art nfts</h1>
                    <p>Digital marketplace for crypto collectables and non-fungible tokens(NFTs). Buy, Sell and discover exclusive digital assets.</p>
                    <button className='explore-btn'>Explore Now</button>
                    <div className="counting">
                        <img src={Artwork} alt="Artwork" />
                        <img src={Auction} alt="Auction" />
                        <img src={Artist} alt="Artist" />
                    </div>

                </div>
                <div className="bannerRight col-lg-5 col-md-6 col-sm-12">
                    <img src={Banner1} alt="Banner-1" />
                    <div className='tp'>
                        <div>
                            Abstr Gradient NFT
                        </div>

                        <div>
                            <span>
                                <img src={pro1} alt='img'/>
                            </span>
                            <span>Arkhan17</span>
                        </div>
                    </div>
                    {/* <div>
                        <img src={circle} alt=''/>
                    </div> */}
                    <div className='bt'>
                        <div>
                            <span>Current Bid</span>
                            <span>
                             0.25 ETH</span>
                        </div>
                        <div>
                            <span>Ends in</span>
                            <span>12h  43m  42s</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;