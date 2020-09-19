
import firebase from "firebase/app"
import 'firebase/firestore'

const db = firebase.initializeApp({
    apiKey: "AIzaSyDo32_ldQpybN6_JoCP-KsGKQk-DwBjaW4",
    authDomain: "servicario-cb60b.firebaseapp.com",
    databaseURL: "https://servicario-cb60b.firebaseio.com",
    projectId: "servicario-cb60b",
    storageBucket: "servicario-cb60b.appspot.com",
    messagingSenderId: "1030667763044",
    appId: "1:1030667763044:web:c11d0208fdc6899a314e71",
    measurementId: "G-0WJ3T8HP1H"
})
.firestore()

export default db

const { Timestamp } = firebase.firestore
export {Timestamp} 
