import React, { Component } from 'react';
import FeaturedProduct from '../../component/FeaturedProduct';
import Header from '../../component/Header'
import Footer from '../../component/Footer'
import  TopHeader  from '../../component/TopHeader'
import '../../styleSheets/ProductStyling.css'
import Drawer from "../../component/Drawer";

class Cars extends Component {
    render() {
        return (
            <div>
                <TopHeader />
                <Header />
                <div className="drawer">
                    <h5 className='product_top_title'>Cars</h5>
                    <div className="pageStyle">
                        <div className="drawer_container">
                            <h4 className='filter_class'>Filters</h4>
                            <Drawer
                                category='cars'
                                Location='Pakistan' 
                            />
                        </div>
                        <FeaturedProduct />

                    </div>
                </div>
                <Footer/>
            </div>
        );
    }
}

export default Cars;