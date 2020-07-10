import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

const firebaseConfig = {
  apiKey: "AIzaSyCoUxct-19Al3ExBoRVMp4_MS9tAirEOh0",
  authDomain: "fir-db-c228d.firebaseapp.com",
  databaseURL: "https://fir-db-c228d.firebaseio.com",
  projectId: "fir-db-c228d",
  storageBucket: "fir-db-c228d.appspot.com",
  messagingSenderId: "256693610913",
  appId: "1:256693610913:web:04a2c2d7eff837b3b443e0"
};

firebase.initializeApp(firebaseConfig);
export { firebase };