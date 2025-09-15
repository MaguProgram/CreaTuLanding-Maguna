// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAzqy9A5LR6wmWY-FyO-nQrBnt98TLbkdU",
    authDomain: "proyecto-final-react---coder.firebaseapp.com",
    projectId: "proyecto-final-react---coder",
    storageBucket: "proyecto-final-react---coder.firebasestorage.app",
    messagingSenderId: "901295952176",
    appId: "1:901295952176:web:6345d16bb545b9ead3b8f5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);