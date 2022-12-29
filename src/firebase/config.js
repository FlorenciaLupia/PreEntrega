import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDommMQC8U1OnmxZgciaJU0t2LV4-iidRc",
  authDomain: "chicagobikinis.firebaseapp.com",
  projectId: "chicagobikinis",
  storageBucket: "chicagobikinis.appspot.com",
  messagingSenderId: "1069837108392",
  appId: "1:1069837108392:web:041a34c8e2a4cd4157ae9d"
};

const app = initializeApp(firebaseConfig);

export const initFirestore = () => app