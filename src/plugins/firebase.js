import { initializeApp } from "firebase/app";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyA3-RSR7nJMnJAg4qrUYlB3Y_hJl5AsZrY",
  authDomain: "test-vue-894ae.firebaseapp.com",
  projectId: "test-vue-894ae",
  storageBucket: "test-vue-894ae.appspot.com",
  messagingSenderId: "12658371972",
  appId: "1:12658371972:web:96c5dc9109fd5595f501d1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Authentication
const auth = getAuth(app);

// Firestore
const db = getFirestore(app);

// Cloud storage
const storage = getStorage(app);

// Get the currently logged-in user
const getCurrentUser = () => {
  return new Promise((resolve, reject) => {
    const unsubscribe = onAuthStateChanged(
      auth,
      (user) => {
        unsubscribe();
        resolve(user);
      },
      reject
    );
  });
};

export { auth, db, storage, getCurrentUser };