import React, { Component } from 'react';
import Header from '../component/Header';
import TopHeader from '../component/TopHeader';
import '../styleSheets/chatStyle.css'
import { connect } from 'react-redux'
import { getUser } from "../store/action/action";
import dumy from '../images/loginEntryPointChat.webp'
import firebase from "../config/Firebase";
import emptyUser from '../images/emptyChat.webp'

class ChatApp extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            chatWithUser: {},
            chats: [],
            message: ''
        }
    }

    chat = (user) => {
        this.setState({
            chatWithUser: user
        })
        let currentUser = this.props.currentUser
        let merger_uids = this.MergeUIDs(user.uid, currentUser.uid)
        this.getMessages(merger_uids)


    }


    MergeUIDs = (uid1, uid2) => {
        if (uid1 < uid2) {
            return uid1 + uid2
        } else {
            return uid2 + uid1
        }
    }
    sendMessage = () => {
        let currentUser = this.props.currentUser
        let chatWithUser = this.state.chatWithUser
        let merger_uids = this.MergeUIDs(chatWithUser.uid, currentUser.uid)


        firebase.database().ref('Chats').child(`/${merger_uids}`).push({
            message: this.state.message,
            name: currentUser.name
        })

    }

    getMessages = (uid) => {
        firebase.database().ref('Chats').child(`/${uid}`).on('child_added', (messages) => {
            this.state.chats.push(messages.val())
            this.setState({
                chats: this.state.chats,
                message: ''
            })
        })
    }


    componentDidMount = () => {
        this.props.getUser()
    }
    render() {
        return (
            <div>
                <TopHeader />
                <Header />
                <div className="chat_section">
                    <div className="container chat_container">
                        <div className="row c_row1">
                            <div className="col-sm-4 col-md-4 col-lg-4 col-xl-4 userbox">
                                <div className="i_h">
                                    <div className="c_h_c"><h4 className="c_h_1">INBOX</h4></div>
                                    <div className="c_i_c">
                                        <i className="fa fa-search c_i" aria-hidden="true"></i>
                                        <i className="fa fa-ellipsis-v c_i_b" aria-hidden="true"></i>
                                    </div>
                                </div>
                                <div className="q_c">
                                    <h5 className="q_c_h">Quick Chat With OLX Users</h5>
                                </div>
                                <div className="c_u">
                                    <div className="u_ids">
                                        {this.props.logedInUsers.map((v, i) => {
                                            return v.uid !== this.props.currentUser.uid && (
                                                <div className="u_c" key={i} onClick={() => this.chat(v)}>
                                                    <img src={v.profile} className='c_u_p_img' alt="" />
                                                    <h5 className='c_u_n'>{v.name}</h5>
                                                </div>
                                            )
                                        })}
                                        {Object.keys(this.props.logedInUsers).length ?
                                            <div></div>
                                            :
                                            <>
                                                <div className="u_c" >
                                                    <img src={dumy} className='c_u_p_img' alt="" />
                                                    <div>
                                                        <h4 className='c_u_n'>Chat with OLX</h4>
                                                        <h6 className="c_u_n">sign in for start conversation</h6>
                                                    </div>
                                                </div>
                                            </>
                                        }

                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-8 col-md-8 col-lg-8 col-xl-8 chatbox">

                                {Object.keys(this.state.chatWithUser).length ?
                                    <div className='full_chat_area'>
                                        <div className="c_a">
                                            <h5 className="c_c_u_n">{this.props.currentUser.name}</h5>
                                        </div>
                                        <div className="chat_area">
                                            <div className="chat_ul">
                                                <ul className='messages_container'>
                                                    {this.state.chats.map((v, i) => {
                                                        return <li key={i} className='messages'><p className='msg_para'>{v.message}</p> </li>
                                                    })}
                                                </ul>
                                            </div>

                                            <div className="chat_inp_cont">
                                                <form className='Chat_sender_form'>
                                                    <input
                                                        type='text'
                                                        className='Chat_sender_inp'
                                                        value={this.state.message}
                                                        onChange={(e) => this.setState({ message: e.target.value })}
                                                        placeholder='Enter your message'
                                                        maxLength='500' />
                                                    <button type="button" onClick={this.sendMessage} className='Chat_sender_btn'>Send <i class="fa fa-paper-plane" aria-hidden="true"></i></button>
                                                </form>
                                            </div>
                                        </div>

                                    </div>
                                    :
                                    <div className="no_user_section">
                                        <div className="no_user">
                                            <img src={emptyUser} className='no_user_img' alt="" />
                                            <h4 className="no_user_h">
                                                Select a chat to view conversation
                                                </h4>
                                        </div>

                                    </div>

                                }
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}


const mapStateToProps = (state) => ({
    currentUser: state.currentUser,
    logedInUsers: state.logedInUsers
})

const mapDispatchToProps = (dispatch) => ({
    getUser: () => dispatch(getUser())
})
export default connect(mapStateToProps, mapDispatchToProps)(ChatApp);