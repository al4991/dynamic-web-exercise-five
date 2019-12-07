import * as firebase from 'firebase/app'; 
import 'firebase/auth'; 


// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDSwOyDSThoNA26GAYZLhyr-2ybOT1_b_k",
    authDomain: "dynamic-exercise.firebaseapp.com",
    databaseURL: "https://dynamic-exercise.firebaseio.com",
    projectId: "dynamic-exercise",
    storageBucket: "dynamic-exercise.appspot.com",
    messagingSenderId: "304754456374",
    appId: "1:304754456374:web:38d401cf0bdb3055e6a597"
};
    // Initialize Firebase
firebase.initializeApp(firebaseConfig);


export default firebase; 