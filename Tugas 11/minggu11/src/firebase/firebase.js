import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAdh6RbRTPt7G-SVeWca8kMNFKibRWznkE",
    authDomain: "login-c4660.firebaseapp.com",
    projectId: "login-c4660",
    storageBucket: "login-c4660.appspot.com",
    messagingSenderId: "816126094210",
    appId: "1:816126094210:web:b5cd72fae955fd60f2fd9b",
    measurementId: "G-ZMCP99N6H5"
};

export const myFirebase = firebase.initializeApp(firebaseConfig);
const baseDb = myFirebase.firestore();
export const db = baseDb;  
