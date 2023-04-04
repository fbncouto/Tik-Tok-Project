
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore/lite';

const firebaseConfig = {
  apiKey: "AIzaSyAzY8Bk9r9azPp39rl6T3P9ZOOEXx8oJL8",
  authDomain: "tiktok---jornada-633c1.firebaseapp.com",
  projectId: "tiktok---jornada-633c1",
  storageBucket: "tiktok---jornada-633c1.appspot.com",
  messagingSenderId: "703007073454",
  appId: "1:703007073454:web:25d9211a93a58a51be393f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;