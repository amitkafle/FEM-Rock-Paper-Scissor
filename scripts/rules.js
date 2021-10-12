const rules_btn = document.querySelector(".btn__rules");
const layer = document.querySelector(".layer");
const rules_overlay = document.querySelector(".overlay__card");
const rules_close = document.querySelector(".overlay__close");
const container = document.querySelector(".container");

rules_btn.addEventListener("click", () => {
  layer.classList.add("container--overlay");
  rules_overlay.classList.remove("overlay__card--toggle");
  container.classList.add("pointer-none");
});

rules_close.addEventListener("click", () => {
  layer.classList.remove("container--overlay");
  rules_overlay.classList.add("overlay__card--toggle");
  container.classList.remove("pointer-none");
});
