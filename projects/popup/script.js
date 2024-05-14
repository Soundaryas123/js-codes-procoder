const popup = document.querySelector(".popup-container");
const button = document.querySelector("button");
const closeIcon = document.querySelector(".close-icon");
const subscribeBtn = document.querySelector(".subscribe");
const overlay = document.querySelector(".overlay");

button.addEventListener("click", () => {
  popup.classList.add("popup-open");
});
closeIcon.addEventListener("click", () => {
  popup.classList.remove("popup-open");
});
overlay.addEventListener("click", () => {
  popup.classList.remove("popup-open");
});
subscribeBtn.addEventListener("click", () => {
  popup.classList.remove("popup-open");
});
