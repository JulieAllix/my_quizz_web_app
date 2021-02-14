import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

const firebaseConfig = {
    apiKey: "AIzaSyCePKcGh2lb_VrTQuJnZXAKn0UIgIX8kFA",
    authDomain: "easy-quizzy.firebaseapp.com",
    projectId: "easy-quizzy",
    storageBucket: "easy-quizzy.appspot.com",
    messagingSenderId: "838385013170",
    appId: "1:838385013170:web:bf0ee8a708b04bc1f454ab",
    measurementId: "G-8L4R8XZ7YW",
    databaseURL: "https://easy-quizzy-default-rtdb.firebaseio.com/",
};

firebase.initializeApp(firebaseConfig);

export const database = firebase.database();
export const auth = firebase.auth();

export const loginWithEmailAndPassword = (email:string,password:string) =>{
    return auth.signInWithEmailAndPassword(email,password);
}

export const registerWithEmailAndPassword = (email:string,password:string) =>{
    return auth.createUserWithEmailAndPassword(email,password);
}

export const createTheme = (name:string, userId: string) => {
    return database.ref('users/' + userId).set({
        themeName: name
    })
}
/*
export const resetPassword = (email) => {
    return auth.sendPasswordResetEmail(email);
}

 */