import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBUufvFC5VkU-DHMRDylhDe32Y_ltF9mQI",
  authDomain: "netflix-clone-b6f5e.firebaseapp.com",
  projectId: "netflix-clone-b6f5e",
  storageBucket: "netflix-clone-b6f5e.appspot.com",
  messagingSenderId: "552064505912",
  appId: "1:552064505912:web:f4c312947f17ae15bfaecd",
};

const app = initializeApp(firebaseConfig);

export const dbFB = getFirestore(app);

export const authFB = getAuth(app);
