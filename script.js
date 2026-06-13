
// TYPING ANIMATION

const typingText = document.querySelector(".typing-text");

const words = [
  "Frontend Developer",
  "IT Student",
  "Web Designer",
  "JavaScript Learner",
  "Future IT Engineer"
];

let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect() {

  const currentWord = words[wordIndex];

  if (!typingText) return;

  if (!isDeleting) {
    typingText.textContent = currentWord.substring(0, charIndex + 1);
    charIndex++;

    if (charIndex === currentWord.length) {
      isDeleting = true;
      setTimeout(typeEffect, 1500);
      return;
    }

  } else {
    typingText.textContent = currentWord.substring(0, charIndex - 1);
    charIndex--;

    if (charIndex === 0) {
      isDeleting = false;
      wordIndex++;

      if (wordIndex === words.length) {
        wordIndex = 0;
      }
    }
  }

  setTimeout(typeEffect, isDeleting ? 60 : 120);
}

typeEffect();


// SCROLL REVEAL ANIMATION

const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver((entries) => {

  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });

}, { threshold: 0.15 });

sections.forEach((section) => {
  observer.observe(section);
});

// ACTIVE NAVBAR LINK

const navItems = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

  let currentSection = "";

  sections.forEach((section) => {

    const sectionTop = section.offsetTop - 150;

    if (window.scrollY >= sectionTop) {
      currentSection = section.getAttribute("id");
    }

  });

  navItems.forEach((link) => {

    link.classList.remove("active");

    if (link.getAttribute("href") === `#${currentSection}`) {
      link.classList.add("active");
    }

  });

});


// HAMBURGER MENU (FIXED)

const hamburger = document.getElementById("hamburger");
const mobileMenu = document.getElementById("navLinks");

if (hamburger && mobileMenu) {
  hamburger.addEventListener("click", () => {
    mobileMenu.classList.toggle("active");
  });
}

// CONTACT FORM

const contactForm = document.querySelector(".contact-form");

if (contactForm) {

  contactForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.querySelector('input[type="text"]').value;
    const email = document.querySelector('input[type="email"]').value;
    const message = document.querySelector("textarea").value;

    if (name === "" || email === "" || message === "") {
      alert("Please fill all fields.");
      return;
    }

    alert("Message Sent Successfully!");
    contactForm.reset();
  });

}


// BUTTON HOVER EFFECT

const buttons = document.querySelectorAll(".btn, .project-btns a");

buttons.forEach((button) => {

  button.addEventListener("mouseenter", () => {
    button.style.transform = "translateY(-5px)";
  });

  button.addEventListener("mouseleave", () => {
    button.style.transform = "translateY(0)";
  });

});


// NAVBAR BACKGROUND ON SCROL

window.addEventListener("scroll", () => {

  const header = document.querySelector("header");

  if (!header) return;

  if (window.scrollY > 50) {
    header.style.background = "rgba(7,11,26,0.95)";
    header.style.boxShadow = "0 10px 30px rgba(0,0,0,0.3)";
  } else {
    header.style.background = "rgba(0,0,0,0.25)";
    header.style.boxShadow = "none";
  }

});


// FOOTER YEAR

const footerText = document.querySelector("footer p");

if (footerText) {
  const currentYear = new Date().getFullYear();
  footerText.innerHTML = `© ${currentYear} Om Pirkash | Frontend Developer`;
}