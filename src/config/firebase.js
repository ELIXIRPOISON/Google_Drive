import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

// Firebase configuration object (replace these values with your Firebase project credentials)
const firebaseConfig = {
    apiKey: "AIzaSyCU4gFiuQ8gBI_vbENqDvnToi9D-PJy8wc",
    authDomain: "drive-twd.firebaseapp.com",
    projectId: "drive-twd",
    storageBucket: "drive-twd.firebasestorage.app",
    messagingSenderId: "980342251743",
    appId: "1:980342251743:web:66603e091f356ab6eac96a"
  };

// Initialize Firebase app
const app = initializeApp(firebaseConfig);

// Initialize Firestore, Storage, and Auth services
const db = getFirestore(app);
const storage = getStorage(app);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

// Export Firebase services
export { db, storage, auth, googleProvider };
