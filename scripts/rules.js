const rules_btn = document.querySelector(".btn__rules");
const layer = document.querySelector(".layer");
const rules_overlay = document.querySelector(".overlay__card");
const rules_close = document.querySelector(".overlay__close");
const container = document.querySelector(".container");

rules_btn.addEventListener("click", () => {
  rules_overlay.classList.remove("scale-out");
  layer.classList.remove("scale-out-overlay");
  layer.classList.add("container--overlay");
  rules_overlay.classList.remove("overlay__card--toggle");
  rules_overlay.classList.add("scale-in");
  layer.classList.add("scale-in-overlay");
  container.classList.add("pointer-none");
});

rules_close.addEventListener("click", () => {
  rules_overlay.classList.remove("scale-in");
  rules_overlay.classList.add("scale-out");
  layer.classList.add("scale-out-overlay");
  setTimeout(()=>{
    layer.classList.remove("container--overlay");
    rules_overlay.classList.add("overlay__card--toggle");
    container.classList.remove("pointer-none");
  },200)
});
