import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'

const firebaseConfig = {
  apiKey: "AIzaSyAI7tsNQ23hv8iuBIUM5LWYMEpKoAV2pCQ",
  authDomain: "chamados-a1caa.firebaseapp.com",
  projectId: "chamados-a1caa",
  storageBucket: "chamados-a1caa.appspot.com",
  messagingSenderId: "632177888649",
  appId: "1:632177888649:web:56c0eace4d1165b9242558",
  measurementId: "G-RZBYZK7VBH"
}

const firebaseApp = initializeApp(firebaseConfig)

const auth = getAuth(firebaseApp)
const db = getFirestore(firebaseApp)
const storage = getStorage(firebaseApp)

export { auth, db, storage }