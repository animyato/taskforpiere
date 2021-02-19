button = document.getElementById("goToTop");

window.onscroll = function() {scroll()};


//Makes button appear and disapear
function scroll() {
  if (document.body.scrollTop > 40 || document.documentElement.scrollTop > 40) {
    button.style.display = "block";
  } else {
    button.style.display = "none";
  }
}

//Scrolls to top of the page
function goToTop() {
  document.body.scrollTop = 0; 
  document.documentElement.scrollTop = 0;
}
