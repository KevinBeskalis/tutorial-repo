const div = document.querySelector("#myDiv");

div.style.backgroundColor = "black";
div.style.height = "150px";
div.style.width = "150px";

div.addEventListener("mousedown", e => {
    console.log("you are holding the mouse down");
    div.style.backgroundColor = "red";
})

div.addEventListener("mouseup", e => {
    console.log("you let go of the mouse");
    div.style.backgroundColor = "black";
    
})
