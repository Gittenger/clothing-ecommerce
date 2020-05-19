import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import "firebase/analytics";

const config = {
  apiKey: "AIzaSyBsb8REZ1YUCPAKqLMFaekZSYYj9PpJ-Qg",
  authDomain: "fir-ecommerce-fdeb4.firebaseapp.com",
  databaseURL: "https://fir-ecommerce-fdeb4.firebaseio.com",
  projectId: "fir-ecommerce-fdeb4",
  storageBucket: "fir-ecommerce-fdeb4.appspot.com",
  messagingSenderId: "675716961018",
  appId: "1:675716961018:web:c46c3fcb6753c22a55ef43",
};

firebase.initializeApp(config);
// firebase.analytics();

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapshot = await userRef.get();

  if (!snapshot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (err) {
      console.log("error creating user", err.message);
    }
  }
  return userRef;
};

export const getCurrentUser = () => {
  return new Promise((resolve, reject) => {
    const unsubscribe = auth.onAuthStateChanged((userAuth) => {
      unsubscribe();
      resolve(userAuth);
    }, reject);
  });
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

export const googleProvider = new firebase.auth.GoogleAuthProvider();
googleProvider.setCustomParameters({
  prompt: "select_account",
});

export const signInWithGoogle = () => auth.signInWithPopup(googleProvider);

export default firebase;
