/* =========================================================
   PORTFOLIO JAVASCRIPT
   ========================================================= */


/* =========================================================
   INTRO SCREEN
   ========================================================= */

const introScreen = document.querySelector(".intro-screen");

document.body.classList.add("intro-active");

window.addEventListener("load", function () {

  if (!introScreen) {
    document.body.classList.remove("intro-active");
    return;
  }

  setTimeout(function () {

    introScreen.classList.add("hide");

    document.body.classList.remove("intro-active");

  }, 2600);

});


/* =========================================================
   MOBILE MENU
   ========================================================= */

const menuButton = document.querySelector(".menu");
const mobileNav = document.querySelector(".mobile-nav");

if (menuButton && mobileNav) {

  menuButton.addEventListener("click", function () {

    mobileNav.classList.toggle("open");

  });

}


const mobileLinks = document.querySelectorAll(".mobile-nav a");

mobileLinks.forEach(function (link) {

  link.addEventListener("click", function () {

    mobileNav.classList.remove("open");

  });

});


document.addEventListener("keydown", function (event) {

  if (event.key === "Escape") {

    if (mobileNav) {
      mobileNav.classList.remove("open");
    }

  }

});


/* =========================================================
   HEADER SCROLL EFFECT
   ========================================================= */

const header = document.querySelector(".header");

window.addEventListener("scroll", function () {

  if (!header) {
    return;
  }

  if (window.scrollY > 40) {

    header.classList.add("scrolled");

  } else {

    header.classList.remove("scrolled");

  }

});


/* =========================================================
   SCROLL REVEAL
   ========================================================= */

const revealElements = document.querySelectorAll(
  ".section > .label, " +
  ".two > *, " +
  ".case-head > *, " +
  ".skills > div, " +
  ".palette, " +
  ".image-frame, " +
  ".image-grid-2 > *, " +
  ".card, " +
  ".metrics > div, " +
  ".strategy, " +
  ".hooklab, " +
  ".ai, " +
  ".capabilities > div"
);


if ("IntersectionObserver" in window) {

  const revealObserver = new IntersectionObserver(
    function (entries) {

      entries.forEach(function (entry) {

        if (entry.isIntersecting) {

          entry.target.classList.add("visible");

          revealObserver.unobserve(entry.target);

        }

      });

    },
    {
      threshold: 0.12
    }
  );


  revealElements.forEach(function (element) {

    revealObserver.observe(element);

  });

}


/* =========================================================
   CUSTOM CURSOR
   ========================================================= */

const cursorDot = document.querySelector(".cursor-dot");
const cursorCircle = document.querySelector(".cursor-circle");


let mouseX = 0;
let mouseY = 0;

let circleX = 0;
let circleY = 0;


document.addEventListener("mousemove", function (event) {

  mouseX = event.clientX;
  mouseY = event.clientY;


  if (cursorDot) {

    cursorDot.style.left = mouseX + "px";
    cursorDot.style.top = mouseY + "px";

  }

});


function animateCursor() {

  circleX += (mouseX - circleX) * 0.14;
  circleY += (mouseY - circleY) * 0.14;


  if (cursorCircle) {

    cursorCircle.style.left = circleX + "px";
    cursorCircle.style.top = circleY + "px";

  }


  requestAnimationFrame(animateCursor);

}


animateCursor();


/* =========================================================
   CURSOR HOVER
   ========================================================= */

const cursorTargets = document.querySelectorAll(
  "a, button, .tag, .image-frame, .skills > div, .metrics > div, .card"
);


cursorTargets.forEach(function (element) {

  element.addEventListener("mouseenter", function () {

    if (cursorCircle) {

      cursorCircle.classList.add("hover");

    }

  });


  element.addEventListener("mouseleave", function () {

    if (cursorCircle) {

      cursorCircle.classList.remove("hover");

    }

  });

});


/* =========================================================
   HERO PARALLAX
   ========================================================= */

const heroTitle = document.querySelector(".hero h1");


document.addEventListener("mousemove", function (event) {

  if (!heroTitle) {
    return;
  }


  if (window.innerWidth <= 850) {
    return;
  }


  const x =
    (event.clientX / window.innerWidth - 0.5) * 8;


  const y =
    (event.clientY / window.innerHeight - 0.5) * 5;


  heroTitle.style.transform =
    "translate(" + x + "px, " + y + "px)";

});


/* =========================================================
   MAGNETIC BUTTONS
   ========================================================= */

const buttons = document.querySelectorAll(".btn");


buttons.forEach(function (button) {

  button.addEventListener("mousemove", function (event) {

    if (window.innerWidth <= 850) {
      return;
    }


    const rectangle =
      button.getBoundingClientRect();


    const x =
      event.clientX -
      rectangle.left -
      rectangle.width / 2;


    const y =
      event.clientY -
      rectangle.top -
      rectangle.height / 2;


    button.style.transform =
      "translate(" +
      x * 0.12 +
      "px, " +
      y * 0.12 +
      "px)";

  });


  button.addEventListener("mouseleave", function () {

    button.style.transform = "";

  });

});