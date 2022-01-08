// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getAnalytics } from 'firebase/analytics'
import { getStorage } from 'firebase/storage'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyC0oJsaEIUZXNZNDAk8ap8P0z8ebr9FTVg',
  authDomain: 'curiomind-fa7ca.firebaseapp.com',
  projectId: 'curiomind-fa7ca',
  storageBucket: 'curiomind-fa7ca.appspot.com',
  messagingSenderId: '729183679657',
  appId: '1:729183679657:web:a6b577552ade0cce4c65b8',
  measurementId: 'G-Q7HT6M6N7G',
}

// Initialize Firebase
export const app = initializeApp(firebaseConfig)
const storage = getStorage(app)

export default storage
