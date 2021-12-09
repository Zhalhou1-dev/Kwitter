user_name=localStorage.getItem("store");
room_name=localStorage.getItem("");
const firebaseConfig = {
    apiKey: "AIzaSyCvINzWyBJHtAMK3u3sQr3nU6x19RwxJA4",
    authDomain: "let-s-chat-e00c2.firebaseapp.com",
    databaseURL: "https://let-s-chat-e00c2-default-rtdb.firebaseio.com",
    projectId: "let-s-chat-e00c2",
    storageBucket: "let-s-chat-e00c2.appspot.com",
    messagingSenderId: "319749372440",
    appId: "1:319749372440:web:617f97aa0c0b1dda73216d"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);