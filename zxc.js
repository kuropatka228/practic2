const image = document.getElementById("responsive-image");

function checkScreenSize() {
  if (window.innerWidth <= 768) { 
    image.src = "/img/people2_mini.png";
  } else {
    image.src = "/img/people2.png";
  }
}
window.addEventListener("load", checkScreenSize);
window.addEventListener("resize", checkScreenSize);

