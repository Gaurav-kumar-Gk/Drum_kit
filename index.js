//more specific writting ,drum in place of button it helps if we add btn class

//selected all the buttons
var buttons = document.querySelectorAll(".drum");
var i;
for (i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", function () {
    //this is the one way which give the theelement on which we click  like here button element
    var buttonPress = this.innerHTML;
    soundGenerator(buttonPress);
    animationEffect(buttonPress);
  });
}

document.addEventListener("keydown", function (event) {
  var buttonPress = event.key;
  soundGenerator(buttonPress);
  animationEffect(buttonPress);
});


function soundGenerator(buttonPress) {
  switch (buttonPress) {
    case "w":
      var audio = new Audio("./sounds/tom-1.mp3");
      audio.play();
      break;

    case "a":
      var audio = new Audio("./sounds/tom-2.mp3");
      audio.play();
      break;
    case "s":
      var audio = new Audio("./sounds/tom-3.mp3");
      audio.play();
      break;

    case "d":
      var audio = new Audio("./sounds/tom-4.mp3");
      audio.play();
      break;

    case "j":
      var audio = new Audio("./sounds/snare.mp3");
      audio.play();
      break;

    case "k":
      var audio = new Audio("./sounds/kick-bass.mp3");
      audio.play();
      break;

    case "l":
      var audio = new Audio("./sounds/crash.mp3");
      audio.play();
      break;
    default:
      console.log(buttonPress);
      break;
  }
}

function animationEffect(buttonPress){
document.querySelector("."+buttonPress).classList.add("pressed");

setTimeout(function () {
    document.querySelector("."+buttonPress).classList.remove("pressed");
},100)
}
