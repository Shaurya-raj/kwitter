function login() {
    var user = document.getElementById("Tuser").value;
    localStorage.setItem("username_key",user);
    window.location="kwitter_room.html";
}