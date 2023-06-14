// Import the functions you need from the SDKs you need
import {initializeApp} from 'firebase/app';
import {getAnalytics} from 'firebase/analytics';
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyAxjXDlZXrwUgCc1ubxpw-Sd_UKAN8EWOE',
  authDomain: 'rncliapp-f2ac0.firebaseapp.com',
  projectId: 'rncliapp-f2ac0',
  storageBucket: 'rncliapp-f2ac0.appspot.com',
  messagingSenderId: '886553902272',
  appId: '1:886553902272:web:84d9b086f859e18cbd4125',
  measurementId: 'G-QN0ESRN58F',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
export {app};
