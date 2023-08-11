import * as firebase from 'firebase';
 import { getAuth } from "firebase/auth";
import 'firebase/auth';
import 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyAaX3FUaB4yR2oOjvVXIX004NByTb1xCl8',
  authDomain: 'insta-eebe1.firebaseapp.com',
  projectId: 'insta-eebe1',
  storageBucket: 'insta-eebe1.appspot.com',
  messagingSenderId: '268775197135',
  appId: '1:268775197135:web:238882902d52863e2e6aba',
  measurementId: 'G-GPC8WRDR0L',
};

// Initialize Firebase
let app;
if  (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
}  else  {
  app = firebase.app();
}
const auth = firebase.auth();
// const auth = getAuth(app);

export {auth};
