import React, { Component } from 'react';
import Home from '../containers/Home'
import TopHeader from '../component/TopHeader'
import CreateAd  from "../component/CreateAd";
import SignInLinkBtn from '../component/signInLinkBtn'
import Cars from '../containers/subcatagories/Cars'
import House from '../containers/subcatagories/House'
import LandAndPlots from '../containers/subcatagories/Land&Plots'
import MobilePhone from '../containers/subcatagories/MobilePhone'
import MoterCycle from '../containers/subcatagories/MoterCycle'
import Tablet from '../containers/subcatagories/Tablet'
import Tv_Audio_Video from '../containers/subcatagories/Tv-Audio-Video'
import FeaturedProduct from '../component/FeaturedProduct'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import TestingStore from '../component/TestingStore'
import ChatApp from '../containers/chatApp';

class AppRouter extends Component {
    render() {
        return (
            <div>
                <Router>
                    <Switch>

                        <Route exact path='/' component={Home} />
                        <Route exact path='/SignInLinkBtn' component={SignInLinkBtn} />
                        <Route exact path='/CreateAd' component={CreateAd} />
                        <Route exact path='/TopHeader' component={TopHeader} />
                        <Route exact path='/cars' component={Cars} />
                        <Route exact path='/house' component={House} />
                        <Route exact path='/land-and-plots' component={LandAndPlots} />
                        <Route exact path='/mobilephones' component={MobilePhone} />
                        <Route exact path='/motercycle' component={MoterCycle} />
                        <Route exact path='/tablets' component={Tablet} />
                        <Route exact path='/tv-audia-video' component={Tv_Audio_Video} />
                        <Route exact path='/featured-product' component={FeaturedProduct} />
                        <Route exact path='/TestingStore' component={TestingStore} />
                        <Route exact path='/ChatApp' component={ChatApp} />
                        
                        
                    </Switch>
                </Router>


            </div>
        );
    }
}

export default AppRouter;


