import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyAltR_hb_G8QgqFYZ-fCnGGoC6FKfPPaRM",
  authDomain: "fir-web-7186c.firebaseapp.com",
  projectId: "fir-web-7186c",
  storageBucket: "fir-web-7186c.appspot.com",
  messagingSenderId: "664923017412",
  appId: "1:664923017412:web:0eb5867ccb39757404f991",
  measurementId: "G-66JGK5MSYD"
}

const firebaseApp = initializeApp(firebaseConfig)

const db = getFirestore(firebaseApp)

export { db }