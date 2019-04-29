import firebase from 'firebase'

if (!firebase.apps.length) {
  firebase.initializeApp({
    apiKey: "AIzaSyAQigdHp3IfFMIDqXKteB9oh_4s40jWP54",
    authDomain: "everyone-countdown-17586.firebaseapp.com",
    databaseURL: "https://everyone-countdown-17586.firebaseio.com",
    projectId: "everyone-countdown-17586",
    storageBucket: "everyone-countdown-17586.appspot.com",
    messagingSenderId: "72392807425"
  })
}

export default firebase
