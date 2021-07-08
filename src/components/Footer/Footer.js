import React from 'react'

import './Footer.css';
import logo2 from './estiemWhiteCompress.png';

function Footer() {
    return (
        <div className="footer-container">

            <div className="footer-links">

                <div className="footer-logo">
                    <a href="/">
                <img src={logo2} alt="logo2"/>
                    </a>
                </div>

                <div className="footer-links-wrapper">

                    <div className="footer-links-items">
                        <h3>Social</h3>
                        
                            <div><a href="https://www.linkedin.com/company/estiem-lg-sofia/" rel="noopener noreferrer" target="_blank">LinkedIn </a></div>
                            <div><a href="https://www.instagram.com/estiemlgsofia/?hl=bg" rel="noopener noreferrer" target="_blank">Instagram </a></div>
                        <a href="https://www.facebook.com/ESTIEM.Sofia/" rel="noopener noreferrer" target="_blank">Facebook</a> 
                    </div>

                    <div className="footer-links-items">
                        <h3>Contacts</h3>
                        <p>
                            <div><a href="https://goo.gl/maps/JvSWveXD8nLjPX1K8" rel="noopener noreferrer" target="_blank">
                                Adress: Faculty of Economics,bul."St.Kliment Ohridski" 8, 1756, Sofia
                                </a></div>
                        </p>
                    </div>
                </div>    
                
            </div>
            <section className="social-media">
                <div className="social-media-wrap">
                        <div className="website-rights">
                            COPYRIGHT © ESTIEM LG SOFIA
                        </div>

                        <div className="social-media-icons">
                            <a href="https://www.facebook.com/ESTIEM.Sofia" rel="noopener noreferrer" target="_blank"><i class="fab fa-facebook"></i></a>
                            <a href="https://www.instagram.com/estiemlgsofia/?hl=bg" rel="noopener noreferrer" target="_blank"><i class="fab fa-instagram"></i></a>
                            <a href= "https://www.linkedin.com/company/estiem-lg-sofia/mycompany/" rel="noopener noreferrer" ><i class="fab fa-linkedin"></i></a>
                        </div>
                </div>
                
            </section>
        </div>
    )
}


export default Footer
