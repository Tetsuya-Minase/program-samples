import React, { useState, useEffect } from 'react';
import { firebase } from './firebase';

export const FirebaseAuthComponent: React.FC = () => {
  const { loggedin } = useFirebaseLogin();
  if (!loggedin) {
    return <button onClick={() => signInWithRedirect()}>ログイン</button>;
  }
  return <button onClick={() => signOut()}>ログアウト</button>;
}
const signInWithRedirect = () => {
  const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
  return firebase.auth().signInWithRedirect(googleAuthProvider);
}
const signOut = () => {
  return firebase.auth().signOut();
}
const useFirebaseLogin = () => {
  const [loggedin, setLoggedin] = useState(false);
  useEffect(() => {
    firebase.auth().onAuthStateChanged(async user => {
      setLoggedin(!!user);
    });
  }, []);

  return { loggedin };
};