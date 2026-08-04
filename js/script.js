const menuButton = document.querySelector(".menu-button");
const navLinks = document.querySelector(".nav-links");
const navItems = document.querySelectorAll(".nav-links a");

if (menuButton && navLinks) {
  menuButton.addEventListener("click", () => {
    navLinks.classList.toggle("active");
    document.body.classList.toggle("menu-open");
  });
}

navItems.forEach((item) => {
  item.addEventListener("click", () => {
    navLinks.classList.remove("active");
    document.body.classList.remove("menu-open");
  });
});