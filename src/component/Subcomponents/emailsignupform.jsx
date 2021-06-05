import React, { Component } from 'react';
import '../../styleSheets/Header&Pagestyling.css'
import firebase from 'firebase'
import OlXLogo from '../../images/OlXLogo.png'
class Emailsignupform extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            email: '',
            password: '',
            error: ''
        }
    }
    signInbtn = () => {
        let email = this.state.email;
        let password = this.state.password


        console.log(email, '</br>', password)
        firebase.auth().createUserWithEmailAndPassword(email, password)
            .then((result) => {
                console.log(result)
            })
            .catch(function (error) {
                // Handle Errors here.
                // let errorCode = error.code;
                let errorMessage = error.message;
                alert(errorMessage)

            })
            this.setState({
                email: '',
                password: ''  
            })
    }

    render() {
        const { email, password } = this.state
        return (
            <div>
                <div className="section_email_auth">
                    <div className="olx_logo_container">
                        <img src={OlXLogo} className='olx_logo_email_login' alt="" />
                        <br />
                    </div>
                    <form >
                        <h3 className='signup_heading'>Enter your Email & password</h3>
                        <input type="email"
                            name='email'
                            placeholder='Youe Email..'
                            value={email}
                            className='email_auth_textfield'
                            onChange={e => this.setState({ email: e.target.value })}
                        />
                        <br />
                        <input type="password"
                            placeholder='Your Password..'
                            value={password}
                            className='email_auth_textfield'
                            onChange={e => this.setState({ password: e.target.value })}
                        />
                        <br />
                        <button type='button' className='signUp_btn' onClick={this.signInbtn} >Next</button>
                        <br />
                        <span className='signUp_info_text'>We won't reveal your email to anyone else nor use it to send you spam</span>
                    </form>
                </div>
            </div>
        );
    }
}


class PhoneAuthSignUp extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            phoneNumber: ''
        }
    }

    setUpRecaptcha = () => {
        window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('recaptcha_container', {
            // 'size': 'invisible',
            'callback': function (response) {
                // reCAPTCHA solved, allow signInWithPhoneNumber.
                this.onSignInSubmit();
                
            }
        });
        
    }

    onSignInSubmit = (e) => {
        e.preventDefault();
        this.setUpRecaptcha()
        var phoneNumber = this.state.phoneNumber;
        var appVerifier = window.recaptchaVerifier;
        firebase.auth().signInWithPhoneNumber(phoneNumber, appVerifier)
            .then(function (confirmationResult) {
                // SMS sent. Prompt user to type the code from the message, then sign the
                // user in with confirmationResult.confirm(code).
                window.confirmationResult = confirmationResult;
                var code = window.prompt('enter OTP here');
                confirmationResult.confirm(code).then(function (result) {
                    // User signed in successfully.
                    var user = result.user;
                    console.log('user==>', user)
                    // ...
                }).catch(function (error) {
                    alert(error)
                    // User couldn't sign in (bad verification code?)
                    // ...
                });
            }).catch(function (error) {
                alert(error)

                // Error; SMS not sent
                // ...
            });
            
    }

    render() {
        const { phoneNumber } = this.state
        return (
            <div className="section_email_auth">
                <div className="olx_logo_container">
                    <img src={OlXLogo} className='olx_logo_email_login' alt="" />
                    <br />
                </div>
                <form onSubmit={this.onSignInSubmit}>
                    <h3 className='signup_heading'>Enter Your Phone Number</h3>
                    <input type="number"
                        // name='phone number'
                        placeholder='+92 Your phone number..'
                        value={phoneNumber}
                        className='email_auth_textfield'
                        name='phone'
                        onChange={e => this.setState({ phoneNumber: e.target.value })}
                    />


                    <br />
                    <button type='submit' className='signUp_btn'  >Next</button>
                    <br />
                    <div className="recaptcha" id='recaptcha_container'></div>
                    <br/>
                    <span className='signUp_info_text'>We won't reveal your email to anyone else nor use it to send you spam</span>
                </form>
            </div>
        );
    }
}




export {
    Emailsignupform,
    PhoneAuthSignUp
}