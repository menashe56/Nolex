import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyBaq1nnjvzqntsYUhxnA61MwWO2wUAbztM",
    authDomain: "chatapp-49140.firebaseapp.com",
    projectId: "chatapp-49140",
    storageBucket: "chatapp-49140.appspot.com",
    messagingSenderId: "823628151933",
    appId: "1:823628151933:web:a1aee5eb7158461cbb4514"
  };

  if (!firebase.apps.length) { 
    firebase.initializeApp(firebaseConfig);
  }
  //const db = app.firestore();
  //const auth = firebase.auth();

  export { firebase};

  {/* 
export const firebaseApp = initializeApp(firebaseConfig);
  export const auth = getAuth(firebaseApp);
  export const firebaseDB = getFirestore(firebaseApp);
*/}