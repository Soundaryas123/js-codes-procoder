const hamburgerIcon = document.querySelector(".hamburger-menu-container");
const headerContent = document.querySelector(".header-content");
const closeIcon = document.querySelector(".close-icon");
const gotoTop = document.querySelector(".goto-top");
const navItems = document.querySelectorAll(".nav-item");

hamburgerIcon.addEventListener("click", () => {
  headerContent.classList.add("menu-open");
});
closeIcon.addEventListener("click", () => {
  headerContent.classList.remove("menu-open");
});
gotoTop.addEventListener("click", () => {
  scrollTo(0, 0);
});
navItems.forEach((navItem) => {
  navItem.addEventListener("click", () => {
    headerContent.classList.remove("menu-open");
  });
});
