import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "",
  authDomain: "netflix-clone-b6f5e.firebaseapp.com",
  projectId: "netflix-clone-b6f5e",
  storageBucket: "netflix-clone-b6f5e.appspot.com",
  messagingSenderId: "",
  appId: "",
};

const app = initializeApp(firebaseConfig);

export const dbFB = getFirestore(app);

export const authFB = getAuth(app);
