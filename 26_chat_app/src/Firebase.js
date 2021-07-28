import firebase from 'firebase'

const firebaseApp = firebase.initializeApp({
  apiKey: 'AIzaSyBfN9k6w9ZeIPmaY0Yxjek5IdjTx4hOaXU',
  authDomain: 'chatapp-6855f.firebaseapp.com',
  projectId: 'chatapp-6855f',
  storageBucket: 'chatapp-6855f.appspot.com',
  messagingSenderId: '850816754155',
  appId: '1:850816754155:web:ecfc8691b9d9eec27cf9ae',
  measurementId: 'G-7KF83XL2SK',
});

const db = firebaseApp.firestore();

const auth = firebase.auth();

export { db, auth };