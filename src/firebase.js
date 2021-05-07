import firebase from 'firebase'
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyAn8n-nsV3tHs6mnpwrsVjvTjBbZej_Nw4',
  authDomain: 'twitter-7978c.firebaseapp.com',
  projectId: 'twitter-7978c',
  storageBucket: 'twitter-7978c.appspot.com',
  messagingSenderId: '758943822980',
  appId: '1:758943822980:web:ed82e99fc4ad0ad9e97ed1',
  measurementId: 'G-HCST6JTCCF'
}

const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore()

export default db
