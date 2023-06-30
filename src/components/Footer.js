import React from 'react';
import Logo from '../assets/images/nfters-logo.png';
import { socialLinks, marketPlaceItems, accountItems } from '../utilities/Footer';
import '../styles/Footer.css';

const Footer = () => {
    return (
        <div className='footerSection'>
            <div className="row mt-5">
                <div className="menu col-lg-4 col-md-6 col-sm-12">
                    <div className="sectionOne">
                        <img src={Logo} alt="Logo" />
                        <p className='mt-2 companyDetails'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi ipsam repellendus officiis non incidunt. Reprehenderit provident.</p>
                        <div className="socialLink">
                            {
                                socialLinks.map((link, i) =>
                                    <a href={link.url} key={i}>
                                        <img src={link.siteName} alt={link.siteName} />
                                    </a>
                                )
                            }
                        </div>
                    </div>
                </div>
                <div className="menu col-lg-2 col-md-6 col-sm-12">
                    <div className="sectionTwo">
                        <h6>Market Place</h6>
                        <ul>
                            {
                                marketPlaceItems.map((item, i) =>
                                    <li key={i}>
                                        <a href="#">{item.title}</a>
                                    </li>)
                            }
                        </ul>
                    </div>
                </div>
                <div className="menu col-lg-2 col-md-6 col-sm-12">
                    <div className="sectionThree">
                        <h6>My Account</h6>
                        <ul>
                            {
                                accountItems.map((item, i) =>
                                    <li key={i}>
                                        <a href="#">{item.title}</a>
                                    </li>)
                            }
                        </ul>
                    </div>
                </div>
                <div className="menu col-lg-4 col-md-6 col-sm-12">
                    <div className="sectionTour">
                        <h6>Stay In The Loop</h6>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Soluta, fuga ut libero tenetur harum recusandae quidem fugit aut. In error molestiae earum delectus doloremque accusamus.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;