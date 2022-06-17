import firebase from 'firebase'
import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyD6bCYSk5hcVAmB5CQYCUoqaL8TuaM7f80",
    authDomain: "social-app-front-695a9.firebaseapp.com",
    projectId: "social-app-front-695a9",
    storageBucket: "social-app-front-695a9.appspot.com",
    messagingSenderId: "365826042204",
    appId: "1:365826042204:web:ecee29701db54321137999"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;