// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog2-6d7d6.firebaseapp.com",
  projectId: "mern-blog2-6d7d6",
  storageBucket: "mern-blog2-6d7d6.appspot.com",
  messagingSenderId: "748991079096",
  appId: "1:748991079096:web:c8de146d92586e21094a4d"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const storage = getStorage(app);

export { storage };