import React, { Component } from 'react';
import Product from './Product'
import firebase from '../config/Firebase'
import '../styleSheets/ProductStyling.css'
import OlX from '../images/OlX.png'



class FeaturedProduct extends Component {
    constructor(props, context) {
        super(props, context);
        console.log(props)
        this.state = {
            productdetail: [{
                title: 'OLX',
                discription: 'OLX website build by SIRAJ AHMED',
                price: "Sir Ali Mughal's Vision Must Be Successful",
                getkey: '',
                url: OlX,
                id: ''
            }],
            
        }
    }




    componentDidMount() {
        firebase.database().ref('Product/key').on('child_added', (data, id) => {
            let getId = id
            let getkey = data.val()
            let getTitle = data.val().title
            let getDes = data.val().discription
            let getPrice = data.val().price
            let getUrl = data.val().url

            this.setState({
                productdetail: [
                    ...this.state.productdetail,
                    {
                        title: getTitle,
                        discription: getDes,
                        price: getPrice,
                        getkey: getkey,
                        url: getUrl,
                        id: getId
                    },
                ]
            })
        })
    }


    render() {
        const { productdetail } = this.state
        // console.log(this.props);
        return (

            <div className='productsContainer' >
                {
                    productdetail.map((v, i) => {
                        return (
                            <div className="productCard" key={i}>
                                <Product
                                    key={i}
                                    image={v.url}
                                    price={v.price}
                                    title={v.title}
                                    discription={v.discription}
                                    link={this.props.Link}
                                    allValues={v.id}
                                />

                            </div>
                        )
                    })
                }

            </div>

        );
    }
}

export default FeaturedProduct;