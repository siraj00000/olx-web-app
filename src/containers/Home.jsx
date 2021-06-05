import React, { Component } from 'react';
import TopHeader from '../component/TopHeader'
import Header from '../component/Header'
import FrontImage from '../component/Subcomponents/FrontImage';
import Footer from '../component/Footer'
import FeaturedProduct from '../component/FeaturedProduct'
import StoreLink from '../component/Subcomponents/StoreLink';
import '../styleSheets/Header&Pagestyling.css'


class Home extends Component {
    render() {
        let history = this.props.history
        return (
            <div className='home_page_body'>
                <TopHeader />
                <Header />
                <FrontImage />
                <FeaturedProduct Link={history} />
                <StoreLink />
                <Footer />
            </div>
        );
    }
}

export default Home