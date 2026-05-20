// ==========================
// SCROLL SUAVE
// ==========================

const links = document.querySelectorAll("nav a");

links.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();

    const sectionId = link.getAttribute("href");

    const section = document.querySelector(sectionId);

    section.scrollIntoView({
      behavior: "smooth",
    });
  });
});

// ==========================
// ANIMACIÓN AL HACER SCROLL
// ==========================

const sections = document.querySelectorAll(".fade-in");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  },
  {
    threshold: 0.2,
  },
);

sections.forEach((section) => {
  observer.observe(section);
});

// ==========================
// BOTÓN CTA
// ==========================

const button = document.querySelector(".cta button");

button.addEventListener("click", () => {
  alert("Gracias por apoyar la iniciativa Hambre Cero ❤️");
});

// ==========================
// EFECTO NAVBAR
// ==========================

const nav = document.querySelector("nav");

window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    nav.style.background = "#1b5e20";
    nav.style.boxShadow = "0 5px 10px rgba(0,0,0,0.3)";
  } else {
    nav.style.background = "transparent";
    nav.style.boxShadow = "none";
  }
});

// ==========================
// EFECTO PARALLAX HERO
// ==========================

const hero = document.querySelector(".hero");

window.addEventListener("scroll", () => {
  let scroll = window.pageYOffset;

  hero.style.backgroundPositionY = scroll * 0.5 + "px";
});

// ==========================
// EFECTO EN SOLUTION BOX
// ==========================

const boxes = document.querySelectorAll(".solution-box");

boxes.forEach((box) => {
  box.addEventListener("mouseenter", () => {
    box.style.transform = "scale(1.05)";
  });

  box.addEventListener("mouseleave", () => {
    box.style.transform = "scale(1)";
  });
});
