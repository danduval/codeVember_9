const div = document.getElementById("the_div");

div.addEventListener("click", function() {div.classList.add("modified")});
div.addEventListener("click", function() {div.classList.remove("original")});