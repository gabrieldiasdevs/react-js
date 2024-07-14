import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyA4-onGEwBkiZdz-qbVGeVnwcKF1WCx4zI",
  authDomain: "lista-de-tarefas-443a8.firebaseapp.com",
  projectId: "lista-de-tarefas-443a8",
  storageBucket: "lista-de-tarefas-443a8.appspot.com",
  messagingSenderId: "915873342308",
  appId: "1:915873342308:web:979c6291fbc95ff1e75071",
  measurementId: "G-FGVGWK8GL1"
};

const firebaseApp = initializeApp(firebaseConfig)

const db = getFirestore(firebaseApp)
const auth = getAuth(firebaseApp)

export { db, auth }