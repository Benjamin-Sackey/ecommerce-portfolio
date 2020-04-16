import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


const config = {
    apiKey: "AIzaSyCPgz9LSzdzX_3RzZ4m0PVRKOXWkbs7Tpw",
    authDomain: "my-e-commerce-portfolio-db.firebaseapp.com",
    databaseURL: "https://my-e-commerce-portfolio-db.firebaseio.com",
    projectId: "my-e-commerce-portfolio-db",
    storageBucket: "my-e-commerce-portfolio-db.appspot.com",
    messagingSenderId: "192496462513",
    appId: "1:192496462513:web:3df72ce78b85fdea4b9090"
  };

  //firebase.initializeApp(config);//

  export const createUserProfileDocument = async (userAuth, additionalData) => {
      if (!userAuth) return;

      const userRef = firestore.doc(`users/${userAuth.uid}`);

      const snapShot = await userRef.get();

      if(!snapShot.exists) {
          const {displayName, email } = userAuth;
          const createdAt = new Date();


          try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })

          } catch (error) {
              console.log('error creating user', error.message);

          }  
      }  
      
      return userRef;
  }; 




  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account'});
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;