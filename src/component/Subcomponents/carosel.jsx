import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel'
import loginEntryPointChat from '../../images/loginEntryPointChat.webp'
import loginEntryPointFavorite from '../../images/loginEntryPointFavorite.webp'
import loginEntryPointPost from '../../images/loginEntryPointPost.webp'
import '../../styleSheets/Header&Pagestyling.css'


class Carosel extends Component {
    render() {
        return (
            <div>
                <Carousel>
                    <Carousel.Item className='carosel_item'>
                        <div className="imgContainCarosel">
                            <img
                                className="carosel_img"
                                src={loginEntryPointChat}
                                alt="First slide"
                            />
                            <h3 className='carosel_content'>Save all your favourite items in one place</h3>
                        </div>

                    </Carousel.Item>
                    <Carousel.Item className='carosel_item'>
                        <div className="imgContainCarosel">
                            <img
                                className="carosel_img"
                                src={loginEntryPointFavorite}
                                alt="Third slide"
                            />
                            <h3 className='carosel_content'>Contact and close deal faster</h3>
                        </div>


                    </Carousel.Item>
                    <Carousel.Item className='carosel_item'>
                        <div className="imgContainCarosel">
                            <img
                                className="carosel_img"
                                src={loginEntryPointPost}
                                alt="Third slide"
                            />
                            <h3 className='carosel_content'>Help make OLX safer place to buy and sell</h3>
                        </div>

                    </Carousel.Item>
                </Carousel>
            </div>
        );
    }
}

export default Carosel;