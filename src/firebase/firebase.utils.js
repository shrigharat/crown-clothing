import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyCoEHq8cjCcOByB-yS2Yh7TJ1P_LPKZRhE",
    authDomain: "crown-db-f39a5.firebaseapp.com",
    databaseURL: "https://crown-db-f39a5.firebaseio.com",
    projectId: "crown-db-f39a5",
    storageBucket: "crown-db-f39a5.appspot.com",
    messagingSenderId: "1021528531906",
    appId: "1:1021528531906:web:0eaf8ef00665e563c16c5b"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if(!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapshot = await userRef.get();

    if(!snapshot.exists) {
        const createdAt = new Date();
        const {displayName, email} = userAuth;
        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            });
        } catch(e) {
            console.log('Error creating user : ' + e.message);
        }

    }
    return userRef;
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'})
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
