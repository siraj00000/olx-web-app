import React, { Component } from 'react';
import '../App.css'
import '../Prop.css'
import { NavLink } from 'react-router-dom'
import playstore_2x from '../images/playstore_2x.webp'
import appstore_2x from '../images/appstore_2x.webp'
import FacebookIcon from '@material-ui/icons/Facebook';

class Footer extends Component {
    render() {
        return (
            <>
                <div className='footer flex'>
                    <div className="footermenuContainer">
                        <h1 className='footerheading'>POPULAR CATEGORIES</h1>
                        <ul className='ulfooterMenu'>
                            <NavLink className="footerMenu " to='/Cars'>Cars</NavLink>
                            <NavLink className="footerMenu " to='/House'>House</NavLink>
                            <NavLink className="footerMenu " to='/LandAndPlots'>LandAndPlots</NavLink>
                            <NavLink className="footerMenu " to='/MobilePhone'>MobilePhone</NavLink>
                            <NavLink className="footerMenu " to='/MoterCycle'>MoterCycle</NavLink>
                            <NavLink className="footerMenu " to='/Tablet'>Tablet</NavLink>
                            <NavLink className="footerMenu " to='/Tv_Audio_Video'>Tv_Audio_Video</NavLink>

                        </ul>
                    </div>
                    <div className="footermenuContainer">
                        <h1 className='footerheading'>TRENDING SEARCHES</h1>
                        <ul className='ulfooterMenu'>
                            <NavLink className="footerMenu " to='/Cars'>Cars</NavLink>
                            <NavLink className="footerMenu " to='/House'>House</NavLink>
                            <NavLink className="footerMenu " to='/LandAndPlots'>LandAndPlots</NavLink>
                            <NavLink className="footerMenu " to='/MobilePhone'>MobilePhone</NavLink>
                            <NavLink className="footerMenu " to='/MoterCycle'>MoterCycle</NavLink>
                            <NavLink className="footerMenu " to='/Tablet'>Tablet</NavLink>
                            <NavLink className="footerMenu " to='/Tv_Audio_Video'>Tv_Audio_Video</NavLink>

                        </ul>
                    </div>
                    <div className="footermenuContainer">
                        <h1 className='footerheading'>ABOUT US</h1>
                        <ul className='ulfooterMenu'>
                            <NavLink className="footerMenu " to='/Cars'>Cars</NavLink>
                            <NavLink className="footerMenu " to='/House'>House</NavLink>
                            <NavLink className="footerMenu " to='/LandAndPlots'>LandAndPlots</NavLink>
                            <NavLink className="footerMenu " to='/MobilePhone'>MobilePhone</NavLink>
                            <NavLink className="footerMenu " to='/MoterCycle'>MoterCycle</NavLink>
                            <NavLink className="footerMenu " to='/Tablet'>Tablet</NavLink>
                            <NavLink className="footerMenu " to='/Tv_Audio_Video'>Tv_Audio_Video</NavLink>

                        </ul>
                    </div>
                    <div className="footermenuContainer">
                        <h1 className='footerheading'>OLX</h1>
                        <ul className='ulfooterMenu'>
                            <NavLink className="footerMenu " to='/Cars'>Cars</NavLink>
                            <NavLink className="footerMenu " to='/House'>House</NavLink>
                            <NavLink className="footerMenu " to='/LandAndPlots'>LandAndPlots</NavLink>
                            <NavLink className="footerMenu " to='/MobilePhone'>MobilePhone</NavLink>
                            <NavLink className="footerMenu " to='/MoterCycle'>MoterCycle</NavLink>
                            <NavLink className="footerMenu " to='/Tablet'>Tablet</NavLink>
                            <NavLink className="footerMenu " to='/Tv_Audio_Video'>Tv_Audio_Video</NavLink>

                        </ul>
                    </div>
                    <div className="footermenuContainer">
                        <h1 className='footerheading mb'>FOLLOW US
                        <div className="linkSocialIcon flex">
                                <FacebookIcon />
                                <FacebookIcon />
                                <FacebookIcon />
                                <FacebookIcon />
                            </div>
                        </h1>

                        <ul className='ulfooterMenu'>

                            <div className="flex">
                                <div className="btndiv">
                                    <a href='https://apps.apple.com/pk/app/olx-pakistan/id1119081665?utm_source=desktop_ios&utm_medium=home_banner&utm_campaign=home' target='_blank'>
                                        <img src={appstore_2x} className='AppleStore' alt="" />
                                    </a>
                                    <a href="https://play.google.com/store/apps/details?id=com.olx.pk&utm_source=desktop_android&utm_medium=home_banner&utm_campaign=home" target="_blank" rel="noopener noreferrer">
                                        <img src={playstore_2x} className='PlayStore' alt="" />
                                    </a>
                                </div>

                            </div>
                        </ul>
                    </div>
                </div>
                <div className="copyRigh_footer">
                    <div className="contantContainer">
                        <div className="sectionFooter_la">
                            <span>Free Classifieds in Pakistan</span>.© 2006-2020 OLX
                        </div>
                        <div className="sectionFooter_last">
                            <span>Other Countries</span> <a href="https://www.olx.in/" target="_blank" rel="noopener noreferrer" className="_2XmAi" data-aut-id>India</a> - <a href="https://www.olx.co.za/" target="_blank" rel="noopener noreferrer" className="_2XmAi" data-aut-id>South Africa</a> - <a href="https://www.olx.co.id/" target="_blank" rel="noopener noreferrer" className="_2XmAi" data-aut-id>Indonesia</a>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default Footer;