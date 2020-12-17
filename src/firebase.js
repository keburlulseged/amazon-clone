import firebase from 'firebase';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCl-FgKBgtL9z80_4BZuoqpKm5YRLZcyY4",
  authDomain: "clone-d2f83.firebaseapp.com",
  projectId: "clone-d2f83",
  storageBucket: "clone-d2f83.appspot.com",
  messagingSenderId: "596221305692",
  appId: "1:596221305692:web:6fbdf28478e8e87b5d1799",
  measurementId: "G-Q8QG52QGG1"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
