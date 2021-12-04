function log(){
    window.location("kwitter.html");
}
user=localStorage.getItem("user_name");
function addRoom(){
    document.getElementById("add").value;
    input=document.getElementById("username").value;
    localStorage.setItem("store",input);
    window.location("kwitter_page.html");
}
function getData() {firebase.database().ref("/").on('value',
function(snapshot) {document.getElementById("output").innerHTML =
"";snapshot.forEach(function(childSnapshot) {childKey = childSnapshot.key;
Room_names = childKey;
//Start code
div="<div id='room'></div>"
                                             
//End code
});});}
getData();
function redirecttoroomname(){
localStorage.setItem("room_name",input);
window.location("kwitter_page.html");
}
