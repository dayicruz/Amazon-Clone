// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCoeRK2Bn0udNmcBSm1WQh_CMIGVrQTMM0",
  authDomain: "clone-771a2.firebaseapp.com",
  projectId: "clone-771a2",
  storageBucket: "clone-771a2.appspot.com",
  messagingSenderId: "549513456665",
  appId: "1:549513456665:web:619de6336ab318cb1b8e88",
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);

export const FirebaseAuth = getAuth(FirebaseApp);

export const firebaseDb = getFirestore(FirebaseApp);

export const db = getFirestore(FirebaseApp);
