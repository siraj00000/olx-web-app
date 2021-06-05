import firebase from '../../config/Firebase'


const LogIn = () => {
    return (dispatch) => {
        dispatch({
            type: 'Credentials',
            payload: {
                user: 'siraj Ahmed',
                Emial: 'siraj@gmail.com'
            }
        })
    }
}


const GoogleAuth = () => {
    return (dispatch) => {
        var provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(provider).then(function (result) {
            var token = result.credential.accessToken;
            var user = result.user;
            let create_user = {
                name: user.displayName,
                email: user.email,
                profile: user.photoURL,
                uid: user.uid
            }
            firebase.database().ref('Users').child(user.uid).set(create_user)
                .then(() => {
                    dispatch({ type: 'user', payload: create_user })
                    alert('User Login to Google Successful')
                })
            // ...
        }).catch(function (error) {
            // Handle Errors here.
            // var errorCode = error.code;
            var errorMessage = error.message;
            alert(errorMessage)
        });


    }
}



const FbAuth = () => {
    return (dispatch) => {
        var provider = new firebase.auth.FacebookAuthProvider();
        firebase.auth().signInWithPopup(provider)
            .then(function (result) {
                var token = result.credential.accessToken;
                var user = result.user;
                let create_user = {
                    name: user.displayName,
                    email: user.email,
                    profile: user.photoURL,
                    uid: user.uid
                }
                firebase.database().ref('Users').child(user.uid).set(create_user)
                    .then(() => {
                        dispatch({ type: 'user', payload: create_user })
                        alert('User Login Facebook Successful')
                    })
            })
            .catch(function (error) {
                // var errorCode = error.code;
                var errorMessage = error.message;
                console.log(errorMessage)
            });

    }
}

const getUser = ()=>{
    return (dispatch)=>{
        let Users = []
        firebase.database().ref('Users').child('/').on('child_added',(loged_in_users)=>{
            Users.push(loged_in_users.val())
        })
                dispatch({
                    type: 'logedInUsers',
                    payload: Users
                })
    }
}





export {
    LogIn,
    GoogleAuth,
    FbAuth,
    getUser
}
