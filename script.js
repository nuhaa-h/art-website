// Smooth scroll for in-page links (nav, scroll indicator)
document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener("click", (event) => {
    const target = document.querySelector(link.getAttribute("href"));
    if (target) {
      event.preventDefault();
      target.scrollIntoView({ behavior: "smooth" });
    }
  });
});

// "Next Collection" cycles the grid into view with a highlight nudge
const nextCollection = document.querySelector(".next-collection");
if (nextCollection) {
  nextCollection.addEventListener("click", () => {
    document.querySelector(".collections-grid")?.scrollIntoView({
      behavior: "smooth",
      block: "center",
    });
  });
}

// Scroll-reveal animations
const revealTargets = document.querySelectorAll(".reveal-up, .footer-image img");

if ("IntersectionObserver" in window) {
  const revealObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }
  );

  revealTargets.forEach((el) => revealObserver.observe(el));
} else {
  revealTargets.forEach((el) => el.classList.add("is-visible"));
}

// Subtle parallax drift on the hero painting while scrolling
const heroImage = document.querySelector(".hero-image img");

if (heroImage && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
  let ticking = false;

  const updateParallax = () => {
    const offset = window.scrollY * 0.25;
    heroImage.style.setProperty("--parallax", `${offset}px`);
    ticking = false;
  };

  window.addEventListener("scroll", () => {
    if (!ticking) {
      window.requestAnimationFrame(updateParallax);
      ticking = true;
    }
  });
}
