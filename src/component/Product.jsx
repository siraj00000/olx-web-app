import React, { Component } from 'react';
import '../styleSheets/ProductStyling.css'

class Product extends Component {
    
    render() {
        return (
            <>
                <div className='product' >
                    <div className="productImageContainer">
                        <img src={this.props.image} className='product_image' alt='product' />
                    </div>
                    <div className="product_pricing">
                        <h3 className='product_price' >Rs {this.props.price}</h3>
                        <h4 className='product_title'>{this.props.title}</h4>
                        <p className='product_description'>{this.props.discription}</p>
                    </div>
                </div>

            </>
        );
    }
}




export default Product;