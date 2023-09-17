// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBeBI_RX_h1YOq2OWDCZWtxX8-vmGvSQ9I",
  authDomain: "fb-58058-teddy-bears.firebaseapp.com",
  projectId: "fb-58058-teddy-bears",
  storageBucket: "fb-58058-teddy-bears.appspot.com",
  messagingSenderId: "231890802909",
  appId: "1:231890802909:web:29368cf85d77cb5aca6334"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);