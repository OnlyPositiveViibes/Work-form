import firebase from 'firebase/app'
import 'firebase/firestore'


const firebaseConfig = {
    apiKey: "AIzaSyC2WJ_AY13v1dwTseMRTo_01OlAzL5_AW4",
    authDomain: "datetable-88fb4.firebaseapp.com",
    projectId: "datetable-88fb4",
    storageBucket: "datetable-88fb4.appspot.com",
    messagingSenderId: "973865046140",
    appId: "1:973865046140:web:8b6da83465a86617f7b9f9",
    measurementId: "G-FGX07EW87Y"
  };
  
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export default firebase;