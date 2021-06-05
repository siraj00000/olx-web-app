import React, { Component } from 'react';
import { connect } from 'react-redux'
import '../App.css'
import '../styleSheets/Header&Pagestyling.css'
import {FbAuth , GoogleAuth} from '../store/action/action'

class AuthButton extends Component {
    render() {

        console.log(this.props.currentUser);
        return (
            <div>
                <button className='logInbtn email_auth_btn'  onClick={()=> this.props.FbAuth()}>Continue with Facebook</button>
                <br/>
                <button className='logInbtn email_auth_btn'  onClick={()=> this.props.GoogleAuth()}>Continue with Google</button>

            </div>
        );
    }
}



const mapStateToProps = (state) => ({
    users: state.set_state,
    currentUser: state.currentUser
})

const mapDispatchToProps = (dispatch) => ({
    GoogleAuth: ()=>dispatch(GoogleAuth()),
    FbAuth: ()=>dispatch(FbAuth()),
})

export default connect(mapStateToProps, mapDispatchToProps)(AuthButton);
