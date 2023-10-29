
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.8.2/firebase-app.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/9.8.2/firebase-database.js";
import { getAuth, signInWithEmailAndPassword, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.8.2/firebase-auth.js";

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: "AIzaSyBG7T-28Gg2v2m4FBvYIlQjTu1yT_9J3tc",
	authDomain: "pfe-db-897a0.firebaseapp.com",
	databaseURL: "https://pfe-db-897a0-default-rtdb.firebaseio.com",
	projectId: "pfe-db-897a0",
	storageBucket: "pfe-db-897a0.appspot.com",
	messagingSenderId: "781865697320",
	appId: "1:781865697320:web:ff7788bee9c0410832b51d"
};

// Initialisation de Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
const auth = getAuth();


// Le code de la fonctinnalite de Connection
login.addEventListener('click',(e)=>{
	var email = document.getElementById('email').value;
	var password = document.getElementById('password').value;

	signInWithEmailAndPassword(auth, email, password)
	.then((userCredential) => {
		// Connexion seccuss
		const user = userCredential.user;
	})
	.catch((error) => {
		//Exeptions des erreurs
		const errorCode = error.code;
		const errorMessage = error.message;

		alert(errorMessage);
});
});

const user = auth.currentUser;
onAuthStateChanged(auth, (user) => {
if (user) {
	const uid = user.uid;
	window.location = 'home.html#/home'; // window.location = '#/';
} else {
	// Utilisateur est deconnecter
}
});
