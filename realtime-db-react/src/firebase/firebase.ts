import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

const firebaseConfig = {
};

firebase.initializeApp(firebaseConfig);
export { firebase };