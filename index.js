// *** My (working) solution before learning instructor's solution
// for (i=0;i<8;i++) {
//   document.querySelectorAll("button")[i].addEventListener("click", handleClick);
// }

// ***Instructor solution (Using the drum class selector)***

for (i=0;i < document.querySelectorAll(".drum").length; i++) {
// *** Detect mouse clicks on drum buttons.
  document.querySelectorAll(".drum")[i].addEventListener("click", function() {
    var buttonInnerHTML = this.innerHTML;
    makeSound(buttonInnerHTML);   // Use the variable created above to turn the innerHTML of the ".drum" button clicked on into the input parameter for the makeSound function.
  });
}

// *** Detect keyboard presses corresponding to drum letters. ***
  document.addEventListener("keydown",function(event) {
    makeSound(event.key);   // Use the event detected (the key press) to identify the key value and use it as the input parameter if one of the letter keys (for the drums) is pushed.
  });

function makeSound(key) {   // function(<function name>(input parameter))
  switch(key){              // Run switch statement using the input parameter.
    case "w":
      var audio = new Audio('sounds/tom-1.mp3');
      audio.play();
    break;
    case "a":
      audio = new Audio('sounds/tom-2.mp3');
      audio.play();
    break;
    case "s":
      audio = new Audio('sounds/snare.mp3');
      audio.play();
    break;
    case "d":
      audio = new Audio('sounds/tom-3.mp3');
      audio.play();
    break;
    case "j":
      audio = new Audio('sounds/tom-4.mp3');
      audio.play();
    break;
    case "k":
      audio = new Audio('sounds/kick-bass.mp3');
      audio.play();
    break;
    case "l":
      audio = new Audio('sounds/crash.mp3');
      audio.play();
    break;
    default:
      console.log(buttonInnerHTML);
    }

  }
