function addUser(){
    name=document.getElementById("username").value;
    localStorage.setItem("userName", name);
    
}