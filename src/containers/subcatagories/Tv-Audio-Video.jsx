import React, { Component } from 'react';
import Header from '../../component/Header'
import TopHeader from '../../component/TopHeader'
import Drawer from "../../component/Drawer";
import Footer from '../../component/Footer'
import FeaturedProduct from '../../component/FeaturedProduct';

class Tv_Audio_Video extends Component {
    render() {
        return (
            <div>
                <TopHeader />
                <Header />
                <div className="drawer">
                    <h5 className='product_top_title'>Tv Audio Video</h5>
                    <div className="pageStyle">
                        <div className="drawer_container">
                            <h4 className='filter_class'>Filters</h4>
                            <Drawer
                                category='Land And Property'
                                Location='Pakistan'
                            />
                        </div>
                        <FeaturedProduct />

                    </div>
                </div>
                <Footer />
            </div>
        );
    }
}

export default Tv_Audio_Video;