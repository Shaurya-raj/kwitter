var firebaseConfig = {
      apiKey: "AIzaSyAktErHevfkrAilKNtvkJFEJuyfWfYSw_g",
      authDomain: "kwitter-38c09.firebaseapp.com",
      databaseURL: "https://kwitter-38c09-default-rtdb.firebaseio.com",
      projectId: "kwitter-38c09",
      storageBucket: "kwitter-38c09.appspot.com",
      messagingSenderId: "38500238055",
      appId: "1:38500238055:web:5f921e86ac9d9f99755842",
      measurementId: "G-ERWKZSRL4F"
    };
    
    // Initialize Firebase
   firebase.initializeApp(firebaseConfig);


// Initialize Firebase

username = localStorage.getItem("username_key");
document.getElementById("username").innerHTML = "welcome " + username + "!"

function addRoom() {
      var roomnm = document.getElementById("adrom").value;
      localStorage.setItem("roomname_key", roomnm);
      firebase.database().ref("/").child(roomnm).update({
            purpose: "adding_room"
      });
      window.location = "kwitter_page.html"

}

function getData() {
      firebase.database().ref("/").on('value', function (snapshot) {
            document.getElementById("output").innerHTML = "";
            snapshot.forEach(function (childSnapshot) {
                  childKey = childSnapshot.key;
                  Room_names = childKey;
                  //Start code
                  console.log(Room_names);
                  row = "<div id='" + Room_names + "' onclick='redirect(this.id)' class='room_name'>" + Room_names + "</div><hr>";
                  document.getElementById("output").innerHTML += row;

                  //End code
            });
      });
}
getData();

function redirect(currentRoom){
      console.log(currentRoom);
      localStorage.setItem("roomname_key",currentRoom);
      window.location="kwitter_page.html";
}
function logout(){
      localStorage.removeItem("username_key");
      localStorage.removeItem("roomname_key");
      window.location="index.html";
}