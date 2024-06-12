const { initializeApp } = require("firebase/app");
const { getDatabase } = require("firebase/database");
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBMKYmlMPosaTMFobSaY4PtioT0ddDlvi0",
  authDomain: "zoozoowin-a8a38.firebaseapp.com",
  databaseURL: "https://zoozoowin-a8a38-default-rtdb.firebaseio.com",
  projectId: "zoozoowin-a8a38",
  storageBucket: "zoozoowin-a8a38.appspot.com",
  messagingSenderId: "920723721120",
  appId: "1:920723721120:web:6fba7f840084f3f9ccf2c5",
  measurementId: "G-2MP48CSW58"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

module.exports = database;