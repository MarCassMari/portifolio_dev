const navLinks = document.querySelectorAll("nav ul li a");

navLinks.forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault();

    const targetId = link.getAttribute("href");

    const targetSection = document.querySelector(targetId);

    if (targetSection) {
      targetSection.scrollIntoView({
        behavior: "smooth",
      });
    }
    const scroll = new SmoothScroll('a[href*="#"]', {
      speed: 900,
      speedAsDuration: true,
    });
  });
});
