  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyBDNflvIbB-473-c6rI_Pslbt0XZAbebmk",
    authDomain: "fir-34d5d.firebaseapp.com",
    projectId: "fir-34d5d",
    storageBucket: "fir-34d5d.appspot.com",
    messagingSenderId: "487865207891",
    appId: "1:487865207891:web:d48ded3cd790b3b8218aa6",
    measurementId: "G-MBXL3EM5N0"
  };

  // Initialize Firebase
  export const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);