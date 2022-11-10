import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

export const auth = firebase.initializeApp({
    apiKey: "AIzaSyDsayCrM5AmXW8B1mafS7Z8Ul4--kqYdN8",
    authDomain: "botogram-ea250.firebaseapp.com",
    projectId: "botogram-ea250",
    storageBucket: "botogram-ea250.appspot.com",
    messagingSenderId: "749057689940",
    appId: "1:749057689940:web:a62b1fe2662131413be0c1"
}).auth();