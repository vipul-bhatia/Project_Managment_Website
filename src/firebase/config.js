import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
import 'firebase/storage'

const firebaseConfig = {
  apiKey: "AIzaSyCcZaDC71aI21vihNjRTr93VF2EJCRNbPM",
  authDomain: "hackathon-react-e1982.firebaseapp.com",
  projectId: "hackathon-react-e1982",
  storageBucket: "hackathon-react-e1982.appspot.com",
  messagingSenderId: "930979028817",
  appId: "1:930979028817:web:42c29a2a4690d66061fd70"
};

// init firebase
firebase.initializeApp(firebaseConfig)

// init services
const projectFirestore = firebase.firestore()
const projectAuth = firebase.auth()
const projectStorage = firebase.storage()

// timestamp
const timestamp = firebase.firestore.Timestamp

export { projectFirestore, projectAuth,projectStorage, timestamp }