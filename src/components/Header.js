import React, { useEffect, useState } from 'react';
import Logo from '../assets/images/nfters-logo.png';
import { navItems } from '../utilities/Header';
import { FiSearch } from "react-icons/fi";
import { GiHamburgerMenu } from 'react-icons/gi'
import { GrClose } from 'react-icons/gr'
import '../styles/Header.css'


const Header = () => {
    const [isShow, setIsShow] = useState(false);
    const [getWidth, setGetWidth] = useState(window.innerWidth)

    useEffect(() => {
        window.addEventListener('resize', ()=> setGetWidth(window.innerWidth));

        // componentWillUnmount
        return (() => {
            window.removeEventListener('resize', ()=> setGetWidth(window.innerWidth));
        })
    },[getWidth]);

    return (
        <>
            <div className='headerSection'>
                <div className='leftBlock'>
                    <div className='logo'>
                        <img src={Logo} alt="Logo" />
                    </div>
                    <div className='navItems'>
                        <ul>
                        {
                            navItems.map((item, i) => <li>{item.itemName}</li>)
                        }
                        </ul>
                    </div>
                </div>

                <div className='rightBlock'>
                    <div className="searchBar">
                        <input className='searchField' placeholder='Search' />
                        <span className='icon'><FiSearch /></span>
                    </div>

                    <div className='uploadBtn'>Upload</div>
                    <div className='connectBtn'>Connect Wallet</div>
                </div>

                <div className='hamBurgerMenu' onClick={() => setIsShow
                    (!isShow)}>
                    {
                        isShow ? <GrClose /> : <GiHamburgerMenu />
                    }
                </div>
            </div>

            {isShow && getWidth <= 991 &&
                <div className='mobileViewNav'>
                    <div className='navItems'>
                        <ul>
                        {
                            navItems.map((item, i) => <li>{item.itemName}</li>)
                        }
                        </ul>
                    </div>

                    <div className='rightBlock'>
                    {/* <div className="searchBar">
                        <input className='searchField' placeholder='Search' />
                        <span className='icon'><FiSearch /></span>
                    </div> */}

                    <div className='uploadBtn'>Upload</div>
                    <div className='connectBtn mobile'>Connect Wallet</div>
                </div>
                </div>
            }
        </>
    );
};

export default Header;