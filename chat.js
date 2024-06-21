// script.js
document.getElementById("menu-icon").addEventListener("click", function () {
  var navbar = document.getElementById("navbar");
  navbar.classList.toggle("responsive");
  this.classList.toggle("active");
});
