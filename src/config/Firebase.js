import * as firebase from 'firebase/app'
import'firebase/database'
import 'firebase/auth'
import 'firebase/storage'

var firebaseConfig = {
  apiKey: "AIzaSyBzguZSTSsTdUak3pxixdpanYt3wpFAY9w",
  authDomain: "react-app-7462d.firebaseapp.com",
  databaseURL: "https://react-app-7462d.firebaseio.com",
  projectId: "react-app-7462d",
  storageBucket: "react-app-7462d.appspot.com",
  messagingSenderId: "470348774412",
  appId: "1:470348774412:web:11478d52572071585b0229",
  measurementId: "G-CGLWRMXB9T"
};
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  const storage = firebase.storage()

export {
    storage , firebase as default
}