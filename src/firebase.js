// src/firebase.js
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getDatabase } from 'firebase/database';

/*const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_DATABASE_URL,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
  measurementId: process.env.REACT_APP_MEASUREMENT_ID,
};*/

const firebaseConfig = {
    apiKey: "AIzaSyDtC6fo4EXMw1Sq6brkp-vzSeKE1DMpQxk",
    authDomain: "emailauth-e6005.firebaseapp.com",
    databaseURL: "https://emailauth-e6005-default-rtdb.firebaseio.com",
    projectId: "emailauth-e6005",
    storageBucket: "emailauth-e6005.appspot.com",
    messagingSenderId: "868008307773",
    appId: "1:868008307773:web:5b54f6825f33d517be4e54",
    measurementId: "G-X6KMR7GL5Q"
  };

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const database = getDatabase(app);

export { auth, database };
