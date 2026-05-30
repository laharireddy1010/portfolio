// Typing Animation

const typing = document.querySelector(".typing");

const words = [
  "CSE Student",
  "Frontend Developer",
  "Web Developer",
  "Tech Enthusiast"
];

let wordIndex = 0;
let letterIndex = 0;

function typeEffect() {

  if (letterIndex < words[wordIndex].length) {

    typing.textContent += words[wordIndex].charAt(letterIndex);

    letterIndex++;

    setTimeout(typeEffect, 100);

  } else {

    setTimeout(eraseEffect, 1500);

  }

}

function eraseEffect() {

  if (typing.textContent.length > 0) {

    typing.textContent =
      typing.textContent.slice(0, -1);

    setTimeout(eraseEffect, 50);

  } else {

    wordIndex++;

    if (wordIndex >= words.length) {
      wordIndex = 0;
    }

    letterIndex = 0;

    setTimeout(typeEffect, 500);

  }

}

typeEffect();


// Navbar Background Change on Scroll

window.addEventListener("scroll", () => {

  const navbar = document.querySelector(".navbar");

  if (window.scrollY > 50) {

    navbar.style.background = "rgba(15,23,42,0.95)";
    navbar.style.boxShadow = "0 5px 20px rgba(0,0,0,0.3)";

  } else {

    navbar.style.background = "rgba(255,255,255,0.08)";
    navbar.style.boxShadow = "none";

  }

});


// Active Navbar Link Highlight

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

  let current = "";

  sections.forEach(section => {

    const sectionTop = section.offsetTop - 150;

    if (pageYOffset >= sectionTop) {

      current = section.getAttribute("id");

    }

  });

  navLinks.forEach(link => {

    link.classList.remove("active");

    if (link.getAttribute("href").includes(current)) {

      link.classList.add("active");

    }

  });

});


// Scroll Reveal Animation

const revealElements = document.querySelectorAll(
  ".about, .skills, .projects, .contact, .project-card, .skill-card"
);

function reveal() {

  revealElements.forEach(element => {

    const windowHeight = window.innerHeight;
    const revealTop = element.getBoundingClientRect().top;
    const revealPoint = 100;

    if (revealTop < windowHeight - revealPoint) {

      element.classList.add("show");

    }

  });

}

window.addEventListener("scroll", reveal);

reveal();


// Contact Form Message

const form = document.querySelector(".contact-form");

if (form) {

  form.addEventListener("submit", function(e) {

    e.preventDefault();

    alert("Thank you, Lahari! Your message has been submitted successfully.");

    form.reset();

  });

}


// Smooth Scroll Effect

document.querySelectorAll