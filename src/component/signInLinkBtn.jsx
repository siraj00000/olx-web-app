import React, { Component } from 'react';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import Capture from '../images/Capture.PNG'
import { NavLink } from 'react-router-dom'
import PhoneIphoneIcon from '@material-ui/icons/PhoneIphone';
import DriveEtaIcon from '@material-ui/icons/DriveEta';
import MotorcycleIcon from '@material-ui/icons/Motorcycle';
import HomeWorkIcon from '@material-ui/icons/HomeWork';
import MenuBookIcon from '@material-ui/icons/MenuBook';
import Footer from '../component/Footer'
import '../App.css'
import '../Prop.css'




class SignInLinkBtn extends Component {
    render() {

        return (
            <>
                <div className="mainSellSec ">
                    <React.Fragment >
                        <CssBaseline />
                        <Container fixed >
                            <div className="section1">
                                <NavLink to='/' className='arrowstyling' ><ArrowBackIcon style={{ fontSize: 24, color: "black" }} /></NavLink>
                                <NavLink to='/' ><img src={Capture} width='50px'  alt="logo" /></NavLink>
                            </div>
                        </Container>
                    </React.Fragment>
                </div>
                <div style={{ background: '#FAFAFA' , margin: "100px 0px" }}>
                    <Container fixed style={{ background: '#FAFAFA' }}>
                        <div className="section2 ">
                            <h1 className='postNow'>POST YOUR AD</h1>
                            <div className="postSection">
                                <h1 className='CCHeading'>Choose a category</h1>



                                <div class="dropup">
                                    <div className="drop">
                                        <button class="dropbtn"><PhoneIphoneIcon /> Mobile </button>
                                    </div>
                                    <div class="dropup-content">
                                        <NavLink className='Textdeco drmenu' to='/CreateAd'> Tablet</NavLink>
                                        <NavLink className='Textdeco drmenu' to='/CreateAd'> Accessories</NavLink>
                                        <NavLink className='Textdeco drmenu' to='/CreateAd'> Mobile Phones</NavLink>
                                    </div>
                                </div>
                                <br/>
                                <div class="dropup">
                                    <div className="drop">
                                        <button class="dropbtn"><DriveEtaIcon /> Vehicals</button>
                                    </div>
                                    <div class="dropup-content">
                                        <NavLink className='Textdeco drmenu' to='/CreateAd'>  car Installments </NavLink>
                                        <NavLink className='Textdeco drmenu' to='/CreateAd'>  car perchase</NavLink>
                                        <NavLink className='Textdeco drmenu' to='/CreateAd'>  Spare Parts</NavLink>
                                    </div>
                                </div>
                                <br/>
                                <div class="dropup">
                                    <div className="drop">
                                        <button class="dropbtn"><MotorcycleIcon /> Bike </button>

                                    </div>

                                    <div class="dropup-content">
                                        <NavLink className='Textdeco drmenu' to='/CreateAd'> Bike Installments</NavLink>
                                        <NavLink className='Textdeco drmenu' to='/CreateAd'> Bike Perchase</NavLink>
                                        <NavLink className='Textdeco drmenu' to='/CreateAd'> Bike Parts</NavLink>
                                    </div>
                                </div>
                                <br/>
                                <div class="dropup">
                                    <div className="drop">
                                        <button class="dropbtn"><HomeWorkIcon /> House </button>

                                    </div>

                                    <div class="dropup-content">
                                        <NavLink className='Textdeco drmenu' to='/CreateAd'> Propert Installments</NavLink>
                                        <NavLink className='Textdeco drmenu' to='/CreateAd'> Propert Perchase</NavLink>
                                        <NavLink className='Textdeco drmenu' to='/CreateAd'> Propert Sell </NavLink>
                                    </div>
                                </div>
                                <br/>

                                <div class="dropup">
                                    <div className="drop">
                                        <button class="dropbtn"><MenuBookIcon /> Books </button>

                                    </div>

                                    <div class="dropup-content">
                                        <NavLink className='Textdeco drmenu' to='/CreateAd'> Biology</NavLink>
                                        <NavLink className='Textdeco drmenu' to='/CreateAd'> Chemistry</NavLink>
                                        <NavLink className='Textdeco drmenu' to='/CreateAd'> Physics</NavLink>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Container>
                </div>
                <Footer />
            </>
        );
    }
}

export default SignInLinkBtn;




{/* <Typography component="div" style={{ backgroundColor: '#cfe8fc', height: '100vh' }} /> */ }