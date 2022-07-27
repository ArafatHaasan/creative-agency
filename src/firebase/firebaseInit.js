import { initializeApp } from 'firebase/app'
import firebaseConfig from './FirebaseConfig'

const firebaseinit = () => {
  initializeApp(firebaseConfig)
}

export default firebaseinit
