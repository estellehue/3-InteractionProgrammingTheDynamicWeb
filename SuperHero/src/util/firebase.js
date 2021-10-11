import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

var firebaseConfig = {
    apiKey: "AIzaSyAOsPNt19uF4SMUhVhnTkLBipiMBEI--IM",
    authDomain: "login-3e560.firebaseapp.com",
    databaseURL: "https://login-3e560.firebaseio.com",
    projectId: "login-3e560",
    storageBucket: "login-3e560.appspot.com",
    messagingSenderId: "229974468125",
    appId: "1:229974468125:web:b555fd8a033dd3bf6d88f4"
};

const fire = firebase.initializeApp(firebaseConfig);
export default fire;