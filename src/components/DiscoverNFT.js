import React from "react";
import { BsFilter } from "react-icons/bs";
import "../styles/DiscoverNFT.css";
import { discoverHeaderItems, discovrStackItems } from "../utilities/items";
import img1 from "../assets/images/discover/img1.png";
import Ethereum2 from '../assets/images/collectionOver/ethereum-2.png';
import person1 from "../assets/images/discover/person1.png";
import person2 from "../assets/images/discover/person2.png";
import person3 from "../assets/images/discover/person3.png";
import person4 from "../assets/images/discover/person4.png";

const DiscoverNFT = () => {
  return (
    <div className="discoverNFT_main">
      <h2>discover more nfts</h2>

      <div className="discover_header">
        <div className="left_block">
          <ul>
            {discoverHeaderItems.map((item, i) => (
              <li className={`${1 === item.id ? 'active' : ''} `}>{item?.item}</li>
            ))}
          </ul>
        </div>

        <div className="right_block_filter">
          <BsFilter className="filter_icon"/>
          all filters
        </div>
      </div>

      <div className="discover_cards">
        {discovrStackItems.map((item) => (
          <div className="single_card">
            <div className="img_block">
              <img src={img1} alt="banner-img" />
              <div className="stack">
                {[...Array(4)].map((item, i) => (
                  <div className="single_person person1">
                    <img src={i+1 === 1 ? person1 : i+1 === 2 ? person2 : i+1 === 3 ? person3 : person4} alt="profile-img" />
                  </div>
                ))}
              </div>
            </div>
            <div className="card_footer">
              <h5>{item?.title}</h5>
              <div>
                <span className="etherium">
                  <img src={Ethereum2} alt='Ethereum2'/>&nbsp;
                  0.25 ETH
                </span>
                <span className="pages">1 of 321</span>
              </div>
              <div className="last_child">
                <span>3h 50m 2s left</span>
                <span>Place a bid</span>
              </div>
            </div>
          </div>
        ))}
       
      </div>
      <div className="more_nft_button">More NFTs</div>
    </div>
  );
};

export default DiscoverNFT;
