// Import the functions you need from the SDKs you need
import * as firebase from 'firebase'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: 'AIzaSyDqXV-5b00bGkAtSjes-89CgitGyVjORb0',
	authDomain: 'smartappeindopdracht.firebaseapp.com',
	projectId: 'smartappeindopdracht',
	storageBucket: 'smartappeindopdracht.appspot.com',
	messagingSenderId: '122776674422',
	appId: '1:122776674422:web:8a26cd372c6c199d977f57',
}

// Initialize Firebase
let app
if (firebase.apps.length === 0) {
	app = firebase.initializeApp(firebaseConfig)
} else {
	app = firebase.app()
}

const auth = firebase.auth()

export { auth }
