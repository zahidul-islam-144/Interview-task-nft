import React from "react";
import "../styles/CreateSellNFT.css";
import thumb3 from '../assets/images/createSellNft/thumb3.png';
import thumbProfile1 from '../assets/images/createSellNft/thumbProfile1.png';
import thumbProfile3 from '../assets/images/createSellNft/thumbProfile3.png';

const CreateSellNFT = () => {
  return (
    <div className="create_sell_nft_main">
      <div className="first_col">
        <div className="thumb_block">
          <div className="thumb1">
            <div>
                <img src={thumbProfile1} alt='thumb-img'/> 
                <span className="thumbProfile">
                    <img src={thumbProfile3} alt='thumb-profile'/>
                </span>
            </div>   
          </div>
          <div className="thumb2">
            <div>
                <img src={thumbProfile1} alt='thumb-img'/>
                <span className="thumbProfile">
                    <img src={thumbProfile3} alt='thumb-profile'/>
                </span>
            </div>
          </div>
        </div>
        <div className="thumb3">
            <div>
                <img src={thumb3} alt='thumb-img'/>
                <span className="thumbProfile">
                    <img src={thumbProfile3} alt='thumb-profile'/>
                </span>
            </div>
        </div>
      </div>

      <div className="second_col">
        <div className="title">Create and sell your NFTs</div>
        <div className="text_contents">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisi ac
          phasellus placerat a pellentesque tellus sed egestas. Et tristique
          dictum sit tristique sed non. Lacinia lorem id consectetur pretium
          diam ut. Pellentesque eu sit blandit fringilla risus faucibus.
        </div>
        <div className="signUp_btn">Sign Up Now</div>
      </div>
    </div>
  );
};

export default CreateSellNFT;
