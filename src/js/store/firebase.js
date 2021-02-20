// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyBiMTvAdm9U92XjQF-S9isFyXs0_17ukms",
    authDomain: "cooking-nana-app.firebaseapp.com",
    projectId: "cooking-nana-app",
    storageBucket: "cooking-nana-app.appspot.com",
    messagingSenderId: "171268908980",
    appId: "1:171268908980:web:66530eca3acd0fefa1f4e1",
    measurementId: "G-NWPRNJVVVC"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;