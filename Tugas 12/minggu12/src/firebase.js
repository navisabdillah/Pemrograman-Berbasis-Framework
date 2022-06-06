import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

const settings = { timestampsInSnapshots: true };

const config = {
    apiKey: "AIzaSyBxPnLQb_w6YnfVlljt5OEd_OPC84gObKc",
    authDomain: "minggu12-b25f2.firebaseapp.com",
    databaseURL: "https://minggu12-b25f2-default-rtdb.firebaseio.com",
    projectId: "minggu12-b25f2",
    storageBucket: "minggu12-b25f2.appspot.com",
    messagingSenderId: "117968884681",
    appId: "1:117968884681:web:bc918e929babd639da4e18",
    measurementId: "G-W0HTRVYBLX"
};
firebase.initializeApp(config);
firebase.firestore().settings(settings);

export default firebase;
