import React from 'react'
// import Header from '../component/Header'
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import Capture from '../images/Capture.PNG'
import { NavLink } from 'react-router-dom'
import AddAPhotoIcon from '@material-ui/icons/AddAPhoto';
import firebase from '../config/Firebase'
import { storage } from '../config/Firebase'
import uploadImageCopy from '../images/uploadImageCopy.png'
import { connect } from 'react-redux'
import profile from '../images/loginEntryPointChat.webp'
import '../Prop.css'


class Contact extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            productDetails: [{
                title: '',
                discription: '',
                price: '',
                url: ''
            }],
            titleVal: '',
            discriptionVal: '',
            priceVal: '',
            getUrl: '',
            uploadImage: uploadImageCopy,
            phoneNumber: '',
            progress: 0

        }
        this.handleChange = this.handleChange.bind(this)
        this.handleProductdetails = this.handleProductdetails.bind(this)
    }

    handleChange = () => {
        this.props.history.push('/SignInLinkBtn')
    }


    handleUploadImage = (e) => {
        const reader = new FileReader()
        reader.onload = () => {
            if (reader.readyState === 2) {
                this.setState({
                    uploadImage: reader.result
                })
            }
        }

        reader.readAsDataURL(e.target.files[0])

        const UploadedImage = e.target.files[0]
        const uploadTask = storage.ref(`Images/${UploadedImage.name}`).put(UploadedImage)
        uploadTask.on('state_changed',
            (snapshot) => {
                const progress = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100)
                this.setState({ progress })
                // alert(progress)
            },
            (error) => {
                alert(error)
            },
            () => {
                storage.ref('Images').child(UploadedImage.name).getDownloadURL()
                    .then(getUrl => {
                        console.log(getUrl)
                        this.setState({ getUrl })
                    })
            }
        )

    }







    handleProductdetails = (e) => {
        e.preventDefault();
        let productTitle = this.state.titleVal
        let productDiscription = this.state.discriptionVal
        let productPrice = this.state.priceVal
        let imageUrl = this.state.getUrl
        let number = this.state.phoneNumber

        let obj = {
            title: productTitle,
            discription: productDiscription,
            price: productPrice,
            url: imageUrl,
            phoneNumber: number
        }


        firebase.database().ref('Product').child(`/key`).push(obj)


        this.setState({
            productDetails: [...this.state.productDetails, obj],
            titleVal: '',
            discriptionVal: '',
            priceVal: '',
            getUrl: '',
            uploadImage: uploadImageCopy,
            phoneNumber: '',
            progress: 0
        })


    }

    // for Upload Image....


    render() {

        let { titleVal, discriptionVal, priceVal, uploadImage, phoneNumber } = this.state
        return (
            <div>
                <div className="progress_container">
                    {
                        this.state.progress === 0  ?
                            <progress value={this.state.progress} style={{ display: 'none' }} />
                            :
                            this.state.progress > 0 ?
                                <progress value={this.state.progress} className='progressbar' />
                                :
                                <progress value={this.state.progress} style={{ display: 'none' }} />

                    }


                </div>

                <div className="mainSellSec sticky ">
                    <React.Fragment >
                        <CssBaseline />
                        <Container >

                            <div className="section1">
                                <NavLink to='/SignInLinkBtn' className='arrowstyling' ><ArrowBackIcon style={{ fontSize: 24, color: "black" }} /></NavLink>
                                <NavLink to='/' ><img src={Capture} width='50px' alt="logo" /></NavLink>
                            </div>
                        </Container>
                    </React.Fragment>

                </div>
                <Container fixed  >
                    <div className="section2">
                        <h1 className='postNow'>POST YOUR AD</h1>
                        <div className="postSection">
                            <h1 className='postHeading'>Selected category</h1>
                            <div className="changebtn">
                                <span>Mobile</span>
                                <button onClick={this.handleChange} className='loginbtn outline'>Change</button>
                            </div>
                            <div className="form" onSubmit={(e) => this.handleProductdetails(e)}>
                                <form action="">
                                    <div className="detail">
                                        <h1 className='postSubHeading'>Include some details</h1>
                                        <h4 className='subH4'>Condition *</h4>
                                        <div className="btnContain">
                                            <button className="btnConfig">New</button>
                                            <button className="btnConfig">Used</button>
                                        </div>
                                        <div className="gettitle">
                                            <label htmlFor="title" className='label'>Ad title *</label>
                                            <input type="text"
                                                name='title'
                                                className='title'
                                                maxLength="70"
                                                autoComplete='off'
                                                value={titleVal}
                                                onChange={e => this.setState({ titleVal: e.target.value })}
                                            />
                                            <div className="info">
                                                <span className='textInfo'>
                                                    Mention the key features of your item (e.g. brand, model, age, type)
                                                </span>
                                                <span className='maxText'>0/70</span>
                                            </div>


                                            <textarea
                                                name="discription"
                                                id=""
                                                maxLength="4096"
                                                className='title'
                                                value={discriptionVal}
                                                onChange={e => this.setState({ discriptionVal: e.target.value })}
                                                cols="30"
                                                rows="10"
                                            ></textarea>
                                            <div className="info">
                                                <span className='textInfo'>
                                                    Mention the key features of your item (e.g. brand, model, age, type)
                                                </span>
                                                <span className='maxText'>0/4096</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="detail gettitle">
                                        <h1 className='postSubHeading'>SET A PRICE</h1>
                                        <span className="textInfo">price*</span>
                                        <div className="setPrice">
                                            <div className="rs ">
                                                <div>
                                                    <span>Rs</span>
                                                </div>
                                            </div>
                                            <div >
                                                <input
                                                    type="text"
                                                    className="priceInput"
                                                    value={priceVal}
                                                    onChange={e => this.setState({ priceVal: e.target.value })}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="imageUploadContainer">
                                        <h1 className='postSubHeading'>UPLOAD UP TO 12 PHOTOS</h1>
                                        {/* <UploadImage /> */}

                                        <div className="containImg">
                                            <div className="uploadimgstyle">

                                                <img src={uploadImage} width='100%' height='100%' alt='' />
                                            </div>

                                            <div className="uploadimgstyle1">
                                                <div className="uploadimg1" onClick={() => this.fileInput.click()}>

                                                    <div className="imgIcon">
                                                        <div  >
                                                            <input type="file" name="file" id="input" accept='image/*'
                                                                onChange={this.handleUploadImage}
                                                                style={{ display: 'none' }}
                                                                ref={fileInput => this.fileInput = fileInput}
                                                            />
                                                            <div className='upload_btn'>
                                                                <AddAPhotoIcon />Add photo
                                                            </div>

                                                        </div>
                                                    </div>
                                                </div>
                                            </div>



                                        </div>
                                    </div>

                                    <div className="profileUploadContainer">
                                        <h3 className="postSubHeading">REVIEW YOUR DETAILS</h3>
                                        <div className="u_p_P_PN">
                                            <div className="u_p_i_c">
                                                <img src={this.props.user !== null ?
                                                    this.props.user.profile
                                                    :
                                                    profile
                                                }
                                                    className="profileImg"
                                                    alt="profile"
                                                />
                                            </div>
                                            <div className="u_p_p_n">
                                                <label htmlFor="title" className='label'>Phone Number</label>
                                                <input type="number"
                                                    className='phoneInp'
                                                    name="phone number"
                                                    id=""
                                                    value={phoneNumber}
                                                    onChange={(e) => this.setState({ phoneNumber: e.target.value })}
                                                />
                                                <div className="info">
                                                    <span className='textInfo'>
                                                        Type your current number
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div style={{ textAlign: 'center' }}>
                                        <button type="submit" className='submitbtn_createAds'>Create Ad</button>
                                    </div>

                                </form>
                            </div>
                        </div>
                    </div>
                </Container>

            </div >
        )
    }
}

const mapStateToProps = (state) => ({
    user: state.currentUser
})

export default connect(mapStateToProps, null)(Contact);