"use strict";

function aparecer_vert_esq() {
  var x = document.getElementById("menu-vert-esq");

  if (x.style.display === "flex") {
    x.style.display = "none";
    document.body.style.overflow = "auto";
  } else {
    x.style.display = "flex";
    document.body.style.overflow = "hidden";
  }
}

var slideIndex = 1;
showSlides(slideIndex); // Next/previous controls

function plusSlides(n) {
  showSlides(slideIndex += n);
} // Thumbnail image controls


function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");

  if (n > slides.length) {
    slideIndex = 1;
  }

  if (n < 1) {
    slideIndex = slides.length;
  }

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  slides[slideIndex - 1].style.display = "block";
} // delay possible clicks until page is turned


document.getElementById('book').addEventListener('click', function (e) {
  e = this;
  e.style.pointerEvents = "none";
  setTimeout(function () {
    e.style.pointerEvents = "";
  }, 2000);
});