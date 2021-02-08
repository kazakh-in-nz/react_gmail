import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyB4BOIm8t1HXfNKtA4zDZt142ApJT15Dck",
  authDomain: "react-clone-d91e3.firebaseapp.com",
  projectId: "react-clone-d91e3",
  storageBucket: "react-clone-d91e3.appspot.com",
  messagingSenderId: "449017052398",
  appId: "1:449017052398:web:ad888a0abbddec5bb7c7ff",
  measurementId: "G-ZS262TCS1N",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };
