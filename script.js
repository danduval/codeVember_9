const div = document.getElementById("the_div");
const box = document.getElementById("open_box");
const box_div = document.getElementById("box_div");

div.addEventListener("click", function() {div.classList.add("modified")});
div.addEventListener("click", function() {div.classList.remove("original")});
div.addEventListener("click", function() {div.innerHTML = ""});
div.addEventListener("click", function() {box.innerHTML = "Click over here to close it again."});
div.addEventListener("click", function() {box_div.classList.add("modified")});
div.addEventListener("click", function() {box_div.style.visibility = "visible"});


box_div.addEventListener("click", function() {div.innerHTML = "Click somewhere in this box to open it."});
box_div.addEventListener("click", function() {div.classList.add("original")});
box_div.addEventListener("click", function() {div.classList.remove("modified")});
box_div.addEventListener("click", function() {box.innerHTML = ""});
box_div.addEventListener("click", function() {box_div.style.visibility = "hidden"});
