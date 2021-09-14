
//ADD YOUR FIREBASE LINKS HERE
const firebaseConfig = {
      apiKey: "AIzaSyBKco3hj6IdDzNCNUVAD-gMpXgGDxCUOKQ",
      authDomain: "class-test-8c5e6.firebaseapp.com",
      databaseURL: "https://class-test-8c5e6-default-rtdb.firebaseio.com",
      projectId: "class-test-8c5e6",
      storageBucket: "class-test-8c5e6.appspot.com",
      messagingSenderId: "674991872148",
      appId: "1:674991872148:web:b9334a03834486cb6dfc81"
    };

    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    
var user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML= "Welcome "+ user_name + "!";

function addRoom(){
      room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose : "adding room name"
          });
          localStorage.setItem("room_name", room_name);
         window.location= "kwitter_page.html";
}
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Roomname - " + Room_names);
      row= "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'> #" +Room_names + "</div><hr>";
      document.getElementById("output").innerHTML += row;


      //End code
      });});}
getData();
 
function redirectToRoomName(name){
console.log(name);
localStorage.setItem("room_name", name);
window.location = "kwitter_page.html";
}

function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location= "index.html";

}