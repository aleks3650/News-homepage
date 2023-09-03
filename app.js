const BURGER = document.querySelector(".burger");
const BURGER_MENU = document.querySelector(".burger-menu");

BURGER.addEventListener("click", () => {
  BURGER_MENU.classList.toggle("active");
});
