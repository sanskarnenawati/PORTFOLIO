window.onscroll = function(){myfunction()};
var navbar = document.getElementById("stick");
var sticky = navbar.offsetTop;
function myFunction() {
    if (window.pageYOffset > sticky) {
      header.classList.add("sticky");
    } else {
      header.classList.remove("sticky");
    }
  }