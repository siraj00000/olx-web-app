import React, { Component } from 'react';
import '../../App.css'
import '../../Prop.css'
import Ad from '../../images/Ad.png'


class FrontImage extends Component {
    
    render() {
        return (
            <div>
                <div className="frontview">
                    <div className='Frontpicture'></div>
                    <div className="AdImg">
                        <img src={Ad} alt="" width='100%' />
                    </div>
                </div>
            </div>
        );
    }
}

export default FrontImage;