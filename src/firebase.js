import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCru_Y59xLs479iWG8pmNaH70OzSr4L8C8",
  authDomain: "netflix-clone-invidias.firebaseapp.com",
  projectId: "netflix-clone-invidias",
  storageBucket: "netflix-clone-invidias.appspot.com",
  messagingSenderId: "380588105822",
  appId: "1:380588105822:web:e402a7b7adcc12b1a494cf"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

// Initialize Firestore and Auth
const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);

export { auth };
export default db;