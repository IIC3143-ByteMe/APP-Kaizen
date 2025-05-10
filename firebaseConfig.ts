import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Reemplaza estos valores con los del proyecto
const firebaseConfig = {
  apiKey: "API_KEY",
  authDomain: "AUTH_DOMAIN",
  projectId: "PROJECT_ID",
  storageBucket: "STORAGE_BUCKET",
  messagingSenderId: "SENDER_ID",
  appId: "APP_ID",
};


// Aquí inicializas la “app” de Firebase
const app = initializeApp(firebaseConfig);

// Y exportas los servicios que vas a usar
export const auth = getAuth(app);
export const db   = getFirestore(app);