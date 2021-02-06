
import firebase from "firebase";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCh5DH1qa-WJ7ibqhr-m2-HT1bkqj74jZ8",
  authDomain: "whatsapp-clone-16b43.firebaseapp.com",
  projectId: "whatsapp-clone-16b43",
  storageBucket: "whatsapp-clone-16b43.appspot.com",
  messagingSenderId: "318497333373",
  appId: "1:318497333373:web:d34ea363a48217049ad114",
  measurementId: "G-4HPZ4EHNK3",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;