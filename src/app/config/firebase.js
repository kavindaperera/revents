import firebase from 'firebase';
import 'firebase/firestore';
import 'firebase/auth';


const firebaseConfig = {
    apiKey: "AIzaSyAWhBXHVhPJJTpJZehjpuiTHnhK1Wuij-Q",
    authDomain: "revents-271816.firebaseapp.com",
    databaseURL: "https://revents-271816.firebaseio.com",
    projectId: "revents-271816",
    storageBucket: "revents-271816.appspot.com",
    messagingSenderId: "927600530437"
}

firebase.initializeApp(firebaseConfig);
firebase.firestore();

export default firebase;