import { initializeApp } from "https://www.gstatic.com/firebasejs/9.8.2/firebase-app.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/9.8.2/firebase-database.js";
import { getAuth, signInWithEmailAndPassword, onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/9.8.2/firebase-auth.js";

// Configuration de application web dans Firebase
const firebaseConfig = {
    apiKey: "AIzaSyBG7T-28Gg2v2m4FBvYIlQjTu1yT_9J3tc",
    authDomain: "pfe-db-897a0.firebaseapp.com",
    databaseURL: "https://pfe-db-897a0-default-rtdb.firebaseio.com",
    projectId: "pfe-db-897a0",
    storageBucket: "pfe-db-897a0.appspot.com",
    messagingSenderId: "781865697320",
    appId: "1:781865697320:web:ff7788bee9c0410832b51d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
const auth = getAuth();

logout.addEventListener('click',(e)=>{
    signOut(auth).then(() => {
        // Decconection success
    window.location = 'index.html';
    }).catch((error) => {
        // Exeption des erreurs.
        const errorCode = error.code;
        const errorMessage = error.message;

        alert(errorMessage);
    });

});