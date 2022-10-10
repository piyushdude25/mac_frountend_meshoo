import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAENUpDv28ViSMuATEuiOIY7K_M4vn_jFU",
  authDomain: "meshooclone.firebaseapp.com",
  projectId: "meshooclone",
  storageBucket: "meshooclone.appspot.com",
  messagingSenderId: "316032118242",
  appId: "1:316032118242:web:e6b8bbc54f88909a8e5dbb",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
