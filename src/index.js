import firebase from 'firebase/compat/app'
import {getFirestore, collection, addDoc} from 'firebase/firestore'
  const firebaseConfig = {
    apiKey: "AIzaSyDqbXOll1QNxBDNgxcghygtgEYlbZcmWF0",
    authDomain: "boni-a6c2b.firebaseapp.com",
    databaseURL: "https://boni-a6c2b-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "boni-a6c2b",
    storageBucket: "boni-a6c2b.appspot.com",
    messagingSenderId: "378373042496",
    appId: "1:378373042496:web:feceb08a147e18ca5e0aa5"
  };

  // Initialize Firebase
  const app = firebase.initializeApp(firebaseConfig);

// Retrieve data from the form and send it to firebase
const parseForm = (event) => {
  event.preventDefault()
let userForm = document.forms[0]
let username = userForm.elements['username'].value
let email = userForm.elements['email'].value
let text = userForm.elements['text'].value
let translateTo = userForm.elements['language'].value
  let ticket = {
    username,
    email,
    text,
    translateTo
  }
  createTranslationTicket(ticket)
}
const  createTranslationTicket = async (ticket) => {
  let db = getFirestore(app)

  try {
    const docRef = await addDoc(collection(db, "tickets"), ticket);
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
}

const theForm = document.forms[0]
theForm.addEventListener('submit', parseForm)