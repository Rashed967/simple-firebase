// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCeZXfQLMr03N1lN0M-Z0G0C_uFqrh42OA",
  authDomain: "siimple-easy-firebase.firebaseapp.com",
  projectId: "siimple-easy-firebase",
  storageBucket: "siimple-easy-firebase.appspot.com",
  messagingSenderId: "519588074920",
  appId: "1:519588074920:web:c3a0676f52dbf9662e799d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app