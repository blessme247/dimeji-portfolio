$(document).ready(function($) {
  
  var alterClass = function() {
    var ww = document.body.clientWidth;
    if (ww < 568) {
      
      skillsHeader.forEach((h) => h.addEventListener("click", toggleSkills));
    } else if (ww >= 568) {
      $('.skills__content').removeClass('skills__close');
      $('.skills__arrow').hide();
    };
  };
  $(window).resize(function(){
    alterClass();
  });
  //Fire it when the page first loads:
  alterClass();
});

const navMenu = document.getElementsByClassName("mb_nav"),
  navToggle = document.getElementsByClassName("mb-menu"),
  navClose = document.getElementsByClassName("uil-times"),
  navLink = document.querySelectorAll(".nav__link");
// When we click on the navToggle, we add the left menu class
if (navToggle) {
  navToggle[0].addEventListener("click", () => {
    console.log("clicked")
    navMenu[0].classList.add("left");
  });
}

// When we click on the navClose, we remove the left menu class
if (navClose) {
  navClose[0].addEventListener("click", () => {
    navMenu[0].classList.remove("left");
  });
}

// when we click on the navLink, we remove the left menu class
function linkAction() {
  // When we click on each nav__link, we remove the show-menu class
  navMenu[0].classList.remove("left");
}
navLink.forEach((n) => n.addEventListener("click", linkAction));


// Acordion skills section
const skillsContent = document.getElementsByClassName("skills__content"),
  skillsHeader = document.querySelectorAll(".skills__header");

function toggleSkills() {
  let itemClass = this.parentNode.className;

  for (let i = 0; i < skillsContent.length; i++) {
    skillsContent[i].className = "skills__content skills__close";
  }
  if (itemClass === "skills__content skills__close") {
    this.parentNode.className = "skills__content skills__open";
  }
}




// Portfolio slider 
let swiper = new Swiper(".portfolio__container", {
  cssMode: true,
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  
  

});
