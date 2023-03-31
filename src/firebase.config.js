import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirebase, getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDbHyzGzlt7KyNtxpvQzbTzZQEdQWRR2Mo",
  authDomain: "techhub-c5d8d.firebaseapp.com",
  projectId: "techhub-c5d8d",
  storageBucket: "techhub-c5d8d.appspot.com",
  messagingSenderId: "369095077475",
  appId: "1:369095077475:web:0b4489755a2028db501256",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

export default app;

// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyDbHyzGzlt7KyNtxpvQzbTzZQEdQWRR2Mo",
//   authDomain: "techhub-c5d8d.firebaseapp.com",
//   projectId: "techhub-c5d8d",
//   storageBucket: "techhub-c5d8d.appspot.com",
//   messagingSenderId: "369095077475",
//   appId: "1:369095077475:web:0b4489755a2028db501256"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
