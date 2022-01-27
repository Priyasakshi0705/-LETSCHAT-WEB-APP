//YOUR FIREBASE LINKS
var firebaseConfig = {
    apiKey: "AIzaSyD9TDdVSDxKGFaLzQk_wQ16ft9wNKGhiSQ",
    authDomain: "ooter-150fe.firebaseapp.com",
    databaseURL: "https://ooter-150fe-default-rtdb.firebaseio.com",
    projectId: "ooter-150fe",
    storageBucket: "ooter-150fe.appspot.com",
    messagingSenderId: "52919974202",
    appId: "1:52919974202:web:7f915d8ba01dc2fec5b803"
  };
  

firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("User");
room_name = localStorage.getItem("Room Name");

function send(){
    msg = document.getElementById("msg_input").value;
    firebase.database().ref(room_name).push({
        Name:user_name,
        Message: msg,
        Like: 0
    });
    document.getElementById("msg_input").value = "";
}



function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
    firebase_message_id = childKey;
     // firebase_message_id variable is suppose to hold all the unique message ids generated automatically by the firebase.
    message_data = childData;
   
    //message_data variable to hold all the messages, likes and username for every message.. 
    //its like an array holding the three values that we pushed earlier
//Start code

//End code
 } });  }); }
getData();


function logOut(){
    window.location= "index.html";
    localStorage.removeItem("User");
    localStorage.removeItem("Room Name");
}

function Back(){
    window.location= "Ooter_room.html";
    localStorage.removeItem("Room Name");
}