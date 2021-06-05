import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'
import PositionedPopper from './Subcomponents/AllCategory'
import '../styleSheets/Header&Pagestyling.css'

class Header extends Component {
    
    render() {
        return (
            <div className='HeaderLinksCOntainer'>
                <PositionedPopper  />
                <ul className='navlinkmain'>
                    <NavLink className="navLink" to='/Cars'>Cars</NavLink>
                    <NavLink className="navLink" to='/House'>House</NavLink>
                    <NavLink className="navLink" to='/land-and-plots'>LandAndPlots</NavLink>
                    <NavLink className="navLink" to='/mobilephones'>MobilePhone</NavLink>
                    <NavLink className="navLink" to='/motercycle'>MoterCycle</NavLink>
                    <NavLink className="navLink" to='/tablets'>Tablet</NavLink>
                    <NavLink className="navLink" to='/tv-audia-video'>Tv_Audio_Video</NavLink>

                </ul>
            </div>
        );
    }
}

export default Header;
