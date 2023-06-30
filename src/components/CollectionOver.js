import React from 'react';
import CoverImage from '../assets/images/collectionOver/coverimage.png';
import Ellipse from '../assets/images/collectionOver/ellipse95.png';
import Ethereum from '../assets/images/collectionOver/ethereum-1.png';
import Profile1 from '../assets/images/collectionOver/profile1.png';
import Profile2 from '../assets/images/collectionOver/profile2.png';
import Profile3 from '../assets/images/collectionOver/profile3.png';
import Ethereum2 from '../assets/images/collectionOver/ethereum-2.png';
import Top1 from '../assets/images/collectionOver/top1.png';
import Top2 from '../assets/images/collectionOver/top2.png';
import Top3 from '../assets/images/collectionOver/top3.png';
import Top4 from '../assets/images/collectionOver/top4.png';
import Top5 from '../assets/images/collectionOver/top5.png';
import verify from '../assets/images/collectionOver/verify.png';
import '../styles/CollectionOver.css';

const CollectionOver = () => {
    return (
        <div className='collectionOver'>
            <div className="row mt-5">
                <div className="left col-lg-4 col-md-6 col-sm-12">

                    <div className='coverImage'>
                        <img src={CoverImage} alt="Cover image" />
                    </div>

                    <div className="detailSection">
                        <div className="profileInfo">
                            <div className="profileImage">
                                <img src={Ellipse} alt="Ellipse image" />
                            </div>

                            <div className="profileName">
                                <h4>The Futr Abstr</h4>
                                <p>10 in the stock</p>
                            </div>

                            <div className="bidRatio">
                                <p>Highest Bid</p>
                                <span>
                                    <img src={Ethereum} alt="Ethereum image" />&nbsp;0.25 ETH
                                </span>
                            </div>
                        </div>
                    </div>

                </div>

                <div className="profileBid col-lg-4
                        col-md-6 col-sm-12">
                    {
                        [...Array(3)].map((item, i) =>
                            <div className="bidProfile">
                                <div className="bidProfile1">
                                    <div className="bidProImage">
                                        <img src={i === 0 ? Profile1 : (i === 1 ? Profile2 : Profile3)} alt="profile_image" />
                                    </div>
                                    <div className="bidProInfo">
                                        <h4>The Futr Abstr</h4>
                                        <div className="bidProDetails">
                                            <img src={Ellipse} alt="" />
                                            <button>
                                                <img src={Ethereum2} alt="" />
                                                0.25 ETH
                                            </button>
                                            <p>1 of 8</p>
                                        </div>
                                        <button className={`${i === 0 ? "setBlue" : "setWhite"}`}>
                                            Place a bid
                                        </button>
                                    </div>
                                </div>
                            </div>
                        )
                    }

                </div>

                <div className="right borderLeft mobile col-lg-4 col-md-6 col-sm-12 ">

                    <div className='titleBlock'>
                        <span>top collection over</span>
                        <span>last 7 days</span>
                    </div>
                    {[...Array(5)].map((item, i) =>
                        <>
                            <div className='peopleCollection'>
                                <div className='serial'>{i + 1}</div>

                                <div className='peopleImg'>
                                    <img src={i === 0 ? Top1 : (i === 1 ? Top2 : (i === 2 ? Top3 : (i === 3 ? Top4 : Top5)))} alt="People Image" />
                                    <img className='tick_icon' src={verify} alt="" />
                                </div>

                                <div className='peopleName'>
                                    <span>CryptoFunks</span>
                                    <span>19,769.39</span>
                                </div>

                                <div className='collectionPercentage'>
                                    +26.52%
                                </div>
                            </div>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
};

export default CollectionOver;