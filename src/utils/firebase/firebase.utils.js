import { initializeApp } from 'firebase/app';

import { getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';

import { getFirestore, doc ,getDoc, setDoc } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCyhHAMKXJnUjZ4n5cvPML3dWAE4I04r3c",
    authDomain: "crown-clothing-c77fe.firebaseapp.com",
    projectId: "crown-clothing-c77fe",
    storageBucket: "crown-clothing-c77fe.appspot.com",
    messagingSenderId: "522411680494",
    appId: "1:522411680494:web:b3d783c06cd25404d8c9ff"
  };
  
  const app = initializeApp(firebaseConfig);

  const provider = new GoogleAuthProvider();

  provider.setCustomParameters({
     prompt: 'select_account',
  });

  export const auth = getAuth();
  export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

  export const db = getFirestore();

  export const createUserDocumentFromAuth = async (userAuth) => {
    const userDocRef = doc(db, 'users', userAuth.uid)

    console.log(userDocRef);

    const userSnapshot = await getDoc(userDocRef);
    console.log(userSnapshot);
    console.log(userSnapshot.exists());

    if(!userSnapshot.exists()){
        const { displayName, email } = userAuth;
        const createdAt = new Date();
  
        try {
          await setDoc(userDocRef, {
              displayName,
              email,
              createdAt,
          });
        }
        catch(error){
          console.log('error creating the user', error.message);
        }
    }

  }

  

  

