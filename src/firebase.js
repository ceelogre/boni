  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.0.1/firebase-app.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
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
  let app
  export default app = initializeApp(firebaseConfig);
