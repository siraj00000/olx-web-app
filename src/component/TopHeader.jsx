import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import Capture from '../images/Capture.PNG'
import "../styleSheets/TopHeader.css";
import SearhFilter from './Subcomponents/SearhFilter';
import AddIcon from '@material-ui/icons/Add';
import Login from '../component/Subcomponents/Login'
import '../styleSheets/Header&Pagestyling.css'
import { connect } from 'react-redux'


class TopHeader extends Component {




    render() {
        let userData = this.props.current_user

        return (
            <>

                <nav className="t_header  sticky-top  ">
                    <div className="container1 ">
                        <div className="row ">
                            <div className="col-sm-6 col-md-4 col-lg-3 col-xl-4 t1">
                                <div className='header_main'>
                                    <NavLink className='logo' to='/'><img src={Capture} className='logo_img' alt="" /></NavLink>
                                    <div className="header_Location_search">
                                        <i className="fa fa-search searchIcon" aria-hidden="true"></i>
                                        <input type="text" placeholder='Search city, area or locality' className='location_searchbar' />
                                        <div className="dropdown">

                                            <i className="fa fa-chevron-down alcategory Active" aria-hidden="true" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-6 col-md-5 col-lg-6 col-xl-5 t2 ">
                                <div className="se">
                                    <SearhFilter />
                                </div>
                            </div>
                            <div className="col-sm-6 col-md-3 col-lg-3 col-xl-3 t3">

                                {this.props.current_user !== null ?
                                    <div className="afterLogedIn">
                                        <div className="iconCont">
                                            <NavLink to='/ChatApp'>
                                                <i class="fa fa-comment-o t_icon" aria-hidden="true"></i>
                                            </NavLink>
                                            <i class="fa fa-bell-o t_icon" aria-hidden="true"></i>
                                            <div className="avatarCont">
                                                <img src={userData.profile} className='avatar' alt="" />
                                            </div>
                                        </div>
                                        <NavLink className='Textdeco sellText outline' to='/SignInLinkBtn'><AddIcon style={{ color: 'black', fontWeight: 'bold', fontSize: '22px' }} />Sell</NavLink>
                                    </div>
                                    :
                                    <Login />
                                }

                            </div>
                        </div>
                    </div>
                </nav>
            </>
        );
    }
}


const mapStateToProps = (state) => ({
    current_user: state.currentUser
})



export default connect(mapStateToProps, null)(TopHeader)