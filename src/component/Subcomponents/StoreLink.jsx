import React, { Component } from 'react';
import playstore_2x from '../../images/playstore_2x.webp'
import appstore_2x from '../../images/appstore_2x.webp'
import phoneapp from '../../images/phoneapp.webp'
import '../../App.css'
import '../../Prop.css'

class StoreLink extends Component {
    render() {
        return (
            <div>
                <div className="storeLinks ">
                    <img src={phoneapp} alt="" className='imgapp' />
                    <div className="linkText ">
                        <h1 className='textHeading'>TRY THE OLX APP</h1>
                        <span className='textspan'>Buy, sell and find just about anything using the app on your mobile.</span>
                    </div>
                    <div className="linkBtn block">
                        <span>Get your app today</span>
                        <div className="btndiv">
                            <a href='https://apps.apple.com/pk/app/olx-pakistan/id1119081665?utm_source=desktop_ios&utm_medium=home_banner&utm_campaign=home' target='_blank' >
                                <img src={appstore_2x} className='AppleStore' alt="" />
                            </a>
                            <a href="https://play.google.com/store/apps/details?id=com.olx.pk&utm_source=desktop_android&utm_medium=home_banner&utm_campaign=home" target="_blank" rel="noopener noreferrer">
                                <img src={playstore_2x} className='PlayStore' alt="" />
                            </a>
                        </div>

                    </div>
                </div>
            </div>
        );
    }
}

export default StoreLink;