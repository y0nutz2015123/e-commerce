import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";

import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDF2bSpKua5ff0VI3a-uoXceiJUKulAIWQ",
  authDomain: "e-commerce-v2-6e7ff.firebaseapp.com",
  projectId: "e-commerce-v2-6e7ff",
  storageBucket: "e-commerce-v2-6e7ff.appspot.com",
  messagingSenderId: "551505409247",
  appId: "1:551505409247:web:9cf1fde233fd1fdb6fe56a",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
  const userDocRef = doc(db, "users", userAuth.uid);

  console.log(userDocRef);

  const userSnapshot = await getDoc(userDocRef);
  console.log(userSnapshot);
  console.log(userSnapshot.exists());

  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
      });
    } catch (error) {
      console.log("ERROR creating the user!!!", error.message);
    }
  }

  return userDocRef;

  // if user data does not exists
  // create / set document with the data from userAuth in my collection

  // if user data exists
  // return userDocRef
};