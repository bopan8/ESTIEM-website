import React, { Component } from 'react';
import { MenuItems } from "./MenuItems";
import './Navbar.css';
import logo2 from './whiteCircleX75.png';

class Navbar extends Component{
    //chek for clicking
    state = { clicked: false };
    //function for clicking
    handleClick = () => {
        this.setState({ clicked : !this.state.clicked });
    }

    render(){
        return(
            <nav className="NavbarItems">
                <a href="/">
                    <img src={logo2} alt="logo"/>
                </a>
                <hr className="under"></hr> 
                    <div className="menu-icon" onClick={this.handleClick}>
                        <i className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
                    </div>
                    <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
                        {MenuItems.map((item,index) => {
                            return(
                                <li key={index}> 
                                    <a className={item.cName} href={item.url}>
                                    {item.title}
                                    </a>
                                </li>
                            )
                        })}
                    </ul>
                <div className="social-media-icons">
                            <a href="https://www.facebook.com/ESTIEM.Sofia" rel="noopener noreferrer" target="_blank"><i class="fab fa-facebook"></i></a>
                            <a href="https://www.instagram.com/estiemlgsofia/?hl=bg" rel="noopener noreferrer" target="_blank"><i class="fab fa-instagram"></i></a>
                            <a href="https://www.linkedin.com/company/estiem-lg-sofia/mycompany/" rel="noopener noreferrer" target="_blank"><i class="fab fa-linkedin"></i></a>
                        </div>
            </nav>
        )
    }
}

export default Navbar;