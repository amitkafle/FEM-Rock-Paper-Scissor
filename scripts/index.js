const stepone = document.querySelector(".step_one");
const stepfour = document.querySelector(".step_four");
const display_score = document.querySelector(".score__score");
const resultmsg = document.querySelector(".result__title");

const userpickedbg = document.querySelector(".user__picked");
const userpickedicon = document.querySelector(".user__icon");

const housepickedbg = document.querySelector(".house__picked");
const housepickedicon = document.querySelector(".house__icon");

const playagain = document.querySelector(".play_again");

let user_selected_icon = "";
let house_selected_icon = "";
let result = "";
const icons = ["paper", "scissor", "rock"];
const game = {
  rock: {
    icon: "./images/icon-rock",
    beats: "scissor",
  },
  paper: {
    icon: "./images/icon-paper",
    beats: "rock",
  },
  scissor: {
    icon: "./images/icon-scissor",
    beats: "paper",
  },
};
let score = 0;

stepone.addEventListener("click", (e) => {
  if (e.target.tagName === "IMG") {
    user_selected_icon = e.target.parentElement.getAttribute("selected-icon");
  }

  if (e.target.getAttribute("selected-icon") != null) {
    user_selected_icon = e.target.getAttribute("selected-icon");
  }
  randomIndex = Math.floor(Math.random() * 3) + 0;
  house_selected_icon = icons[randomIndex];

  gameaction(user_selected_icon, house_selected_icon);
  icons.forEach((icon) => {
    userpickedbg.classList.remove(`user__picked--${icon}`);
    userpickedicon.classList.remove(`user__${icon}`);
  });
  userpickedbg.classList.add(`user__picked--${user_selected_icon}`);
  userpickedicon.classList.add(`user__${user_selected_icon}`);
  userpickedicon.setAttribute("src", `./images/icon-${user_selected_icon}.svg`);

  icons.forEach((icon) => {
    housepickedbg.classList.remove(`house__picked--${icon}`);
    housepickedicon.classList.remove(`house__${icon}`);
  });
  housepickedbg.classList.add(`house__picked--${house_selected_icon}`);
  housepickedicon.classList.add(`house__${house_selected_icon}`);
  housepickedicon.setAttribute("src", `./images/icon-${house_selected_icon}.svg`);

  if(result == "YOU WIN"){
      icons.forEach(icon => {
          userpickedbg.classList.remove(`user__picked--${icon}-icon-won`)
          housepickedbg.classList.remove(`house__picked--${icon}-icon-won`)
      })
      userpickedbg.classList.add(`user__picked--${user_selected_icon}-icon-won`);
  }

  if(result == "YOU LOSE"){
    icons.forEach(icon => {
        userpickedbg.classList.remove(`user__picked--${icon}-icon-won`)
        housepickedbg.classList.remove(`house__picked--${icon}-icon-won`)
    })
    housepickedbg.classList.add(`house__picked--${house_selected_icon}-icon-won`);
}

if(result == "TIE"){
  icons.forEach(icon => {
    userpickedbg.classList.remove(`user__picked--${icon}-icon-won`)
    housepickedbg.classList.remove(`house__picked--${icon}-icon-won`)
})
}

  resultmsg.textContent = result;
  display_score.textContent = score;


  stepone.classList.remove("scale-in")
  setTimeout(()=>{
    stepone.classList.add("hide");
  }, 200)
  stepone.classList.add("scale-out");
  stepfour.classList.remove("hide");
  stepfour.classList.remove("scale-out");
  setTimeout(()=>{
    stepfour.classList.add("scale-in");
  }, 200)
});

function gameaction(user, house) {
  if (house === game[user].beats) {
    result = "YOU WIN";
    score++;
  }
  if (user === game[house].beats) {
    result = "YOU LOSE";
    score--;
  }
  if (house === user) {
    result = "TIE";
  }
}


playagain.addEventListener("click", ()=>{
  stepfour.classList.remove("scale-in");
    setTimeout(()=>{
      stepfour.classList.add("hide");
    }, 200)
    stepfour.classList.add("scale-out");

    stepone.classList.remove("scale-out");
    stepone.classList.remove("hide");
    stepone.classList.add("scale-in");
})