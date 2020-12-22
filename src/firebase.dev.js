import Firebase from 'firebase/app'
import "firebase/auth"

const config = process.env.REACT_APP_FIREBASEKEY

const firebase = Firebase.initializeApp(config)

export { firebase }