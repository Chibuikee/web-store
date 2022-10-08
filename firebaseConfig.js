import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyA3y7VI45Baz1fo49_OWKe3LmJCW2g2_hA",
  authDomain: "web-store-57434.firebaseapp.com",
  projectId: "web-store-57434",
  storageBucket: "web-store-57434.appspot.com",
  messagingSenderId: "148611961600",
  appId: "1:148611961600:web:dda86c9a27f80e2209d9e5",
  measurementId: "G-LBZ33TEZWE",
};

// Initialize Firebase
const firebaseapp = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const storage = getStorage(firebaseapp);
export const db = getFirestore(firebaseapp);
