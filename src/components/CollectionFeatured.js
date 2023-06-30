import React from 'react';
import Cover1 from '../assets/images/collectionFeatured/cover1.png';
import Cover2 from '../assets/images/collectionFeatured/cover2.png';
import Cover3 from '../assets/images/collectionFeatured/cover3.png';
import Ellipse from '../assets/images/collectionFeatured/ellipse95.png';
import Cover1Pro1 from '../assets/images/collectionFeatured/cover1Pro1.png';
import Cover1Pro2 from '../assets/images/collectionFeatured/cover1Pro2.png';
import Cover1Pro3 from '../assets/images/collectionFeatured/cover1Pro3.png';
import Cover2Pro3 from '../assets/images/collectionFeatured/cover2Pro3.png';
import Cover3Pro1 from '../assets/images/collectionFeatured/cover3Pro1.png';
import Cover3Pro2 from '../assets/images/collectionFeatured/cover3Pro2.png';
import '../styles/CollectionFeatured.css';

const CollectionFeatured = () => {
    return (
        <div className='collectionFeatured'>
            <h2 className='text-uppercase mt-5 mb-4'>Collection Featured NFTS</h2>
            <div className="row">
                 <div className="col-lg-4 col-md-6 col-sm-12">
                    <div className="coverOne">
                        <div className="coverDetails">
                            <img src={Cover1} alt="Cover One" />
                        </div>
                        <div className="profileDetails">
                            {
                                [...Array(3)].map((item,i) => 
                                <div className="featureProfile">
                                    <img src={i === 0 ? Cover1Pro1 : (i === 1 ? Cover1Pro2 : Cover1Pro3)} alt="Profile image" />
                                </div>
                                )
                            }
                            
                        </div>
                        
                    </div>
                    <h5 className='mt-2'>Amazing Collection</h5>
                    <div className="detailSection mt-3">
                        <div className="profileInfo">
                            <div className="profileImage">
                                <img src={Ellipse} alt="Profile image" />
                            </div>
                            <div className="profileName">
                                <p>by Arkhan</p>
                            </div>
                        </div>
                        <div className="itemBtn">
                            <button>Total 54 items</button>
                        </div>
                    </div>
                 </div>

                 <div className="col-lg-4 col-md-6 col-sm-12">
                    <div className="coverTwo">
                            <div className="coverDetails">
                                <img src={Cover2} alt="Cover Two" />
                            </div>
                            <div className="profileDetails">
                                {
                                    [...Array(3)].map((item,i) => 
                                    <div className="featureProfile">
                                        <img src={i === 0 ? Cover1Pro2 : (i === 1 ? Cover1Pro1 : Cover2Pro3)} alt="Profile img" />
                                    </div>
                                    )
                                }
                                
                            </div>
                            
                        </div>

                        <h5 className='mt-2'>Amazing Collection</h5>
                        
                        <div className="detailSection mt-3">
                            <div className="profileInfo">
                                <div className="profileImage">
                                    <img src={Ellipse} alt="Profile ig" />
                                </div>
                                <div className="profileName">
                                    <p>by Arkhan</p>
                                </div>
                            </div>
                            <div className="itemBtn">
                                <button>Total 54 items</button>
                            </div>
                        </div>
                 </div>

                 <div className="col-lg-4 col-md-6 col-sm-12">
                    <div className="coverThree">
                            <div className="coverDetails">
                                <img src={Cover3} alt="Cover Three" />
                            </div>
                            <div className="profileDetails">
                                {
                                    [...Array(3)].map((item,i) => 
                                    <div className="featureProfile">
                                        <img src={i === 0 ? Cover3Pro1 : (i === 1 ? Cover3Pro2 : Cover1Pro1)} alt="Profile img" />
                                    </div>
                                    )
                                }
                                
                            </div>
                            
                        </div>
                        
                        <h5 className='mt-2'>Amazing Collection</h5>
                        <div className="detailSection mt-3">
                            <div className="profileInfo">
                                <div className="profileImage">
                                    <img src={Ellipse} alt="Profile_img" />
                                </div>
                                <div className="profileName">
                                    <p>by Arkhan</p>
                                </div>
                            </div>
                            <div className="itemBtn">
                                <button>Total 54 items</button>
                            </div>
                        </div>
                 </div>
            </div>
        </div>
    );
};

export default CollectionFeatured;