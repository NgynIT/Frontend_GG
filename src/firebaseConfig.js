// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from 'firebase/auth';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDWmx6mkXkLxdqrN-we0zFv1QOrKkrqrZ4",
  authDomain: "ngynit-72054.firebaseapp.com",
  projectId: "ngynit-72054",
  storageBucket: "ngynit-72054.appspot.com",
  messagingSenderId: "1044035795487",
  appId: "1:1044035795487:web:8e908bd0b6fb4c1546f32a",
  measurementId: "G-3YQQER0TX6"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const database = getAuth(app);
export const analytics = getAnalytics(app);

//setup google
export const provider = new GoogleAuthProvider();
provider.addScope('https://www.googleapis.com/auth/contacts.readonly');
const auth = getAuth();
auth.languageCode = 'it';
// provider.setCustomParameters({
//   'login_hint': 'vuvantienhd96@gmail.com'
// });



// Initialize Firebase Authentication and get a reference to the service
