import React, { useState, useEffect } from 'react';
import { firebase } from './firebase';

export const FirebaseAuthComponent: React.FC = () => {
  const loggedin = useFirebaseLogin();
  if (!loggedin) {
    return <button onClick={() => signInWithPopup()}>ログイン</button>;
  }
  return <button onClick={() => signOut()}>ログアウト</button>;
}
const signInWithPopup = () => {
  const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
  return firebase.auth().signInWithPopup(googleAuthProvider);
}
const signOut = () => {
  return firebase.auth().signOut();
}
const useFirebaseLogin = () => {
  const [loggedin, setLoggedin] = useState(false);
  useEffect(() => {
    firebase.auth().onAuthStateChanged(user => {
      setLoggedin(!!user);
    });
  }, []);

  return loggedin;
};