import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyBvJYZJ-6HFcc1flOaOp--1vJkl3p6xvEI",
    authDomain: "crown-clothing-react-app.firebaseapp.com",
    databaseURL: "https://crown-clothing-react-app.firebaseio.com",
    projectId: "crown-clothing-react-app",
    storageBucket: "crown-clothing-react-app.appspot.com",
    messagingSenderId: "857165999991",
    appId: "1:857165999991:web:5aa3a9551133f4ab63fb72",
    measurementId: "G-QHC7EEM0L9"
  };

  firebase.initializeApp(firebaseConfig);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({
      prompt: 'select_account'
  });

  export const SignInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;