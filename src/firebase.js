import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

// https://firebase.google.com/docs/web/setup#available-libraries

const firebaseConfig = {
    apiKey: "AIzaSyAzV9MX_6AsNPCyVCfmN7zEPy6h2oHzjpU",
    authDomain: "chat-98deb.firebaseapp.com",
    projectId: "chat-98deb",
    storageBucket: "chat-98deb.appspot.com",
    messagingSenderId: "343099332724",
    appId: "1:343099332724:web:b2b34671f33671aa805921"
};

const app = initializeApp(firebaseConfig)
const auth = getAuth()
const storage = getStorage()
const db = getFirestore(app)

export { app, auth, storage, db }