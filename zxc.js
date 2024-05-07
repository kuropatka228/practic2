const image = document.getElementById("responsive_image");

function checkScreenSize() {
  if (window.innerWidth <= 768) { 
    image.src = "img/people2-mini.png";
  } else {
    image.src = "img/people2.png";
  }
}
window.addEventListener("load", checkScreenSize);
window.addEventListener("resize", checkScreenSize);

