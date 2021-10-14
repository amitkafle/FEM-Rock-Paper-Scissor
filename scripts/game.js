const step_two = document.querySelector(".step_two");
const step_one = document.querySelector(".step_one");

const userdiv = document.querySelector(".user");
const housediv = document.querySelector(".house");

const housepickedbg = document.querySelector(".house__picked");
const housepickedicon = document.querySelector(".house__icon");

const userpickedbg = document.querySelector(".user__picked");
const userpickedicon = document.querySelector(".user__icon");

const playagain = document.querySelector(".play_again");

const display_score = document.querySelector(".score__score");
const resultmsg = document.querySelector(".result__title");
const resultdiv = document.querySelector(".result");

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

step_one.addEventListener("click", (e) => {
  // storing user selected icon in "user_selected_icon" based on [selected-icon] data attribute
  if (e.target.tagName === "IMG") {
    user_selected_icon = e.target.parentElement.getAttribute("selected-icon");
  }

  if (e.target.getAttribute("selected-icon") != null) {
    user_selected_icon = e.target.getAttribute("selected-icon");
  }

  //To select "house_selected_icon" randomly
  randomIndex = Math.floor(Math.random() * 3) + 0;
  house_selected_icon = icons[randomIndex];

  //Function to decide who won
  gameaction(user_selected_icon, house_selected_icon);

  // Adding or removing icon/background of user selected icon
  icons.forEach((icon) => {
    userpickedbg.classList.remove(`user__picked--${icon}`);
    userpickedicon.classList.remove(`user__${icon}`);
  });
  userpickedbg.classList.add(`user__picked--${user_selected_icon}`);
  userpickedicon.classList.add(`user__${user_selected_icon}`);
  userpickedicon.setAttribute("src", `./images/icon-${user_selected_icon}.svg`);
  userpickedicon.setAttribute("alt", user_selected_icon);

  //Adding or removing icon/background of house selected icon
  icons.forEach((icon) => {
    housepickedbg.classList.remove(`house__picked--${icon}`);
    housepickedicon.classList.remove(`house__${icon}`);
  });
  housepickedicon.classList.add(`house__${house_selected_icon}`);
  housepickedicon.setAttribute(
    "src",
    `./images/icon-${house_selected_icon}.svg`
  );
  housepickedicon.setAttribute("alt", house_selected_icon);

  //Animation when going from step one to step two
  step_one.classList.remove("scale-in");
  setTimeout(() => {
    step_one.classList.add("hide");
  }, 200);
  step_one.classList.add("scale-out");
  step_two.classList.remove("scale-out");
  setTimeout(() => {
    step_two.classList.add("scale-in");
    step_two.classList.remove("hide");

    // Animating what the house selects i.e step three
    setTimeout(() => {
      icons.forEach((icon) => {
        housepickedbg.classList.remove(`house__picked--${icon}`);
        housepickedicon.classList.remove(`house__${icon}`);
      });

      housepickedbg.classList.remove("house__picked--empty");
      housepickedicon.classList.add(`house__${house_selected_icon}`);
      housepickedicon.setAttribute(
        "src",
        `./images/icon-${house_selected_icon}.svg`
      );
      housepickedicon.classList.remove("hide");
      housepickedbg.classList.add("scale-in-house-picked");
      housepickedbg.classList.add(`house__picked--${house_selected_icon}`);

      //Result of who won
      resultmsg.textContent = result;

      //Animating the user and house icon for step four
      userdiv.classList.add("push-left");
      housediv.classList.add("push-right");

      //Displaying result with ripple animation on winners icon
      setTimeout(() => {
        resultdiv.classList.remove("hide");
        display_score.textContent = score;
        if (result == "YOU WIN") {
          icons.forEach((icon) => {
            userpickedbg.classList.remove(`user__picked--${icon}-icon-won`);
            housepickedbg.classList.remove(`house__picked--${icon}-icon-won`);
          });
          userpickedbg.classList.add(
            `user__picked--${user_selected_icon}-icon-won`
          );
        }

        if (result == "YOU LOSE") {
          icons.forEach((icon) => {
            userpickedbg.classList.remove(`user__picked--${icon}-icon-won`);
            housepickedbg.classList.remove(`house__picked--${icon}-icon-won`);
          });
          setTimeout(() => {
            housepickedbg.classList.remove("scale-in-house-picked");
            housepickedbg.classList.add(
              `house__picked--${house_selected_icon}-icon-won`
            );
          }, 100);
        }

        if (result == "TIE") {
          icons.forEach((icon) => {
            userpickedbg.classList.remove(`user__picked--${icon}-icon-won`);
            housepickedbg.classList.remove(`house__picked--${icon}-icon-won`);
          });
        }
      }, 700);
    }, 500);
  }, 200);
});

//Function to decide who won
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

//To replay the game
playagain.addEventListener("click", () => {
  step_two.classList.remove("scale-in");
  setTimeout(() => {
    step_two.classList.add("hide");
  }, 200);
  step_two.classList.add("scale-out");

  step_one.classList.remove("scale-out");
  step_one.classList.remove("hide");
  step_one.classList.add("scale-in");

  setTimeout(() => {
    resultdiv.classList.add("hide");
    userdiv.classList.remove("push-left");
    housediv.classList.remove("push-right");
    housepickedbg.classList.remove("scale-in-house-picked");
    housepickedbg.classList.add("house__picked--empty");
    housepickedicon.classList.add("hide");
    icons.forEach((icon) => {
      userpickedbg.classList.remove(`user__picked--${icon}-icon-won`);
      housepickedbg.classList.remove(`house__picked--${icon}-icon-won`);
    });
  }, 400);
});
