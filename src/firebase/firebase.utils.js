import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyCx9olxvqvQ28CSOCZt2bFPrcdTxgfy33E",
  authDomain: "crwn-back.firebaseapp.com",
  databaseURL: "https://crwn-back.firebaseio.com",
  projectId: "crwn-back",
  storageBucket: "crwn-back.appspot.com",
  messagingSenderId: "16245490390",
  appId: "1:16245490390:web:e2e66d10be433a742cbf77",
  measurementId: "G-36YRYKQ4JG",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
