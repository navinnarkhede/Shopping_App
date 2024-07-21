import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyB3jmD0gTQClK6D2uk4po8z6IlosP2VCGo",
  authDomain: "shopping-app-35a45.firebaseapp.com",
  projectId: "shopping-app-35a45",
  storageBucket: "shopping-app-35a45.appspot.com",
  messagingSenderId: "61163251829",
  appId: "1:61163251829:web:e8ef5d3b9756afff26f03c",
  measurementId: "G-S56WQH7XCG"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };