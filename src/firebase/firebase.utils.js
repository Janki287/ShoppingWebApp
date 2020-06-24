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

  export const createUserProfileDocument = async (userAuth,additionalData) => {
      if(!userAuth) return; //if userAuth is null then return (null = false)

      const userRef = firestore.doc(`users/${userAuth.uid}`);
      const snapShot = await userRef.get()

      if(!snapShot.exists){
        //if snapShot is null it means there no user in USERS database of perticular userAuth.uid
        //then create new user in USERS database
        const { displayName,email } = userAuth; //displayName,email these two properties we are getting from google authentication(firebase auth)
        const createdAt = new Date();

        try{
            await userRef.set({
                email,
                displayName,
                createdAt,
                ...additionalData
            })
            //here we are creating new user into USERS database with these properties
        }catch(error){
            console.log('error creating new user in database',error.message);
        }

      }

      return userRef;
      //here we are returning userRef object which is, if exist then return the existed object
      //and if not exist then create new user in databae and then return it

  }

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({
      prompt: 'select_account'
  });

  export const SignInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;