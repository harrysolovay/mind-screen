import * as firebase from 'firebase'
import MobxFirebaseStore from 'mobx-firebase-store'

class FirebaseStore extends MobxFirebaseStore {

  constructor() {

    firebase.initializeApp({
      apiKey: "AIzaSyBGCksi2SrWhRZFWtkwgIs03eBhikcZWx8",
      authDomain: "columbiahealthhacks.firebaseapp.com",
      databaseURL: "https://columbiahealthhacks.firebaseio.com",
      projectId: "columbiahealthhacks",
      storageBucket: "columbiahealthhacks.appspot.com",
      messagingSenderId: "941523644717"
    })

    super(firebase.database().ref())
    
  }

}

export default FirebaseStore