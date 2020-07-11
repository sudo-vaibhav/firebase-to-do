// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyDtEw2tNrSQATILIgNzfqJhlYm_Eu9lUgI",
  authDomain: "to-do-app-6b600.firebaseapp.com",
  databaseURL: "https://to-do-app-6b600.firebaseio.com",
  projectId: "to-do-app-6b600",
  storageBucket: "to-do-app-6b600.appspot.com",
  messagingSenderId: "385214361553",
  appId: "1:385214361553:web:3c497f66e9d6c095333af0",
};
// Initialize Firebase

firebase.initializeApp(firebaseConfig);
var db = firebase.firestore();
