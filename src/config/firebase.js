import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAwTpCv6E8GQjdy-pTiHTyAhvrtvPc2ZKE",
  authDomain: "whatsapp-clone-7539b.firebaseapp.com",
  databaseURL: "https://whatsapp-clone-7539b.firebaseio.com",
  projectId: "whatsapp-clone-7539b",
  storageBucket: "whatsapp-clone-7539b.appspot.com",
  messagingSenderId: "196568058247",
  appId: "1:196568058247:web:05b20334aa88b7c6d6eb22",
  measurementId: "G-KSCW10QX68",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
